(function(e,c,ka){function Za(c){var e=[],k;for(k in c)c.hasOwnProperty(k)&&(e[e.length]=k+"="+encodeURIComponent(c[k]));return e.join("&")}function F(c){for(var e=1,k=c.length;e<arguments.length;e++)c[k++]=arguments[e];return c.length}function Ia(c,e){for(var k=0,A=c.length;k<e.length;k++)c[A++]=e[k]}function la(c){for(var e="string"==typeof c?function(e){return c.charCodeAt(e)}:function(e){return c[e]},k=c.length,A=0,o=255,t=255;k;){var B=21<k?21:k,k=k-B;do{var q=e(A++);if(255<q)var F=q>>8,q=q&
255,q=q^F;o+=q;t+=o}while(--B);o=(o&255)+(o>>8);t=(t&255)+(t>>8)}e=(o&255)+(o>>8)<<8|(t&255)+(t>>8);return 65535==e?0:e}function ta(e,q,k,A){var o="";k&&(o=new Date,o.setTime(o.getTime()+6E4*k),o=";expires="+o.toGMTString());c.cookie=e+"="+q+o+";path="+(A||"/")}function ua(e){return c.cookie.match(RegExp("(?:^|;\\s*)"+e+"=([^;]*)"))?RegExp.$1:null}function $a(){ta("_metrika_enabled","1",60);var c=!!ua("_metrika_enabled");ta("_metrika_enabled","",-1);return c}function q(){for(var c={},q="hash,host,hostname,href,pathname,port,protocol,search".split(","),
k=q.length,A=k;A--;)c[q[A]]="";try{for(var o=e.location,A=k;A--;){var t=q[A];c[t]=o[t]}}catch(B){R&&(c=R)}return c}function Y(c){try{delete e[c]}catch(q){e[c]=ka}}function ba(e){var q=c.createElement("script");q.type="text/javascript";q.async=!0;q.src=e;try{var k=c.getElementsByTagName("html")[0];c.getElementsByTagName("head")[0]||k.appendChild(c.createElement("head"));var A=c.getElementsByTagName("head")[0];A.insertBefore(q,A.firstChild)}catch(o){}}function ma(c){ba(va+"//metrika.yandex.ru/js/"+
c+"/_loader.js")}function ab(C,I,k,A,o){function t(d){return function(){try{return d.apply(this,arguments)}catch(j){(new Image).src="//an.yandex.ru/jserr/"+C+"?"+Za({"cnt-class":100+I,errmsg:j.message+"--"+(d.toString().match(/function\s([^(]*)/)||{1:""})[1]})}}}function B(){return"CSS1Compat"==c.compatMode?c.documentElement:c.body}function R(){var d=B();return[d.clientWidth,d.clientHeight]}function L(){var d=B(),j=R();return[Math.max(d.scrollWidth,j[0]),Math.max(d.scrollHeight,j[1])]}function X(){return[e.pageXOffset||
c.documentElement&&c.documentElement.scrollLeft||c.body&&c.body.scrollLeft||0,e.pageYOffset||c.documentElement&&c.documentElement.scrollTop||c.body&&c.body.scrollTop||0]}function Z(d){if(!d.ownerDocument||"PARAM"==d.tagName||d==c.body||d==c.documentElement)return[0,0];if(d.getBoundingClientRect)return d=d.getBoundingClientRect(),[Math.round(d.left+S[0]),Math.round(d.top+S[1])];for(var j=0,a=0;d;)j+=d.offsetLeft,a+=d.offsetTop,d=d.offsetParent;return[j,a]}function ca(d){return d==c.documentElement?
null:d==c.body?c.documentElement:d.parentNode}function $(d,j){var a=[];if(d)for(var b=d.childNodes,c=0,f=b.length;c<f;c++){var g=b[c];!("INPUT"==g.nodeName&&g.type&&"hidden"==g.type.toLocaleLowerCase())&&(!j||g.nodeName==j)&&F(a,g)}return a}function na(d){var j=Z(d),d=d==c.body||d==c.documentElement?L():[d.offsetWidth,d.offsetHeight];return[j[0],j[1],d[0],d[1]]}function M(d){for(var j="",d=d.childNodes,a=0,b=d.length;a<b;a++)3==d[a].nodeType&&(j+=d[a].nodeValue);return la(j.replace(/[\u0000-\u0020]+/g,
""))}function aa(d){var j="",a="className,width,height,align,title,alt,name".split(",");"IMG"==d.tagName&&(j+=d.src.toLowerCase());"A"==d.tagName&&(j+=d.href.toLowerCase());for(var b=0;b<a.length;b++)j+=(""+(d.getAttribute(a[b])||"")).toLowerCase();return la(j.replace(/[\u0000-\u0020]+/g,""))}function oa(d){for(var j=c.getElementsByTagName("form"),a=0,b=j.length;a<b;a++)if(j[a]==d)return a;return-1}function da(d){return"INPUT"==d.nodeName&&"submit"!=d.type&&"image"!=d.type&&"hidden"!=d.type?"radio"==
d.type||"checkbox"==d.type?!d.checked:!d.value:"TEXTAREA"==d.nodeName?!d.value:"SELECT"==d.nodeName?0>d.selectedIndex:!0}function y(d,j,a){var b=t(function(d){return a(d||e.event)});T[T.length]=[d,j,a,b];d.addEventListener?d.addEventListener(j,b,!0):d.attachEvent&&d.attachEvent("on"+j,b)}function r(d,j,a){for(var b=0;b<T.length;b++)if(T[b]&&T[b][0]==d&&T[b][1]==j&&T[b][2]==a){var c=T[b][3];delete T[b];break}c&&(d.removeEventListener?d.removeEventListener(j,c,!0):d.detachEvent&&d.detachEvent("on"+
j,c))}function ia(d){var j=B();return[d.pageX||d.clientX+S[0]-(j.clientLeft||0)||0,d.pageY||d.clientY+S[1]-(j.clientTop||0)||0]}function U(d){return d.target||d.srcElement}function ea(d){return(d.shiftKey?tb:0)|(d.ctrlKey?bb:0)|(d.altKey?ub:0)|(d.metaKey?Fb:0)|(d.ctrlKey||d.altKey?Ja:0)}function ja(d){var j=(new Date).getTime();d&&j<d&&(cb+=d-j+z);e.setTimeout(t(function(){ja(j)}),z)}function pa(){var d=(new Date).getTime()+cb;d<db&&(d=db+z/2);return db=d}function G(){return Math.round((pa()-Hb)/
Ib)}function fa(d,j){j=Math.max(0,Math.min(j,65535));F(d,j>>8,j&255)}function x(d,j){F(d,j&255)}function i(d,j){for(j=Math.max(0,j|0);127<j;)F(d,j&127|128),j>>=7;F(d,j)}function wa(d,j){255<j.length&&(j=j.substr(0,255));F(d,j.length);for(var a=0;a<j.length;a++)fa(d,j.charCodeAt(a))}function xa(d,j){i(d,j.length);for(var a=0;a<j.length;a++)i(d,j.charCodeAt(a))}function ta(d){if(!d.nodeName)return d[J]=-1,null;var a=Number(d[J]);if(!isFinite(a)||0>=a)return null;var b=Kb,c=0,g=ca(d),f=g&&g[J]?g[J]:
0;0>f&&(f=0);var e=d.nodeName.toUpperCase(),l=Lb[e];l||(b|=Mb);var h;a:{h=$(ca(d),d.nodeName);for(var w=0;w<h.length;w++)if(h[w]==d){h=w;break a}h=0}h||(b|=Nb);w=na(d);(g=g?na(g):null)&&w[0]==g[0]&&w[1]==g[1]&&w[2]==g[2]&&w[3]==g[3]&&(b|=vb);Ka[a].pos=w[0]+"x"+w[1];Ka[a].size=w[2]+"x"+w[3];d.id&&"string"==typeof d.id&&(b|=wb);(g=M(d))&&(b|=Ob);var p=aa(d);p&&(c|=Pb);var m;a:{m=$(ca(d),d.tagName);for(var u=0;u<m.length;u++)if(!(m[u].id&&"string"==typeof m[u].id)&&aa(m[u])==p&&M(m[u])==g){m=!0;break a}m=
!1}if(m)var b=b|xb,s=la((d.innerHTML||"").replace(/(<[^>]*>|[\u0000-\u0020])/g,""));m=[];x(m,Y);i(m,a);x(m,b);i(m,f);l?x(m,l):wa(m,e);h&&i(m,h);b&vb||(i(m,w[0]),i(m,w[1]),i(m,w[2]),i(m,w[3]));b&wb&&wa(m,d.id);g&&fa(m,g);b&xb&&fa(m,s);x(m,c);p&&fa(m,p);return m}function La(d,a,b,c,g,f){for(;b&&(!b.offsetWidth||!b.offsetHeight);)b=ca(b);if(!b)return null;var e=b[J];if(!e||0>e)return null;var l={mousemove:ba,click:Qb,mousedown:Ta,mouseup:Rb,touch:sa}[a];if(!l)return null;var w=Z(b),b=[];x(b,l);i(b,d);
i(b,e);i(b,Math.max(0,c[0]-w[0]));i(b,Math.max(0,c[1]-w[1]));/^mouse(up|down)|click$/.test(a)&&(d=g||f,x(b,2>d?Sb:d==(g?2:4)?Tb:Ub));return b}function ya(d,a){var b=[];x(b,ma);i(b,d);i(b,a[0]);i(b,a[1]);return b}function va(d,a,b){var c=[];x(c,Wb);i(c,d);i(c,a[0]);i(c,a[1]);i(c,b[0]);i(c,b[1]);return c}function n(d,a,b,c){var g=[];x(g,Ua);i(g,d);fa(g,a);x(g,b);d=c[J];if(!d||0>d)d=0;i(g,d);return g}function za(d,a){var b,c;0==a.length?c=b="":100>=a.length?(b=a,c=""):200>=a.length?(b=a.substr(0,100),
c=a.substr(100)):(b=a.substr(0,97),c=a.substr(a.length-97));var g=[];x(g,Xb);i(g,d);xa(g,b);xa(g,c);return g}function Aa(d){var a=[];x(a,Yb);i(a,d);return a}function ga(d){var a=[];x(a,$a);i(a,d);return a}function Ma(d){var a=[];x(a,ab);i(a,d);return a}function Na(d,a){var b=[];x(b,pb);i(b,d);i(b,a[J]);return b}function H(d,a){var b=[];x(b,qb);i(b,d);i(b,a[J]);return b}function Oa(d,a,b){var c=[];x(c,rb);i(c,d);i(c,a[J]);wa(c,""+b);return c}function eb(d,a,b){if(b=s(b)){b.shift();a=p(a);a.shift();
Ia(a,b);b=[];x(b,sb);i(b,d);i(b,a.length);for(d=0;d<a.length;d++)x(b,a[d]);return b}return null}function V(d,a){var b=a[J];if(0<b){var c=[],g=na(a),f=Ka[b],e=g[0]+"x"+g[1],l=g[2]+"x"+g[3];if(e!=f.pos)f.pos=e,x(c,Wa),i(c,d),i(c,b),i(c,g[0]),i(c,g[1]);if(l!=f.size)f.size=l,x(c,Xa),i(c,d),i(c,b),i(c,g[2]),i(c,g[3]);if(c.length)return c}return null}function Ba(d){var a=d[J];if(!a||0>a||!/^INPUT|SELECT|TEXTAREA$/.test(d.nodeName)||!d.form||/(?:^|\s)-metrika-noform(?:\s|$)/.test(d.form.className))return null;
var b=oa(d.form);if(0>b)return null;var c;c="INPUT"==d.nodeName?{text:0,password:2,radio:3,checkbox:4,file:6,image:7}[d.type]:{SELECT:1,TEXTAREA:5}[d.nodeName];if("number"!=typeof c)return null;for(var g=-1,f=d.form.elements,e=f.length,l=0,w=0;l<e;l++)if(f[l].name==d.name){if(f[l]==d){g=w;break}w++}if(0>g)return null;f=[];x(f,Va);i(f,a);i(f,b);i(f,c);xa(f,d.name||"");i(f,g);return f}function Ca(d,a){var b=oa(a);if(0>b)return null;for(var c=a.elements,g=c.length,f=[],e=0;e<g;e++)if(!da(c[e])){var l=
c[e][J];l&&0<l&&F(f,l)}c=[];x(c,ra);i(c,d);i(c,b);i(c,f.length);for(b=0;b<f.length;b++)i(c,f[b]);return c}function ha(d){clearTimeout(yb);for(var a=(new Date).getTime()+Zb;Pa.length&&(d||+(new Date).getTime()<a);){var b=Pa.shift();if(b=b[0].apply(e,b[1]))6500<qa.length+b.length&&w(),Ia(qa,b),Qa||(Qa=e.setTimeout(t(w),$b))}!0===d&&w(!0);Pa.length&&(yb=e.setTimeout(t(ha),ac))}function D(d,a,b){F(Pa,[d,a]);ha(b)}function N(d){if(d[J])D(V,[G(),d]);else{var a=ca(d);a&&N(a);d[J]=fb;Ka[fb]={};fb++;D(ta,
[d]);D(Ba,[d])}}function O(d){var a=U(d);a&&"SCROLLBAR"!=a.nodeName&&(N(a),D(La,[G(),d.type,a,ia(d),d.which,d.button]))}function Da(d){O(d);var a,b;if(e.getSelection)d=e.getSelection(),a=d.toString(),b=d.anchorNode;else if(c.selection&&c.selection.createRange)d=c.selection.createRange(),a=d.text,b=d.parentElement();for(;b&&1!=b.nodeType;)b=b.parentNode;if(!(b&&"INPUT"==b.tagName&&"password"==b.type||b&&/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(b.className))&&a!=gb)gb=a,D(za,[G(),a])}function Ea(d){var a=
pa(),b=a-zb;if(!(b<ua)){var c=ia(d),g=hb[0]-c[0],f=hb[1]-c[1],g=g*g+f*f;if(!(0>=g||16>g&&100>b)&&!(20>b&&256>g))zb=a,hb=c,O(d)}}function P(){S=X();var d=pa();d-Ab<ua||10>Math.abs(S[0]-ib[0])&&10>Math.abs(S[1]-ib[1])||(Ab=d,ib=S,D(ya,[G(),S]))}function a(){D(va,[G(),R(),L()])}function g(d){w(!0);if("beforeunload"==d.type)for(d=+new Date+50;+new Date<d;);}function b(d,a,b){d=U(d);"INPUT"==d.tagName&&"password"==d.type||/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(d.className)||(N(d),D(n,[G(),a,b,d]))}function f(d){var a=
d.keyCode,c=ea(d);if({3:1,8:1,9:1,13:1,16:1,17:1,18:1,19:1,20:1,27:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,45:1,46:1,91:1,92:1,93:1,106:1,110:1,111:1,144:1,145:1}[a]||112<=a&&123>=a||96<=a&&105>=a||c&Ja)19==a&&(c&~Ja)==bb&&(a=144),b(d,a,c|Ja),jb=!1,e.setTimeout(t(function(){jb=!0}),1),67==a&&c&bb&&!(c&ub)&&!(c&tb)&&h()}function l(d){jb&&!kb&&0!==d.which&&(b(d,d.charCode||d.keyCode,ea(d)),kb=!0,e.setTimeout(t(function(){kb=!1}),1))}function h(){lb||(lb=!0,gb&&D(Aa,[G()]),e.setTimeout(t(function(){lb=
!1}),1))}function m(){Fa||(Fa=!0,D(ga,[G()]))}function Ga(){Fa&&(Fa=!1,D(Ma,[G()]))}function Bb(d){(!Fa||d&&!d.fromElement)&&m()}function Cb(d){d&&!d.toElement&&Ga()}function u(d){if((d=U(d))&&/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(d.tagName))N(d),D(Na,[G(),d])}function Ra(d){if((d=U(d))&&/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(d.tagName))N(d),D(H,[G(),d])}function v(d){d=U(d);if(!("INPUT"==d.tagName&&"password"==d.type||d&&/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(d.className))&&d&&/^INPUT|SELECT|TEXTAREA$/.test(d.tagName)){var a=
/^(checkbox|radio)$/.test(d.type)?d.checked:d.value;N(d);D(Oa,[G(),d,a])}}function Ha(d){d=U(d);if(!/(?:^|\s)-metrika-noform(?:\s|$)/.test(d.className)&&"FORM"==d.nodeName){for(var a=d.elements,b=0;b<a.length;b++)da(a[b])||N(a[b]);D(Ca,[G(),d],!0)}}function E(d){P();if(d.touches&&d.touches.length){var a=U(d);if(a){N(a);for(var b=0;b<d.touches.length;b++)D(La,[G(),"touch",a,[d.touches[b].pageX,d.touches[b].pageY],0,0])}}}function w(){clearTimeout(Qa);Qa=0;if(qa.length){for(var d={rn:Math.round(1E5*
Math.random()),"wv-type":0,"cnt-class":I,"page-url":""+q().href,wmode:0,"wv-hit":A,"wv-part":bc++,"wv-check":la(qa),"browser-info":["z",Db,"i",mb].join(":")},a=qa,b=a.length,c=[],g=b-b%3,f,e=0;e<g;e+=3)f=(a[e]<<16)+(a[e+1]<<8)+a[e+2],F(c,W[f>>18&63],W[f>>12&63],W[f>>6&63],W[f&63]);switch(b-g){case 1:f=a[g]<<4;F(c,W[f>>6&63],W[f&63],"__");break;case 2:f=(a[g]<<10)+(a[g+1]<<2),F(c,W[f>>12&63],W[f>>6&63],W[f&63],"_")}a={"wv-data":c.join("")};o.send("visor","webvisor",d,a);qa.length=0}}function Eb(d){if("undefined"==
typeof d)return[cc];if(null===d)return[dc];if("boolean"==typeof d)return[d?ec:fc];if("number"==typeof d)return gc(d);if("string"==typeof d)return p(d);if("[object Array]"=={}.toString.call(d))return s(d);if("[object Date]"=={}.toString.call(d))return[hc].concat(K(d.getFullYear())).concat(K(d.getMonth())).concat(K(d.getDate())).concat(K(d.getHours())).concat(K(d.getMinutes())).concat(K(d.getSeconds())).concat(K(d.getMilliseconds()));if("[object RegExp]"=={}.toString.call(d)){var a;a=0|(d.global?1:
0);a|=d.ignoreCase?2:0;a|=d.multiline?4:0;a|=d.lastIndex?8:0;var b=p(d.source);b.shift();return[ic,a].concat(b).concat(d.lastIndex?K(d.lastIndex):[])}if(d&&d.ownerDocument==c)return N(d),[jc].concat(K(d[J]));if("[object Object]"==d.toString()){a=[];for(b in d)a.push(b),a.push(d[b]);d=[kc].concat(K(a.length/2));for(b=0;b<a.length;b++){var g=Eb(a[b]);if(!g)return null;d=d.concat(g)}return d}return null}function gc(d){if(isNaN(d))return[lc];if(d==Number.NEGATIVE_INFINITY)return[mc];if(d==Number.POSITIVE_INFINITY)return[nc];
if(0===d)return[oc];var a=!1;0>d&&(d*=-1,a=!0);var b=(""+d).split("e"),d=+(b[1]||0)+(-1==b[0].indexOf(".")?b[0].length:b[0].indexOf(".")),b=+b[0].replace(".","");return[a?pc:qc].concat(K(b)).concat(K(d))}function p(d){for(var a=[rc].concat(K(d.length)),b=0;b<d.length;b++)a=a.concat(K(d.charCodeAt(b)));return a}function s(a){for(var b=[sc].concat(K(a.length)),c=0;c<a.length;c++){var g=Eb(a[c]);if(!g)return null;b=b.concat(g)}return b}function K(a){for(var b=[];127<a;)b.push(a&127|128),a>>=7;b.push(a);
return b}var Zb=100,ac=200,$b=15E3,z=20,Ib=50,ua=10,Y=1,ba=2,ma=3,Ta=4,Ua=5,Va=7,Wa=9,Xa=10,ra=11,sa=12,$a=14,ab=15,pb=17,qb=18,rb=19,sb=26,Yb=27,Wb=28,Xb=29,Rb=30,Qb=32,Sb=1,Ub=2,Tb=4,xb=1,Mb=2,Nb=4,vb=8,Ob=16,wb=32,Kb=64,Pb=2,ub=1,tb=2,bb=4,Fb=8,Ja=16,Lb={A:1,ABBR:2,ACRONYM:3,ADDRESS:4,APPLET:5,AREA:6,B:7,BASE:8,BASEFONT:9,BDO:10,BIG:11,BLOCKQUOTE:12,BODY:13,BR:14,BUTTON:15,CAPTION:16,CENTER:17,CITE:18,CODE:19,COL:20,COLGROUP:21,DD:22,DEL:23,DFN:24,DIR:25,DIV:26,DL:27,DT:28,EM:29,FIELDSET:30,FONT:31,
FORM:32,FRAME:33,FRAMESET:34,H1:35,H2:36,H3:37,H4:38,H5:39,H6:40,HEAD:41,HR:42,HTML:43,I:44,IFRAME:45,IMG:46,INPUT:47,INS:48,ISINDEX:49,KBD:50,LABEL:51,LEGEND:52,LI:53,LINK:54,MAP:55,MENU:56,META:57,NOFRAMES:58,NOSCRIPT:59,OBJECT:60,OL:61,OPTGROUP:62,OPTION:63,P:64,PARAM:65,PRE:66,Q:67,S:68,SAMP:69,SCRIPT:70,SELECT:71,SMALL:72,SPAN:73,STRIKE:74,STRONG:75,STYLE:76,SUB:77,SUP:78,TABLE:79,TBODY:80,TD:81,TEXTAREA:82,TFOOT:83,TH:84,THEAD:85,TITLE:86,TR:87,TT:88,U:89,UL:90,VAR:91,NOINDEX:100},S=X(),T=[],
cb=0;ja(0);var db=0,Pa=[],yb,fb=1,zb=0,hb=[0,0],Ab=0,ib=[0,0],jb=!0,kb=!1,gb="",lb=!1,Fa=!0,W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-".split(""),qa=[],Qa,bc=1,cc=1,dc=2,lc=3,mc=4,nc=5,oc=6,ec=7,fc=8,rc=9,qc=10,pc=11,sc=12,hc=13,ic=14,jc=15,kc=16,Hb=pa(),J="metrikaId_"+Math.random(),Ka={},nb=":submit"+Math.random();if("MetrikaPlayer"!=e.name&&(y(c,"mousemove",Ea),y(c,"click",O),y(c,"mousedown",O),y(c,"mouseup",Da),y(e,"scroll",P),y(e,"beforeunload",g),e.Components==ka&&y(e,
"unload",g),y(e,"resize",a),y(c,"keydown",f),y(c,"keypress",l),y(c,"copy",h),y(c,"touchmove",E),y(c,"touchstart",E),c.attachEvent&&!e.opera?(y(c,"focusin",Bb),y(c,"focusout",Cb)):(y(e,"focus",m),y(e,"blur",Ga),y(c,"blur",Ga)),c.addEventListener?(c.addEventListener("focus",u,!0),c.addEventListener("blur",Ra,!0),c.addEventListener("change",v,!0),c.addEventListener("submit",Ha,!0)):c.attachEvent&&(y(c,"focusin",u),y(c,"focusout",Ra),function(){for(var a=c.getElementsByTagName("form"),b=0;b<a.length;b++){for(var g=
a[b].getElementsByTagName("*"),f=0;f<g.length;f++)/^INPUT|SELECT|TEXTAREA$/.test(g[f].tagName)&&y(g[f],"change",v);y(a[b],"submit",Ha)}}()),function(){var a=c.getElementsByTagName("form");if(a.length)for(var b=0;b<a.length;b++)a[b][nb]=a[b].submit,a[b].submit=function(){Ha({target:this});return this[nb]()}}(),"0:0"!=S.join(":")&&P(),Ya.Metrika.captureFunctions=function(){for(var a=0;a<arguments.length;a++){var b=arguments[a];"function"==typeof e[b]&&(e[b]=function(a,d){return function(){var b;D(eb,
[G(),a,arguments]);return d.apply(this,arguments)}}(b,e[b]))}},"undefined"!=typeof k&&k.webvisor)){var Q=k.webvisor;if(Q.captureFunctions){if("[object Array]"!=Object.prototype.toString.call(Q.captureFunctions))Q.captureFunctions=[Q.captureFunctions];Ya.Metrika.captureFunctions.apply(this,Q.captureFunctions)}if(Q.uploadPages){if("[object Array]"!=Object.prototype.toString.call(Q.uploadPages))Q.uploadPages=[Q.uploadPages];for(var ob=0;ob<Q.uploadPages.length;ob++){var Sa=Q.uploadPages[ob];if("string"==
typeof Sa&&(Sa=Sa.replace(/[.*+?\^=!:${}()|\[\]\/\\]/g,function(a){return"*"==a?".*":"\\"+a}),RegExp("^"+Sa+"$").test(q().href))){Ya.Metrika.uploadPage();break}}}}return{stop:function(){r(c,"mousemove",Ea);r(c,"click",O);r(c,"mousedown",O);r(c,"mouseup",Da);r(e,"scroll",P);r(e,"beforeunload",g);r(e,"unload",g);r(e,"resize",a);r(c,"keydown",f);r(c,"keypress",l);r(c,"copy",h);r(c,"touchmove",E);r(c,"touchstart",E);r(c,"focusin",Bb);r(c,"focusout",Cb);r(e,"focus",m);r(e,"blur",Ga);r(c,"blur",Ga);c.removeEventListener?
(c.removeEventListener("focus",u,!0),c.removeEventListener("blur",Ra,!0),c.removeEventListener("change",v,!0),c.removeEventListener("submit",Ha,!0)):c.detachEvent&&(r(c,"focusin",u),r(c,"focusout",Ra),function(){for(var a=c.getElementsByTagName("form"),b=0;b<a.length;b++){for(var g=a[b].getElementsByTagName("*"),f=0;f<g.length;f++)/^INPUT|SELECT|TEXTAREA$/.test(g[f].tagName)&&r(g[f],"change",v);r(a[b],"submit",Ha)}}());(function(){for(var a=c.getElementsByTagName("form"),b=0;b<a.length;b++)a[b].submit=
a[b][nb]})()}}}var pb=!0;e.Ya=e.Ya||{};Ya._metrika=Ya._metrika||{};Ya._metrika.hitParam=Ya._metrika.hitParam||{};var qb=!1,R=q(),Db,mb,X=e.navigator,Z=e.screen,va="https:"==R.protocol?"https:":"http:",rb="$Rev: 1825 $".match(/(\d+)/)[1],$="object"==typeof c.all,Ta=64,aa=$?512:2048,Ua=$?512:2048,Va=$?100:400,ia="noindex",ja=50,Wa=RegExp("\\.(7z|aac|ai|avi|apk|bmp|cab|csv|cdr|dmg|djvu?|doc(x|m|b)?|eps|exe|flv|gif|gz|jpe?g|js|m4a|mp(3|4|e?g)|mov|msi|ods|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sit|tar|tif?f|torrent|txt|wav|wma|wmv|xls(x|m|b)?|xpi|zip)$",
"i"),sb=+new Date,Xa="_ym_visorc";e.Ya.Metrika=function(C,I,k,A){function o(a,c,b){V[V.length]=[b,b];a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)}function t(a,c,b){for(var f=0;f<V.length;f++)if(V[f]&&V[f][0]==b){var e=V[f][1];delete V[f];break}e&&(a.removeEventListener?a.removeEventListener(c,e,!1):a.detachEvent&&a.detachEvent("on"+c,e))}function B(a,c){c=c||256;if(!a)return"";a.length>c&&(a=a.substr(0,c));return(e.encodeURIComponent||e.escape)(a).replace(/\+/g,
"%2B")}function L(a){function c(a){return a?a.replace(/\\/g,"\\\\").replace(/"/g,'\\"'):""}if(a===ka)return"";if(null===a)return"null";switch(a.constructor){case Boolean:return a.toString();case Number:return isFinite(a)?a.toString():"null";case String:return'"'+c(a)+'"';case Array:for(var b=[],f=0,e=a.length;f<e;f++)b[b.length]=L(a[f]);return"["+b.join(",")+"]";case Object:b="{";f=0;for(e in a)if(a.hasOwnProperty(e)){var h=a[e];h!==ka&&(b+=(f?",":"")+'"'+c(e)+'":'+L(h),f++)}return b+"}";default:return"null"}}
function Y(a){for(var c=+new Date,b=1;0<b;b++)if(0==b%1E3){var f=+new Date;if(c>f)break;if(f-c>a)break}}function ba(a,c){if(!a||!c)return!1;for(var b=[],f=0;f<c.length;f++)b.push(c[f].replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\./g,"\\.").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\|/g,"\\|").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\?/g,"\\?").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\{/g,"\\{").replace(/\}/g,"\\}"));return RegExp("\\.("+b.join("|")+")$","i").test(a)}
function ma(a){a=a.target||a.srcElement;if(!a)return!1;if(3==a.nodeType)a=a.parentNode;for(var c=a.nodeName.toString().toLowerCase();a.parentNode&&a.parentNode.nodeName&&("a"!=c&&"area"!=c||!a.href);)a=a.parentNode,c=a.nodeName.toString().toLowerCase();return!a.href?!1:a}function ca(a,c){return(a?a.replace(/^www\./,""):"")==(c?c.replace(/^www\./,""):"")?!0:!1}function ra(a,c){function b(a){a=a.split(":");a=a[1]||"";a=a.replace(/^\/*/,"").replace(/^www\./,"");return a.split("/")[0]}return!a||!c?!a&&
!c?!0:!1:b(a)==b(c)?!0:!1}function na(a,c){var b=c.target,f=!1;if(!c.hostname)return!1;if(!b||"_self"==b||"_top"==b||"_parent"==b)f=!0;(b=a.shiftKey||a.ctrlKey||a.altKey)||a.modifiers&&e.Event&&(b=a.modifiers&e.Event.CONTROL_MASK||a.modifiers&e.Event.SHIFT_MASK||a.modifiers&e.Event.ALT_MASK);return f&&!b}function M(a,c,b,f,l){function h(a,b){m[m.length]=a;m[m.length]=b}var l=l||{},b="undefined"!=typeof b?b:ga,m=[];l.ar&&!l.onlyData&&(b=da(b),a=da(a));h("page-ref",B(b,aa));h("page-url",B(a,aa));h("browser-info",
r(c,l));-1!=q().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/)?h("ut",ia):"undefined"!=typeof l.ut&&h("ut",B(""+l.ut,Ta));f&&h("site-info",B(L(f),Ua));l.saveRef&&(ga=b);a=oa(Oa,m);if("MetrikaPlayer"!=e.name)(new Image).src=a,y(a),l.isDelay&&Y(l.delay);return a}function sa(a,g,b,f,l,h,m){function i(a,b){k[k.length]=a;k[k.length]=b}var l=l||{},b="undefined"!=typeof b?b:ga,k=[];l.ar&&!l.onlyData&&(b=da(b),a=da(a));if("MetrikaPlayer"!=e.name){var n="_ymjsp"+Math.floor(1E6*Math.random()),
u=c.createElement("script");e[n]=function(a){try{delete e[n]}catch(b){e[n]=ka}m(a);u.parentNode&&u.parentNode.removeChild(u)};i("wmode",5);i("callback",n);i("page-ref",B(b,aa));i("page-url",B(a,aa));a=r(g,l);h&&(a=["vc",h,a].join(":"));i("browser-info",a);-1!=q().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/)?i("ut",ia):"undefined"!=typeof l.ut&&i("ut",B(""+l.ut,Ta));f&&i("site-info",B(L(f),Ua));l.saveRef&&(ga=b);f=oa(Oa,k);u.type="text/javascript";u.src=f;l=c.getElementsByTagName("head")[0];
l.insertBefore(u,l.firstChild);y(f)}}function oa(a,c){for(var b=["rn",Math.floor(1E6*Math.random()),"cnt-class",k].concat(c),f=[],e=0;e<b.length;e+=2){var h=b[e+1];h&&(f[f.length]=b[e]+"="+h)}return va+a+C+"?"+f.join("&")}function da(a){var c=q(),b=c.host,c=c.href;if(!a)return c;if(-1!=a.search(/^\w+:\/\//))return a;var f=a.charAt(0);if("?"==f)return f=c.search(/\?/),-1==f?c+a:c.substr(0,f)+a;if("#"==f)return f=c.search(/#/),-1==f?c+a:c.substr(0,f)+a;if("/"==f){if(f=c.search(b),-1!=f)return c.substr(0,
f+b.length)+a}else return b=c.split("/"),b[b.length-1]=a,b.join("/");return a}function y(a){"function"==typeof e.ymLog&&e.ymLog(a)}function r(a,g){function b(a,b){a&&b&&(l[l.length]=[a,b].join(":"))}function f(a){b(a,g[a]?"1":"")}var g=g||{},l=[],h=-1*(new Date).getTimezoneOffset(),m=pa();mb||(mb=m,Db=h);b("j",X.javaEnabled()?"1":"");Z&&b("s",Z.width+"x"+Z.height+"x"+(Z.colorDepth||Z.pixelDepth));null===Ba&&(Ba=U());b("f",Ba);b("w",G()+"x"+fa());b("z",h);b("i",m);null===Ca&&(Ca=Gb());b("l",Ca||"");
b("en",Ia()||"");b("v",rb);b("c",X.cookieEnabled?"1":"");$&&c.documentMode&&(null===ha&&(ha=Function("return /*@cc_on @_jscript_version @*/;")()),ha&&b("jv",ha));b("la",(X&&(X.language||X.browserLanguage)||"").toLowerCase());b("ex","prerender"==c.webkitVisibilityState?"pre1":"");P&&b("wh","1");m="ar,ln,dl,ad,nb,pa".split(",");for(h=0;h<m.length;h++)f(m[h]);m=["va","vt","sn","sa","he"];for(h=0;h<m.length;h++){var i=m[h];b(i,g[i])}if(n._webvisor){b("hid",za);if(!e.name)e.name=Math.round(65535*Math.random());
if(h=+e.name)0>h&&(h*=-1),h%=65535;b("wn",h||la(e.name));try{e.opener&&e.opener.name&&b("on",la(e.opener.name))}catch(k){}try{e.history&&b("hl",""+e.history.length)}catch(q){}}h="undefined"==typeof a?(h=ea())?B(h,Va):"":B(a,Va);b("t",h);return l.join(":")}function Ia(){var a="",g=c.getElementsByTagName("meta");if(g&&0<g.length)for(var b=0,f=g.length;b<f;b++){if(g[b].content){var e=g[b].content.match(/charset=(.*)/);if(e){a=e[1];break}}}else a=c.characterSet||c.charset;return a}function U(){var a=
null,c=null,b,f=e.navigator;if("undefined"!=typeof f.plugins&&"object"==typeof f.plugins["Shockwave Flash"])(a=f.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof f.mimeTypes&&f.mimeTypes["application/x-shockwave-flash"]&&!f.mimeTypes["application/x-shockwave-flash"].enabledPlugin)&&(c=a.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,"."));else if("undefined"!=typeof e.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(c=
a.split(" ")[1].replace(/,/g,".").replace(/[^.\d]/g,""))}catch(l){}return c}function ea(){var a=c.title;"string"!=typeof a&&(a=(a=c.getElementsByTagName("title"))&&a.length?a[0].innerHTML:"");return a}function Gb(){var a=null;if(e.ActiveXObject)try{var c=new ActiveXObject("AgControl.AgControl"),b=function(a,b,c,f){for(;a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3]);)b[c]+=f;b[c]-=f},f=[1,0,0,0];b(c,f,0,1);b(c,f,1,1);b(c,f,2,1E4);b(c,f,2,1E3);b(c,f,2,100);b(c,f,2,10);b(c,f,2,1);b(c,f,3,1);a=
f.join(".")}catch(l){}else if(c=X.plugins["Silverlight Plug-In"])a=c.description;return a}function pa(){for(var a=new Date,a=[a.getFullYear(),a.getMonth()+1,a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()],c="",b=0;b<a.length;b++)c+=10>a[b]?"0"+a[b]:a[b];return c}function G(){var a=-1;if(c.documentElement&&"CSS1Compat"==c.compatMode)a=c.documentElement.clientWidth;else if(c.body)a=c.body.clientWidth;return a}function fa(){var a=-1;if(c.documentElement&&"CSS1Compat"==c.compatMode)a=c.documentElement.clientHeight;
else if(c.body)a=c.body.clientHeight;return a}function x(){Ya._metrika.counters=Ya._metrika.counters||{};var a=!1,g=C+":"+k;if(Ya._metrika.hitParam[g])if(1==k&&!Ya._metrika.counters[g])a=!0;else return!1;Ya._metrika.counters[g]=n;Ya._metrika.hitParam[g]=1;var b;n._webvisor=!A&&(H&&H.webvisor||pb||qb);if(!A&&!a){var f=ua(Xa);"b"!=f&&"w"!=f&&(f="");$a()||(f="b");sa(R.href,ea(),c.referrer,I,{ut:Aa,he:H?~~H.httpError:0,ad:1==k&&e.Ya&&e.Ya.Direct?!0:!1,saveRef:!0},f,function(a){var a=a||{},c=a.webvisor||
{},a=[];if(b){c=+c.recp;if(!isFinite(c)||0>c||1<c)f="w";f||(f=za%1E4/1E4<c?"w":"b");ta(Xa,f,30);"w"==f?F(a,"visor"):b.stop()}D.init(a)})}wa();H&&(H.enableAll?n.enableAll():(H.clickmap&&n.clickmap(H.clickmap),H.trackLinks&&n.trackLinks(H.trackLinks),H.accurateTrackBounce&&n.accurateTrackBounce(H.accurateTrackBounce)),H.trackHash&&n.trackHash(!0));n._webvisor&&(b=new ab(C,k,H,za,D))}function i(a){var c={delay:ja};switch(typeof a){case "string":c.on=!0;break;case "object":c.on=!0;c.delay="number"!=typeof a.delay?
ja:a.delay;break;case "boolean":c.on=a;break;default:return}N=c}function wa(){i(!1);o(c,"click",function(a){N.on&&xa(a)})}function xa(a){function c(a){var f;f=(f=b.innerHTML?b.innerHTML.toString().replace(/<\/?[^>]+>/gi,""):"")?f.toString().replace(/^\s+/,"").replace(/\s+$/,""):"";M(e,e==f?"":f,q().href,null,a)}var b=ma(a);if(b){var f=!1,e=""+b.href,h=e?e.split(/\?/)[0]:"";if(Wa.test(h)||Wa.test(e)||ba(e,O)||ba(h,O))f=!0;var m=b.className,h=m&&-1!=m.search(/ym-disable-tracklink/)?!0:!1,m=m&&-1!=m.search(/ym-external-link/)?
!0:!1;if(!h)if(a={ln:!0,dl:f,isDelay:na(a,b),delay:N.delay},m)c(a);else if(ca(q().hostname,b.hostname)){if(f)a.ln=!1,c(a)}else if(!(e&&-1!=e.search(/^ *javascript:/i)))a.ut=ia,c(a)}}function Jb(a,g){function b(){if(!q){u&&clearTimeout(u);var b=g-(i?k:k+ +new Date-n);0>b&&(b=0);u=setTimeout(function(){q=!0;l(!1);a()},b)}}function f(){m||(h=!0,i=!1,m=!0,b())}function l(a){for(var b=0;b<v.length;b+=3)a?o(v[b],v[b+1],v[b+2]):t(v[b],v[b+1],v[b+2])}var h=!1,m=!1,i=!0,k=0,n=+new Date,u=null,q=!1,v=[e,"blur",
function(){i=h=m=!0;k+=+new Date-n;n=+new Date;b()},e,"focus",function(){!h&&!m&&(k=0);n=+new Date;h=m=!0;i=!1;b()},c,"click",f,c,"mousemove",f,c,"keydown",f,c,"scroll",f];l(!0);b()}function La(a){function c(){var a=q().hash.split("#")[1];if("undefined"==typeof a)return!1;var b=a.indexOf("?");0<b&&(a=a.substring(0,b));return a}var b=c();(function l(){var e=c();e!==b&&(a(),b=e);Ea=setTimeout(l,200)})()}function ya(){Na=ga=Ma;M(q().href,ea(),Na,null,{ut:Aa,ad:1==k&&e.Ya&&e.Ya.Direct?!0:!1,wh:!0,saveRef:!0});
Ma=q().href}function Vb(a){function g(){var a=c.documentElement;return Math.max(a.scrollWidth,c.body.scrollWidth,a.clientWidth)}function b(a){function b(a){for(var c=0,f=0;a;)c+=parseInt(a.offsetTop),f+=parseInt(a.offsetLeft),a=a.offsetParent;return{top:c,left:f}}function f(a){var a=a.getBoundingClientRect(),b=c.body,g=c.documentElement,w=a.left+(e.pageXOffset||g.scrollLeft||b.scrollLeft)-(g.clientLeft||b.clientLeft||0);return{top:Math.round(a.top+(e.pageYOffset||g.scrollTop||b.scrollTop)-(g.clientTop||
b.clientTop||0)),left:Math.round(w)}}return a.getBoundingClientRect?f(a):b(a)}function f(a){return a.toString().toUpperCase()}function l(a){return a&&(a=""+a.className)&&-1!=a.search(/ym-clickmap-ignore/)?!0:!1}function h(a){if(null==a.pageX&&null!=a.clientX){var b=c.documentElement,f=c.body;a.pageX=a.clientX+(b&&b.scrollLeft||f&&f.scrollLeft||0)-(b.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||f&&f.scrollTop||0)-(b.clientTop||0)}return{x:a.pageX,y:a.pageY}}function i(a){for(var b=f(a.nodeName);a.parentNode&&
"BODY"!=b&&"HTML"!=b;){if("A"==b||"INPUT"==b||"TEXTAREA"==b)return!0;a=a.parentNode;b=a.nodeName}return!1}for(var k=this,n=0,C=null,u="A,B,BIG,BODY,BUTTON,DD,DIV,DL,DT,EM,FIELDSET,FORM,H1,H2,H3,H4,H5,H6,HR,I,IMG,INPUT,LI,OL,P,PRE,SELECT,SMALL,SPAN,STRONG,SUB,SUP,TABLE,TBODY,TD,TEXTAREA,TFOOT,TH,THEAD,TR,U,UL,ABBR,AREA,BLOCKQUOTE,CAPTION,CENTER,CITE,CODE,CANVAS,DFN,EMBED,FONT,INS,KBD,LEGEND,LABEL,MAP,OBJECT,Q,S,SAMP,STRIKE,TT,ARTICLE,AUDIO,ASIDE,FOOTER,HEADER,MENU,METER,NAV,PROGRESS,SECTION,TIME,VIDEO,NOINDEX,NOBR".split(","),
r=59,v=String.fromCharCode,x={},E=0;E<u.length;E++)x[u[E]]=v(r),v(r),r++;this.handler=function(a){var u=c.getElementsByTagName("body")[0];if(!e.ymDisabledClickmap&&!l(u)){if(k._prefs.hasQuota){if(!k._prefs.quota)return;k._prefs.quota--}var v=a.target||a.srcElement;if(3==v.nodeType)v=v.parentNode;var u=f(v.nodeName),p=h(a),s;if(!a.which&&a.button!==ka)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;s=a.which;if(!(s=(2==s||3==s)&&"A"!=u))s=v.offsetHeight,s=0===v.offsetWidth&&0===s||v.style&&"none"===
v.style.display;if(!s){b:{for(s=v;s.parentNode;){if(l(s)){s=!0;break b}s=s.parentNode}s=!1}if(!s){b:{s=k._prefs.ignoreTags;for(var r=0;r<s.length;r++)if(f(s[r])==f(u)){s=!0;break b}s=!1}s=s||!k._prefs.filter(v,u)}if(!s){u=+new Date;v={dom:v,x:p.x,y:p.y,time:u};if(p=50<u-n)if(!(p=!k._prefs.ignoreSameClicks)){if(p=C){s=Math.abs(p.x-v.x);var r=Math.abs(p.y-v.y),o=v.time-p.time,p=p.dom==v.dom&&2>s&&2>r&&1E3>o?!0:!1}else p=!1;p=!p}if(p&&"MetrikaPlayer"!=e.name){s=h(a);p=s.x;s=s.y;var o=a.target||a.srcElement,
t=k._prefs,E=b(o),z="",r=q().href;switch(t.mode){case "fixed":z="0";i(o)&&(z+="u");break;case "centered":z="1";E=Math.floor(g()/2);p=p>E?p-E+32768:p;i(o)&&(z+="u");break;default:z=f(o.nodeName);z="BODY"==z||"HTML"==z?g():o.offsetWidth;t=f(o.nodeName);"BODY"==t||"HTML"==t?(t=c.documentElement,t=Math.max(t.scrollHeight,c.body.scrollHeight,t.clientHeight)):t=o.offsetHeight;z||(z=1);t||(t=1);p=Math.floor(65535*(p-E.left)/z);s=Math.floor(65535*(s-E.top)/t);for(E="";o.parentNode&&"BODY"!=f(o.nodeName)&&
"HTML"!=f(o.nodeName);){E+=x[o.nodeName]||"*";b:{for(var z=o.parentNode,A=t=0;A<z.childNodes.length;A++)if(o.nodeName==z.childNodes[A].nodeName){if(o==z.childNodes[A]){z=t;break b}t++}z=0}E+=z||"";o=o.parentNode}z=B(E,128)}P||(r=r?r.replace(/\#.*$/,""):r);"function"==typeof k._prefs.urlFilter&&(r=k._prefs.urlFilter(r));p=oa(eb,["page-url",B(r,aa),"pointer-click","x:"+p+":y:"+s+":t:"+Math.floor(Math.floor(+new Date-sb)/100)+":p:"+z]);(new Image).src=p;y(p);if(p=a.target||a.srcElement){if(3==p.nodeType)p=
p.parentNode;for(s=f(p.nodeName);p.parentNode&&p.parentNode.nodeName&&("A"!=s&&"AREA"!=s||!p.href);)p=p.parentNode,s=f(p.nodeName);p=!p.href?!1:p}else p=!1;p&&na(a,p)&&Y(k._prefs.delay)}n=u;C=v}}}};this.setPrefs=function(a){function b(){return!0}this._prefs="undefined"==typeof a||!1===a||!0===a?{filter:b,ignoreTags:[],mode:"",delay:ja,quota:0,hasQuota:!1,ignoreSameClicks:!0}:{filter:a.filter||b,ignoreTags:a.ignoreTags||[],mode:a.mode||"",delay:"undefined"==typeof a.delay?ja:a.delay,quota:a.quota||
0,hasQuota:!!a.quota,ignoreSameClicks:"undefined"==typeof a.ignoreSameClicks?!0:!1,urlFilter:a.urlFilter}};this.updateStatus=function(a){switch(typeof a){case "undefined":this.start(!0);break;case "boolean":a?this.start(a):this.stop();break;case "object":this.start(a)}};this._start=!1;this.start=function(a){this.setPrefs(a);this._start||o(c,"click",this.handler);this._start=!0};this.stop=function(){this._start&&t(c,"click",this.handler);this._start=!1};this.start(a)}var n=this,za=Math.round(1073741824*
Math.random()),Aa="",ga=R.href,Ma=R.href,Na="";if(!Ya._metrika.counter)Ya._metrika.counter=n;var H;if("object"==typeof C)H=C,A=C.defer,Aa=C.ut,k=C.type,I=C.params,C=C.id;var C=C||0,k=k||0,Oa="//mc.yandex.ru/watch/",eb="//mc.yandex.ru/clmap/",V=[],Ba=null,Ca=null,ha=null,D=new function(a,c){function b(a,b,c){if(i)f(a,b,c);else{if("XMLHttpRequest"in e){var g=new XMLHttpRequest;if("withCredentials"in g){var h=c?"POST":"GET",a=l(a,b,"POST"==h?1:0);g.open(h,a,!0);g.withCredentials=!0;"POST"==h&&"[object nsXPCComponents]"!=
""+e.Components&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");g.send("POST"==h?Za(c):null);return}}for(h in c)c.hasOwnProperty(h)&&(b[h]=c[h]);(new Image).src=l(a,b,0)}}function f(a,b,c){var f="ifr"+Math.round(1E10*Math.random()),e=i.createElement("div"),a=['<iframe name="',f,'"></iframe>','<form action="',l(a,b,0),'" method="post" target="',f,'" enctype="application/x-www-form-urlencoded">'],g;for(g in c)c.hasOwnProperty(g)&&F(a,'<textarea name="',g,'">',c[g],"</textarea>");
F(a,"</form>");e.innerHTML=a.join("");i.body.appendChild(e);e.getElementsByTagName("form")[0].submit();setTimeout(function(){i.body.removeChild(e)},1E4)}function l(b,f,e){f["browser-info"]=["ct",e,f["browser-info"]].join(":");return"//"+a+"/"+b+"/"+c+"?"+Za(f)}function h(){if(e.ActiveXObject){var a=new ActiveXObject("htmlfile");a.open();a.write("<html><body></body></html>");a.close();return a}return null}try{var i=h()}catch(k){}var n="",o=[];return{send:function(a,c,f,e){a?n?-1<n.indexOf("|"+a+"|")&&
b(c,f,e):F(o,arguments):b(c,f,e)},init:function(a){n="|"+a.join("|")+"|";for(a=0;a<o.length;a++)-1<n.indexOf("|"+o[a][0]+"|")&&b(o[a][1],o[a][2],o[a][3]);o.length=0}}}("mc.yandex.ru",C);n.reachGoal=function(a,e){var b=a?"goal://"+q().hostname+"/"+a:q().href,f=ea(),i=a?q().href:c.referrer;M(b,f,i,e,{ar:!0,isDelay:a?!0:!1,delay:100});return!0};var N;n.trackLinks=i;n.hit=function(a,c,b,f,e){a&&M(a,c,b,f,{ut:e,ar:!0,saveRef:!0})};n.params=function(a){if(a){var c=arguments.length;if(1<c){for(var b={},
f=b,e=0;e<c-1;e++){var h=""+arguments[e];f[h]={};e<c-2&&(f=f[h])}f[h]=arguments[c-1];a=b}M("","","",a,{ar:!0,pa:!0,onlyData:!0})}};n.file=function(a,c,b,f){a&&M(a,"",q().href,f,{ar:!0,ln:!0,dl:!0})};n.extLink=function(a,c,b,f){a&&M(a,"",q().href,f,{ar:!0,ln:!0,ut:ia})};n.notBounce=function(){M("","","",null,{ar:!0,nb:!0,onlyData:!0})};var O=[];n.addFileExtension=function(a){"string"==typeof a?O.push(a):O=O.concat(a)};n.clickmap=function(a){n._clickmap?n._clickmap.updateStatus(a):n._clickmap=new Vb(a)};
var Da=!1;n.accurateTrackBounce=function(a){function e(){n.notBounce()}Da||(Da=!0,ra(c.referrer,q().href)||("number"!=typeof a&&(a=15E3),$?setTimeout(e,a):Jb(e,a)))};var Ea=null,P=!1;n.trackHash=function(a){!1===a?P&&("onhashchange"in e?t(e,"hashchange",ya):clearInterval(Ea),P=!1):P||("onhashchange"in e?o(e,"hashchange",ya):La(ya),P=!0);n._trackHash=P};n.video=function(a,c,b,f){var e=["end","play","pause","seek"];if(a&&b){a:{for(var h=0,i=e.length;h<i;h+=1)if(a===e[h]){e=h;break a}e=!1}!1!==e&&M(b,
f||"","",null,{ar:!0,va:a,vt:~~c})}};n.social=function(a,c,b){a&&c&&M(b||q().href,"","",null,{ar:!0,sn:B(a,64),sa:B(c,64)})};n.enableAll=function(){n.trackLinks(!0);n.clickmap(!0);n.accurateTrackBounce()};n.pause=Y;n.uploadPage=function(){};C&&x()};e.ya_cid&&new Ya.Metrika(e.ya_cid,e.ya_params,e.ya_class);if(e.ya_cid&&!e.ya_hit)e.ya_hit=function(c,e){Ya._metrika.counter&&Ya._metrika.counter.reachGoal(c,e)};var L=e.yandex_metrika_callback,I=e.yandex_metrika_callbacks;"function"==typeof L&&L();if("object"==
typeof I)for(L=0;L<I.length;L++){var ra=I[L];ra&&(I[L]=null,ra())}Y("yandex_metrika_callback");Y("yandex_metrika_callbacks");I=R.href;-1!=I.search("ym_playback=linkmap")?ma("linkmap"):-1!=I.search("ym_playback=clickmap")&&ma("clickmap");e.Ya.Metrika.informer=function(c){var e=!!Ya.Metrika._informer;Ya.Metrika._informer=c;e||ba(va+"//bs.yandex.ru/metrika/informer.js")};if(top!=e&&parent==top&&e.postMessage&&!Ya.Metrika_visorPlayerOn){Ya.Metrika_visorPlayerOn=!0;I=c.createElement("div");I.innerHTML=
'<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';var sa=I.firstChild;setTimeout(function(){c.body.insertBefore(sa,c.body.firstChild);try{var e=sa.contentWindow.document}catch(q){}e&&(e.open(),e.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">var newversion = true;try {if (top.postMessage) {window.onmessage = function(evt) {evt = evt || window.event;try {var message = new Function("return " + evt.data)();} catch (e) {return;}if (/(^|\\.)yandex\\.(ru|com|ua|kz|by|com\\.tr)(:\\d{4})?$/.test(evt.origin) && message.name == "script" && message.data) {var head = document.getElementsByTagName("head")[0];var base = document.createElement("base");base.href = message.data;head.appendChild(base);var script = document.createElement("script");script.src = message.data;head.appendChild(script);parent.removeEventListener("message", window.onmessage, false);window.onmessage = null;}};if (navigator.userAgent.indexOf("Firefox/3.6.") > -1) {parent.addEventListener("message", window.onmessage, false);}top.postMessage(\'{"name":"ping"}\', "*");}} catch (e) {}<\/script></body></html>'),
e.close())},200)}})(this,this.document);
