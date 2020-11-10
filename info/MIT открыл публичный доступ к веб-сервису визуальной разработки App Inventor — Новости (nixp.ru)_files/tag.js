Tag = {
	init: function() {
		$$('.tags-edit-link').invoke('linkify', this.edit.bindAsEventListener(this));
	},
	edit: function(e) {
		if (!User.checkLogin(e, arguments.callee.bind(this, e))) return;
		
		var link = e.findElement('a');
		var uoi = link.getUoi();
		if (!link.editContainer) {
			link.editContainer = $$('.tags-edit-container[uoi="'+uoi+'"]').first();
		}
		new Ajax.Updater(link.editContainer, link.href, {
			evalJS: 'force',
			evalScripts: true,
			onComplete: (function() {
				link.hide();
				link.editContainer.show();
				var form = $('tags-edit-form-for-'+uoi);
				form.observe('submit', this.update.bindAsEventListener(this, link));
				form.down('input').focus();
			}).bind(this)
		});
		e.stop();
	},
	update: function(e, link) {
		var form = e.element();
		var uoi = main.extractUoi(form.id);
		new Ajax.Updater('tags-for-'+uoi, form.action, {
			parameters: form.serialize('hash'),
			onComplete: (function() {
				if (link.editContainer.id != 'tags-for-'+uoi) {
					link.show();
					link.editContainer.hide();
				}
				$('tags-edit-link-for-'+uoi).observe('click', this.edit.bindAsEventListener(this))
			}).bind(this)
		});
		e.stop();
	},
	collectTaggingData: function() {
		var st = [];
		$$('.tags-edit-link').each(function(el) {
			st.push(main.extractUoi(el.id));
		});
		return {
			func: 'collectTaggingData',
			arguments: st
		};
	},
	showTaggingPanels: function(data) {
		var data = data.collectTaggingData;
		cl(data);
		$$('.tags-edit-link').each(function(el) {
			var uoi = main.extractUoi(el.id);
			el[data[uoi]['couldSetTags']? 'show' : 'hide']();
		}, this);
	},
	hideTaggingPanels: function() {
		$$('.tags-edit-link').invoke('hide');
	}
};

User.stateChange.append({
	load: Tag.init.bind(Tag),
	data: Tag.collectTaggingData.bind(Tag),
	login: Tag.showTaggingPanels.bind(Tag),
	logout: Tag.hideTaggingPanels.bind(Tag)
});
