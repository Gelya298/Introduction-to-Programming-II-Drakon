if (typeof ar_CompPath != 'undefined') {
	var ar_flashvars = 'link1=' + escape(ar_redirect)
		+ ar_p('&target', ar_target)
		+ ar_p('&ar_comppath', ar_CompPath)
		+ ar_p('&ar_bid', ar_bid)
		+ ar_p('&ar_ntype', ar_ntype)
		+ ar_p('&ar_rnd', ar_rnd)
		+ ar_p('&sid', ar_sid);
	
	function ar_fp(p,v){return '<param name="' + p + '" value="' + v + '">'}
	ar_swf = (ar_swf&&!/^http:\/\//i.test(ar_swf) ? ar_CompPath : '') + ar_swf;
	
	var ar_html = '<object id="ar_flash" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ar_metrics + '>'
	+ ar_fp('movie', ar_swf)
	+ ar_fp('wmode', ar_wmode)
	+ ar_fp('quality', ar_quality)
	+ ar_fp('flashvars', ar_flashvars)
	+ ar_fp('play', 'true')
	+ ar_fp('loop', 'true')
	+ ar_fp('menu', 'false')
	+ ar_fp('allowScriptAccess', 'always')
	+ '<embed type="application/x-shockwave-flash" menu=false allowScriptAccess=always play=true loop=true src="'
	+ ar_swf + '" wmode=' + ar_wmode + ' quality=' + ar_quality + ' flashvars="' + ar_flashvars + '"'
	+ ar_metrics + '></embed></object>';
}

document.write(ar_html);