InlineHelp = {
	init: function(e) {
		$$('*[help]').each(this.treatEl, this);
	},
	treatEl: function(el) {
		el.observe('focus', this.focus.bindAsEventListener(this));
		el.observe('blur', this.blur.bindAsEventListener(this));
		el.getForm().observe('submit', this.treatFocus.bind(this, el));
		el.addClassName('inline-helped');
		this.treatBlur(el);
	},
	focus: function(e) {
		this.treatFocus(e.element());
	},
	treatFocus: function(el) {
		if (el.readAttribute('help') == el.getValue()) {
			el.removeClassName('inline-helped-passive');
			el.setValue('');
		}
	},
	blur: function(e) {
		this.treatBlur(e.element());
	},
	treatBlur: function(el) {
		if (!el.getValue()) {
			el.addClassName('inline-helped-passive');
			el.setValue(el.readAttribute('help'));
		}
	}
};

document.observe('dom:loaded', InlineHelp.init.bind(InlineHelp));
