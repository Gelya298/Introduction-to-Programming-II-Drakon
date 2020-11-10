Commentary = {
	currentForm: null,
	currentMode: null,
	config: 'comment',
	loading: [],
	init: function() {
		var comments = $('comments');
		if (comments) {
			comments.observe('click', this.toggle.bindAsEventListener(this));
			var hash;
			if (hash = main.getHash()) {
				var el = $(hash);
				this.expand(el, 'withParent');
			}
		}
	},
	answer: function(uoi, mode) {
		/* uoi refers to Universal Object Identifier in form of $Classname:$Id (e.g. News:24) */
		mode = mode || 'answer';
		if (mode == 'answer') {
			if (!User.isAuthenticated()) {
				User.showLoginForm();
				User.afterLogin = Commentary.answer.bind(this, uoi);
				return false;
			}
		}
		var form = $('answer-for-'+uoi);
		var comment = $(uoi);
		if (form.visible() && !form['commentary[id]'].value) {
			return this.cancel(uoi);
		}
		form['commentary[id]'].value = '';
		if (this.currentForm) {
			this.cancel(); // Cancels any current form
		}
		this.currentForm = form;
		this.currentMode = mode;
		this.resetColors('edit-link-for-'+uoi);
		//this.resetColors('answer-link-for-'+uoi,'#000000');
		form.show();
		this.expandMiniContent(uoi);
		main.initTinyMCE(this.config, {
			auto_focus: 'textarea-for-answer-for-'+uoi,
			setupcontent_callback: function(editor_id, body, doc) {
				body.innerHTML = '<p>&nbsp;</p>';
				(function() {
					tinyMCE.activeEditor.selection.select(body.firstChild, true);
					tinyMCE.activeEditor.selection.collapse(true);
				}).defer()
			}
		});
		tinyMCE.execCommand('mceAddControl', false, 'textarea-for-answer-for-'+uoi);
		this.moveCaretToEnd.defer();
		main.ensureVisibility(comment, form);
		if (mode == 'answer') {
			//tinyMCE.execCommand.bind(tinyMCE, 'mceFocus', false, 'textarea-for-answer-for-'+uoi).defer();
		}
		return false; // MSIE
	},
	quote: function(uoi, authorName, text) {
		var comment = $(uoi);
		if (!(authorName && text)) {
			authorName = comment.down('.user_info').down('.user_date').down('.profile_link').innerHTML;
			text = comment.down('.msg').innerHTML;
		}
		if (!User.hasCredential('commentary_create')) {
			User.showLoginForm();
			User.afterLogin = Commentary.quote.bind(this, uoi, authorName, text);
			return false;
		}
		if (!this.currentForm) {
			this.answer(uoi);
			var initial = true;
		}
		main.ensureVisibility($(main.extractUoi(this.currentForm.id)), this.currentForm);
		// FIXME: we should wait for the .msg content in this comment to insert it
		this.expandMiniContent(comment);
		(function() {
			tinyMCE.execInstanceCommand(
				'textarea-for-answer-for-'+main.extractUoi(this.currentForm.id),
				'mceInsertQuote',
				false,
				{
					isExternal: false,
					authorName: authorName,
					text: text,
					link: location.href+'#'+uoi,
					local: true
				}
			);
			if (initial) {
				this.moveCaretToEnd.defer();
			}
		}).bind(this).defer();
	},
	edit: function(uoi) {
		if (this.currentForm) {
			var currentMode = this.currentMode;
			this.cancel();
			if (currentMode == 'edit') {
				return false;
			}
		}
		this.answer(uoi, 'edit');
		this.resetColors('answer-link-for-'+uoi);
		//this.resetColors('edit-link-for-'+uoi,'#000000');
		var form = $('answer-for-'+uoi);
		form['commentary[id]'].value = main.extractId(uoi);
		(function() {
			//cl($(uoi).down('.msg').innerHTML);
			//var ed = tinyMCE.activeEditor;
			//ed.selection.select(ed.dom.getRoot().firstChild);
			tinyMCE.execInstanceCommand('textarea-for-answer-for-'+uoi, 'SelectAll', false, false);
			tinyMCE.execInstanceCommand('textarea-for-answer-for-'+uoi, 'mceReplaceContent', false, $(uoi).down('.msg').innerHTML);
			(function() {
				//tinyMCE.execCommand('mceFocus', false, 'textarea-for-answer-for-'+uoi);
				(function() {
					/*var body = tinyMCE.activeEditor.dom.getRoot();
					var p = body.firstChild.firstChild;
					if (p.innerHTML && p.innerHTML.empty()) {
						body.firstChild.removeChild(p);
					}*/
					this.moveCaretToEnd.defer();
				}).bind(this).defer();
			}).bind(this).defer();
		}).bind(this).defer();
		return false;
	},
	send: function(uoi) {
		var form = $('answer-for-'+uoi);
		var editor = tinyMCE.get('textarea-for-answer-for-'+uoi);
		editor.save();
		form.request({
			onSuccess: (function(response) {
				this.placeComment(response, uoi);
				this.cancel(uoi);
			}).bind(this),
			onFailure: (function(response) {
				this.placeErrors(response, uoi);
			}).bind(this),
			onComplete: function(response) {
				form.enable();
			}
		});
		form.disable();
		return false;
	},
	cancel: function(uoi) {
		var form;
		if (uoi) {
			form = $('answer-for-'+uoi);
		} else {
			form = this.currentForm;
			uoi = main.extractUoi(this.currentForm.id);
		}
		tinyMCE.execCommand('mceRemoveControl', false, 'textarea-for-answer-for-'+uoi);
		form.hide();
		form.reset();
		form['commentary[id]'].value = '';
		form.down('.error_list').hide().update('');
		this.currentForm = null;
		this.currentMode = null;
		this.resetColors('answer-link-for-'+uoi);
		this.resetColors('edit-link-for-'+uoi);
	},
	placeErrors: function(response, uoi) {
		var ul = $('error-list-for-answer-for-'+uoi);
		ul.update(response.responseText);
		ul.show();
	},
	placeComment: function(response, uoi) {
		var form = $('answer-for-'+uoi);
		if (form['commentary[id]'].value) {
			this.placeEdit(response, uoi);
		} else {
			this.placeAnswer(response, uoi);
		}
	},
	placeAnswer: function(response, uoi) {
		var childrenBarrier = $('children-barrier-for-'+uoi);
		this.incrementCommentaryCount(1);
		childrenBarrier.insert({before: response.responseText});
		this.focusLastChild.bind(this, uoi).defer();
	},
	placeEdit: function(response, uoi) {
		var msg = $(uoi).down('.msg');
		msg.update(response.responseText);
		(function() {
			msg.highlight({
				queue: {
					position: 'end',
					scope: 'commentary'
				}
			});
		}).defer();
	},
	do_delete: function(uoi, a, force) {
		if (!force) {
			$('delete-link-for-'+uoi).hide();
			$('force-delete-link-for-'+uoi).show();
			return false;
		}
		$('force-delete-link-for-'+uoi).hide();
		$('placebo-delete-link-for-'+uoi).show();
		var el = $(uoi);
		el.fade({
			afterFinish: function() {
				el.remove();
			}
		});
		new Ajax.Request(a.href, {
			onComplete: (function(response) {
				this.setCommentaryCount(response.responseText);
			}).bind(this)
		});
		return false; // MSIE
	},
	toggle: function(e) {
		if (!e.findElement('.click_for_collapse')) return;
		el = e.element().up('.post');
		var content = el.down('.post_content');
		var action = el.down('.post_content').hasClassName('minicontent')? 'expand' : 'collapse';
		new Ajax.Request($('expand-collapse-stat-link').href, {
			method: 'post',
			parameters: {
				cls: e.element().className,
				action: action
			}
		});
		if (!e.findElement('a')) {
			this[action](el);
		}
		return false;
	},
	expand: function(el, withParent) {
		if (!el.hasClassName('post')) return;
		if (withParent) this.expand(el.up());
		var content = el.down('.post_content');
		content.removeClassName('minicontent');
		content.addClassName('normalcontent');
		if ($('expanded-flag-for-'+el.id)) {
			content.down('.msg').show();
			content.down('.ops').show();
			content.down('.avatar_shadow').show();
			this.updateCollapsedContent(el);
		} else {
			if (!this.loading[el.id]) {
				this.loading[el.id] = true;
				new Ajax.Request($('minicontent-holder-for-'+el.id).href, {
					onSuccess: this.placeContent.bind(this, el)
				});
			}
		}
	},
	placeContent: function(el, response) {
		delete this.loading[el.id];
		el.down('.user_info').insert({after: response.responseText});
		this.updateCollapsedContent(el);
	},
	updateCollapsedContent: function(el) {
		el.down('.click_for_collapse').title = 'Свернуть комментарий';
	},
	expandMiniContent: function (uoi) {
		if ($(uoi) && $(uoi).down('div').hasClassName('minicontent'))
			this.expand($(uoi));
	},
	collapse: function(el) {
		if (!$('expanded-flag-for-'+el.id)) return;
		var content = el.down('.post_content');
		content.addClassName('minicontent');
		content.removeClassName('normalcontent');
		content.down('.msg').hide();
		content.down('.ops').hide();
		el.down('.click_for_collapse').title = 'Развернуть комментарий';
		content.nextSiblings().each(function(el) {
			if (el.hasClassName('post')) {
				this.collapse(el);
			} else {
				el.hide();
			}
		}, this);
		return false;
	},
	showQuote: function(a) {
		var p = $(a).up();
		var el = p.next();
		while (el.tagName.toUpperCase() != 'BLOCKQUOTE') {
			el = p.next();
		}
		el.toggle();
	},
	showParent: function(a) {
		a = $(a);
		var uoi = main.extractUoi(a.href, '#');
		Effect.ScrollTo(uoi);
		var currentChild = a.up('.post');
		$('unshow-link-for-'+uoi).show().href = '#'+currentChild.id;
		return false;
	},
	unshowParent: function(a) {
		a = $(a);
		var uoi = main.extractUoi(a.href, '#');
		main.ensureVisibility($(uoi));
		a.hide();
		return false
	},
	focusLastChild: function(uoi) {
		childrenBarrier = $('children-barrier-for-'+uoi);
		var child = childrenBarrier.previous();
		location.hash = '#'+child.id;
		if (!Prototype.Browser.Opera) {
			main.ensureVisibility(child, null, {
				queue: {
					position: 'end',
					scope: 'commentary'
				}
			});
		} else {
			child.scrollTo();
		}
		new Effect.Highlight(child.down('.msg'), {
			queue: {
				position: 'end',
				scope: 'commentary'
			}
		});
	},
	resetColors: function(id, color) {
		color = color || '';
		var el = $(id);
		if (!el) return false;
		$(id).childElements().invoke('setStyle', {
			color: color,
			borderBottomColor: color
		});
	},
	moveCaretToEnd: function(ed) {
		ed = ed || tinyMCE.activeEditor;
		var root = ed.dom.getRoot();
		var lastnode=root.childNodes[root.childNodes.length-1];
		if (tinymce.isGecko && lastnode.childNodes.length) {
			lastnode=lastnode.childNodes[lastnode.childNodes.length-1];
		}
		ed.selection.select(lastnode);
		ed.selection.collapse(false);

	},
	countChildren: function(uoi) {
		var children = $(uoi).select('.post');
		return children.length;
	},
	incrementCommentaryCount: function(num) {
		this.setCommentaryCount(this.getCommentaryCount() + num);
	},
	setCommentaryCount: function(num) {
		var commentaryCount = $('commentary-count');
		if (commentaryCount) {
			commentaryCount.update(num);
		}
	},
	getCommentaryCount: function(num) {
		var commentaryCount = $('commentary-count');
		if (commentaryCount) {
			return parseInt(commentaryCount.innerHTML);
		}
	},
	absolutize: function() {
		$('footer').absolutize();
		var els = $('comments').childElements();
		for (var i = els.length-1; i>=0; i--) {
			els[i].absolutize();
			els[i].setStyle({
				marginLeft: '0px'
			});
		}
		for (var i = els.length-1; i>=0; i--) {

		}
	},
	reloadComments: function(data) {
		if (data) { // login
			this.replaceComments(data.collectCommentaryData);
		} else { // logout
			new Ajax.Request($('comments').down('a').href, {
				onComplete: (function(response) {
					this.replaceComments(response.responseText);
				}).bind(this)
			});
		}
	},
	replaceComments: function(html) {
		$('comments').update(html);
	},
	collectCommentaryData: function() {
		var args = {};
		var comments = $('comments');
		if (!comments) return;
		args.uoi = main.extractUoi(comments.down('form').id);
		return {
			func: 'collectCommentaryData',
			arguments: args
		}
	},
	showCommentaryTools: function() {
		if (User.hasCredential('commentary_edit')) {
			$$('.ops .edit').invoke('show');
		}
		if (User.hasCredential('commentary_delete')) {
			$$('.ops .delete').invoke('show');
			$$('.ops .force.delete').invoke('hide');
		}
	},
	hideCommentaryTools: function() {
		$$('.ops .edit').invoke('hide');
		$$('.ops .delete').invoke('hide');
		$$('.ops .force.delete').invoke('hide');
	}
};
User.stateChange.append(
	{
		load: Commentary.init.bind(Commentary)
	},{
		login: Commentary.reloadComments.bind(Commentary),
		logout: Commentary.reloadComments.bind(Commentary),
		data: Commentary.collectCommentaryData.bind(Commentary)
	}
);
