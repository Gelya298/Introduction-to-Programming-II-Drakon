(function(){var g=function(b){var c=[],a;for(a in b)c.push(a+"="+b[a]);return c.join("\n")};var h=function(b){for(var c=b.origin,a=b.data.split("\n"),e={},d=0;d<a.length;d++){var f=a[d].indexOf("=");-1!=f&&(e[a[d].substr(0,f)]=a[d].substr(f+1))}"google_loc_request"==e[0]&&{"http://googleads.g.doubleclick.net":1,"http://pagead2.googlesyndication.com":1,"https://googleads.g.doubleclick.net":1,"https://pagead2.googlesyndication.com":1}.hasOwnProperty(c)&&(a={},a[1]=e[1],a[2]=1,a[3]=window.location.href,a[4]=document.referrer,b.source.postMessage(g(a),c))};
window.addEventListener?window.addEventListener("message",h,!1):window.attachEvent&&window.attachEvent("onmessage",h);})();
