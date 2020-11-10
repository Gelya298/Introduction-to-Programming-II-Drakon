var nixpTweet = {
	tweet: function(msg) {
		var tweet_url = 'http://twitter.com/home?status=' + msg;
		nixpTweet.openWindow(tweet_url, 800, 400);
		return false;
	},
	openWindow: function(url, width, height) {
		var launchWindow = function() {
			if(!window.open(url,'t','scrollbars=yes,toolbar=1,resizable=1,status=1,width='+width+',height='+height)) document.location.href=url;
		};
		if( /Firefox/.test(navigator.userAgent)) {
			setTimeout(launchWindow, 0);
		} else {
			launchWindow();
		}
	}
};
