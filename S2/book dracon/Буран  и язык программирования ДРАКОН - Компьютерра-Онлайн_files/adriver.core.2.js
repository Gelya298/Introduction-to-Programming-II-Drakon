function adriver (ph, prm, defer){ 
	if(this instanceof adriver){
		var p = null;
		if (typeof(ph) == "string"){
			p = document.getElementById(ph);
		}else{
			p = ph; ph = p.id;
		}
		
		if(!p) {return null}
		if (adriver.items[ph]){ return adriver.items[ph]}
		
		adriver.items[ph] = this;
		this.ph = ph;
		this.p = p;

		this.reply = {};
		this.prm = p.title ? adriver.parseJSON(p.title) : {};
		adriver.extend(this.prm, prm, {ph: ph});
		this.className = p.className.match(/\w+\b/); 

		this.loadCompleteQueue = new adriver.queue();
		this.domReadyQueue = new adriver.queue(adriver.isDomReady);

		var my = this;
		adriver.onDomReady(function(){my.domReady()});
		if (!defer) this.load(); 
		return this;
	}else{
		return arguments.length ? adriver.items[ph] : adriver.items;
	}
}
	
adriver.loadScript = function(req){ 
	try {
		req = req.replace(/!\[rnd\]/,Math.round(Math.random()*10000000));  
		var head = document.getElementsByTagName("head").item(0);
		var s = document.createElement("script");
		s.setAttribute("type", "text/javascript");
		s.setAttribute("charset", "windows-1251");
		s.setAttribute("src", req);
		s.onreadystatechange = function(){if (/loaded|complete/.test(this.readyState))head.removeChild(s)};
		s.onload = function (e) {head.removeChild(s)};
		head.insertBefore(s, head.firstChild); 
	}catch(e){}
} 

adriver.extend = function (){
	var l = arguments[0]; 
	for (var i = 1, len = arguments.length; i<len; i++){
		var r = arguments[i]; 
		for (var j in r){ 
			if(r.hasOwnProperty(j)){ 
				if (r[j] instanceof Object){if(l[j]) {adriver.extend(l[j], r[j]);}else{l[j] = adriver.extend(r[j] instanceof Array ? [] : {}, r[j]);}}else{l[j] = r[j];}
			}
		}
	}
	return l
}

adriver.extendL = function (l, r){for(var i in l){if (l.hasOwnProperty(i) && r.hasOwnProperty(i)) l[i] = r[i]}; return l}

adriver.toQueryString = function (o, delimiter, assign) {
	delimiter = delimiter || "&"; 
	assign = assign || "=";
	var l = []; 
	for (var i in o){if (o.hasOwnProperty(i)) l.push (i + assign + o[i])}
	return l.join(delimiter)
}

adriver.parseJSON = function (text){
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	if (cx.test(text)) {text = text.replace(cx, function (a) {return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)})}
	if (!(/^\s*\{.*\}\s*$/).test(text)) text = "{" + text + "}";	
	text = text.replace(/'/g,"\"");
	
	return /^[\],:{}\s]*$/.
		test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").
		replace(/\w+(?=\s+|:)|"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").
		replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? eval("(" + text + ")") : {};
}


adriver.prototype = {
	isLoading : false,
	
	load : function (){ 
		try { 
			if (!this.isLoading){
				this.isLoading = true;
				var req = adriver.extend({}, adriver.defaults, this.prm);
				adriver.loadScript(adriver.redirectHost + "/cgi-bin/merle.cgi?rnd=![rnd]&" + adriver.toQueryString(req)); 
			}
		}catch(e){}
		return this;
	}, 
		
	reload: function (){
		this.reset();
		this.load();
		return this;
	},

	onLoadComplete : function (f) {
		this.loadCompleteQueue.push(f);
		return this;
	},
	
	loadComplete : function (){	
		this.isLoading = false; 
		this.loadCompleteQueue.execute(); 
		return this;
	},
	
	onDomReady : function (f) {
		this.domReadyQueue.push(f);
		return this;
	},
	
	domReady : function (){
		this.domReadyQueue.execute();
		return this;
	},
	
	reset : function (){	
		this.loadCompleteQueue.flush();
		this.domReadyQueue.flush(adriver.isDomReady);
		this.isLoading = false;
		return this;
	}
}

adriver.onDomReady = function (f){
	adriver.domReadyQueue.push(f);
}

adriver.onBeforeDomReady = function (f){
	adriver.domReadyQueue.unshift(f);
}

adriver.domReady = function(){ 
	adriver.isDomReady = true;
	adriver.domReadyQueue.execute();
}


adriver.setDefaults = function (defaults){adriver.extend(adriver.defaults, defaults)}
adriver.setOptions = function (options){adriver.extend(adriver.options, options)}
adriver.setPluginPath = function(path){adriver.extend(adriver.pluginPath, path)}


adriver.queue = function (flag){ this.q = []; this.flag = flag ? true: false }

adriver.queue.prototype = {
	push : function (f){this.flag ? f() : this.q.push(f)}, 
	unshift : function (f){this.flag ? f() : this.q.unshift(f)},
	execute : function (flag){var f; var undefined; while (f = this.q.shift()) f(); if (flag == undefined) flag=true; this.flag = flag ? true : false},	
	flush : function (flag){this.q.length = 0; this.flag = flag ? true: false}
}


adriver.Plugin = function (id){
	if(this instanceof adriver.Plugin){
		if(id && !adriver.plugins[id]){
			this.id = id;
			this.q = new adriver.queue();
			this.loadingStatus = 0;
			adriver.plugins[id] = this;
			return this;
		}
	}
	return adriver.plugins[id];
}

adriver.Plugin.prototype = {
	load: function (){
		this.loadingStatus = 1; 
		var suffix = this.id.substr(this.id.lastIndexOf('.')+1);
		var pluginPath = adriver.pluginPath[suffix] || adriver.defaultMirror + "/plugins/";
		adriver.loadScript(pluginPath + this.id + ".js");
	},
	loadComplete: function (){ this.loadingStatus = 2; this.q.execute(); return this },
	onLoadComplete: function (f){ this.q.push(f); return this }
}


adriver.Plugin.require = function(){ 
	var me = this, counter = 0; 
	this.q = new adriver.queue();
	
	for (var i = 0, len = arguments.length; i < len; i ++){
		var p = new adriver.Plugin(arguments[i]); 
		if (p.loadingStatus != 2){
			counter++;
			p.onLoadComplete(function (){if(counter-- == 1) {me.q.execute()}});
			if (!p.loadingStatus) p.load();
		}
	}
	if(!counter) {this.q.execute()}
}

adriver.Plugin.require.prototype.onLoadComplete = function (f){this.q.push(f); return this}


adriver.start = function (){
	adriver.version = "2.0";
	adriver.items = {};
	adriver.defaults = {tail256: (document.referrer ? escape(document.referrer) : 'unknown')};
	adriver.options = {};
	adriver.plugins = {};
	adriver.pluginPath = {};
	adriver.redirectHost = "http://ad.adriver.ru";
	adriver.defaultMirror = "http://content.adriver.ru";
	adriver.isDomReady = false;
	adriver.domReadyQueue = new adriver.queue();

	adriver.checkDomReady(adriver.domReady); 
}


adriver.checkDomReady = function(f){
	try {
		var d = document, oldOnload = window.onload;
		if (/WebKit/i.test(navigator.userAgent)) {(function(){/loaded|complete/.test(d.readyState) ? f() : setTimeout (arguments.callee, 100)})()} 
		else if (d.addEventListener) {d.addEventListener("DOMContentLoaded", f, false)} 
		else if (d.all && !window.opera){
			document.write("<script id=__onDOMContentLoaded defer src=//:><\/script>");
			document.getElementById("__onDOMContentLoaded").onreadystatechange = function(){if (this.readyState == "complete" ) { f() }}
		}
		window.onload = function(){if(oldOnload) oldOnload(); f()}
	} catch (e){}
}


adriver.start();