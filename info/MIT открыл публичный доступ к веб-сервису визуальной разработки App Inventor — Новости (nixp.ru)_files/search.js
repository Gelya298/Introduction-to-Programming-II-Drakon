Search = {
	init: function(e) {
		this.tags = $('searchInput');
		if (!this.tags)
			return;
		
		this.form  = this.tags.getForm();
		this.form.observe('submit', this.prepareUrl.bindAsEventListener(this));
	},
	prepareUrl: function(e) {
		e && e.stop();
		var tagValue = this.tags.getValue();
		location.href =
			this.form.readAttribute('action') +
			'/' +
			encodeURIComponent('Все с тег'+(tagValue.indexOf(',')==-1? 'ом' : 'ами')+' '+tagValue).
				replace('%2F', '[:slash:]').
				replace('%5C', '[:backslash:]').
				replace('%3F', '[:questionmark:]') +
			'/from/search';
	}
};

document.observe('dom:loaded', Search.init.bind(Search));
