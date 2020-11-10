(function(ar_ph){
/**********************************
Adriver Flash-AjaxJS code.
Last edited by Alexandr Zonov 26.10.09
***********************************/

(function(){

var ar_img_name     = 'js_100hawksworth.jpg'; // ��������
var ar_bg			= 'jsf.jpg'; // ������� ��� 1�90
var ar_img_location = '';
var ar_swf_name     = ''; // ������
var ar_swf_location = '';
var ar_flashver     = '5';
var ar_width        = '1000'; // ������ �������� ��� ������
var ar_height       = '90'; // ������ �������
var ar_gif_href     = '';
var ar_wmode        = 'opaque';
var ar_flash_pixel  = '';
var ar_gif_pixel    = '';
var ar_quality      = 'best';

/*------- no edit -------*/

var fullsize = 'width="100\x25" height="100\x25"';

ar_flashver = parseInt(ar_flashver);if(isNaN(ar_flashver)) ar_flashver = 0;

	try {
		var p = document.getElementById(ar_ph);
		var a = p.adriver;
		a.detachScript();
		
		function ar_px(i){return (/^\d+$/.test(i)?i+'px':i)}
		function rndRep(s){return s.replace(/!\[rnd\]/g,a.rnd)}
		ar_swf_name = rndRep(ar_swf_name || ar_swf_location);
		ar_img_name = rndRep(ar_img_name || ar_img_location);

		a.makeFlash = function (src, params){
			function ar_p(p,v){return typeof(v) == 'undefined' ? '' : p + '=' + v}
			
			var def_params = {quality: "best", wmode : "transparent",  play: true, loop: true, menu: false, allowscriptaccess: "always"}

			var fpath = (/^http:\/\//i.test(src) ? '' : this.comppath) + src;		
			var flashvars = 'link1=' + escape(this.cgihref + '&rleurl=')
				+ ar_p('&ar_ph', this.ph)
				+ ar_p('&target', this.target)
				+ ar_p('&ar_comppath', escape(this.comppath))
				+ ar_p('&ar_bid', this.bid)
				+ ar_p('&ar_bt', this.bt)
				+ ar_p('&ar_ad', this.adid)
				+ ar_p('&ar_nid', this.netid)
				+ ar_p('&ar_rnd', this.rnd)
				+ ar_p('&ar_ntype', this.ntype)
				+ ar_p('&ar_sliceid', this.sliceid)
				+ ar_p('&ar_sid', this.sid);
			
			var var_params = window.ActiveXObject ? {movie: fpath, flashvars: flashvars} : {src: fpath, flashvars: flashvars};

			var params_done = {}
			for (var i in def_params){params_done[i] = def_params[i]}
			for (var i in params){params_done[i] = params[i]}
			for (var i in var_params){params_done[i] = var_params[i]}

			var paramString = "", html = "";
			if (window.ActiveXObject){
				var ieid = 'a'+src.substring(0, src.indexOf(".")) + "_" + Math.round(Math.random()*100000);
				for (var i in params_done){if (!params_done.constructor.prototype.hasOwnProperty(i)) paramString += '<param name="' + i + '" value="' + params_done[i] + '">'}
				html = '<object id="' + ieid + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' + fullsize + '>' + paramString + '<\/object>';
			}else{
				for (var i in params_done){if (!params_done.constructor.prototype.hasOwnProperty(i)) paramString += i + '="' + params_done[i] + '" '}
				html = '<embed type="application/x-shockwave-flash" ' + fullsize + ' ' + paramString + '><\/embed>';
			}
			return html;
		}

		a.onDomReady(function(){
			a.setAnchor();
			//a.anchor.style.width = ar_px(ar_width);
			a.anchor.style.height = ar_px(ar_height);

			var ar_pix = rndRep(ar_swf_name&&a.checkFlash(ar_flashver) ? ar_flash_pixel : ar_gif_pixel);

			if (location.href.indexOf('mngcgi')==-1&&ar_pix) {
				if(document.createElement){
					var i=document.createElement('img');
					i.style.position='absolute';i.style.width=i.style.height='0px';
					i.src=ar_pix;
					p.appendChild(i);
				}
				else{new Image().src = ar_pix}
			}

			if(a.checkFlash(ar_flashver)&&ar_swf_name) {
				var params = {};

				if (ar_quality) params.quality = ar_quality;
				if (ar_wmode) params.wmode = ar_wmode;

				a.anchor.innerHTML = a.makeFlash(ar_swf_name, params);
			}
			else if (ar_img_name) {
				ar_gif_href = rndRep(ar_gif_href);
				ar_img_name = (ar_img_name.indexOf("http://") != 0 ? a.comppath : '') + ar_img_name;
				ar_bg = (ar_bg.indexOf("http://") != 0 ? a.comppath : '') + ar_bg;
				var ar_html = '<table width="100%" height="'+ar_height+'" cellspacing="0" cellpadding="0" border="0" style="line-height: 100%; margin: 0; padding: 0;"><tbody><tr>'
+ '<td style="width: 50%; line-height: 100%; margin: 0; padding: 0;"><a target="_blank" href="' + a.cgihref + '&rleurl=' + escape(ar_gif_href) + '"><img width="100%" vspace="0" hspace="0" height="90" border="0" src="'+ar_bg+'"></a></td>'
+ '<td width="'+ar_width+'" style="background-image:url(\''+ar_bg+'\'); line-height: 100%; margin: 0; padding: 0;">'
+ '<a href="' + a.cgihref + '&rleurl=' + escape(ar_gif_href) + '" target="_blank"><img src="' + ar_img_name +'" border=0 ' + (ar_width != '100%' ? 'width="'+ar_width+'" ' : '') + 'height="'+ar_height+'"></a></td>'
+ '<td style="width: 50%; line-height: 100%; margin: 0; padding: 0;"><a target="_blank" href="' + a.cgihref + '&rleurl=' + escape(ar_gif_href) + '"><img width="100%" vspace="0" hspace="0" height="90" border="0" src="'+ar_bg+'"></a></td>'
+ '</tr></tbody></table>';
				a.anchor.innerHTML = ar_html;
			}
		});
	} catch (e) {}
}());})("topline");
