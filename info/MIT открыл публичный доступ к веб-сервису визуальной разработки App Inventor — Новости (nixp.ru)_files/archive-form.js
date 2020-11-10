ArchiveForm = {
	init: function() {
		this.form = $('news-archive-form');
		if (this.form) {
			this.link = $('news-archive-link');
			this.form.observe('submit', this.relocate.bindAsEventListener(this));
			this.form.observe('click', this.clearField.bindAsEventListener(this));
		}
	},
	relocate: function(e) {
		var values = this.form.serialize(true);
		var newLocation = this.link.href;
		if (values.year) {
			newLocation += '/'+values.year;
			if (values.month) {
				newLocation += '/'+values.month;
				if (values.day) {
					newLocation += '/'+values.day;
				}
			}
		}
		location = newLocation;
		e.stop();
	},
	clearField: function(e) {
		var el = e.element();
		if (el.tagName == 'INPUT') {
			if (!el.__clicked) {
				el.__clicked = true;
				el.value = '';
//				el.observe('blur', this.restoreField.bindAsEventListener(this))
			}
		}
	},
	restoreField: function(e) {
		var el = e.element();
		if (!el.value) el.value = el.__oldValue;
	}
};
User.stateChange.append({
	load: ArchiveForm.init.bind(ArchiveForm) 
});