/**
 *
 * @author Denis.Gorbachev
 */
(function() {

	tinymce.create('tinymce.plugins.TfPlugin', {
		quote: null,
		claim: null,
		claimOffset: null,
		init : function(ed, url) {
			cl(url);
			this.pluginUrl = url;
			this.editor = ed;
			// Quotes
            ed.onNodeChange.addToTop(this.nodeChange.bind(this)); 
			ed.onKeyDown.addToTop(this.handle.bind(this));
			// Edit & delete link processing
			ed.addCommand('mceInsertQuote', this.insertQuote.bind(this));
			ed.addCommand('mceEnterQuote', this.openDialog.bind(this, 'quote', url));
			ed.addButton('quote', {
				title : 'Вставить цитату',
				cmd : 'mceEnterQuote',
				image : '/images/icons/quote.png',
				class : 'tiny_quote'
			});
			
			// Console
			ed.addCommand('mceInsertConsole', this.insertConsole.bind(this));
			ed.addButton('console', {
				title : 'Вставить консоль',
				cmd : 'mceInsertConsole',
				image : '/images/icons/console.png',
				class : 'tiny_console'
			});
			
			// Source
			ed.addCommand('mceInsertSource', this.insertSource.bind(this));
			ed.addCommand('mceEnterSource', this.openDialog.bind(this, 'source', url));
			ed.addButton('insertsource', {
				title : 'Вставить код',
				cmd : 'mceEnterSource',
				image : '/images/icons/source.png',
				class : 'tiny_source'
			});
			
			// Object
			ed.addCommand('mceDeleteObject', this.deleteObject.bind(this));
			ed.addButton('delete', {
				title: 'Удалить объект',
				cmd: 'mceDeleteObject',
				image: '/images/icons/delete.png',
                                class : 'tiny_delete'
			});
			ed.addCommand('mceEditObject', this.editObject.bind(this));
			ed.addCommand('mceExecuteEditObject', this.executeEditObject.bind(this));
			ed.addButton('edit', {
				title: 'Редактировать объект',
				cmd: 'mceEditObject',
				image: '/images/icons/edit.png',
                                class : 'tiny_edit'
			});
		},
		insertQuote: function(ui, args) {
			var insertBefore = this.findInsertBefore.apply(this, arguments);
			if (typeof args == 'object') {
				var quote = $t(new Element('blockquote'));
				quote.addClassName('deletable');
				quote.addClassName(args.isExternal? 'external' : 'comment-quote');
				var piska = $t(new Element('div'));
				piska.addClassName('piska');
				var deleteLink = this.createDeleteLink();
				var strong = $t(new Element('strong'));
				var span = $t(new Element('span'));
				span.update(args.authorName);
				var linkDiv = $t(new Element('div'));
				var link = $t(new Element('a'));
				args.name = args.name || 'источник';
				link.writeAttribute({
					href: args.link,
					target: args.local? '' : '_blank' 
				});
				link.update(args.name);
				linkDiv.insert({bottom: link});
				strong.insert({bottom: span});
				quote.insert({bottom: piska});
				quote.insert({bottom: deleteLink});
				quote.insert({bottom: strong});
				quote.insert({bottom: args.text});
				quote.insert({bottom: linkDiv});
				quote = $t(quote);
				args = quote;
//				(funcer();
			}
			insertBefore.insert({before: args});
		},
		insertConsole: function(ui, args) {
			var insertBefore = this.findInsertBefore.apply(this, arguments);
			var console = $t(new Element('div'));
			var deleteLink = this.createDeleteLink();
			var pre = $t(new Element('pre'));
			pre.update('&nbsp;');
			console.addClassName('console').addClassName('deletable');
			console.insert({bottom: deleteLink});
			console.insert({bottom: pre});
//			var buttons = this.generateButtons();
//			console.insert({bottom: buttons});
			insertBefore.insert({before: console});
			this.moveCaret.bind(this, pre.lastChild, true/*to start*/).defer();
		},
		insertSource: function(ui, args) {
			var insertBefore = this.findInsertBefore.apply(this, arguments);
			source = $t(new Element('div'));
			var deleteLink = this.createDeleteLink();
			var editLink = this.createEditLink();
			var originalValuesDiv = this.createOriginalValuesDiv(args.originalValues);
			source.addClassName('source').addClassName('deletable').addClassName('editable');
			source.writeAttribute('object', 'source');
			source.insert({bottom: originalValuesDiv});
			source.insert({bottom: deleteLink});
			source.insert({bottom: editLink});
			source.insert({bottom: args.values})
			p = $t(new Element('p'));
			p.update('&nbsp;');
			insertBefore.insert({before: p});
			(function() {
				p = $t(p);
				p.insert({before: source});
				this.moveCaret.bind(this, p.firstChild, true/*to start*/).defer();
			}).bind(this).defer();
		},
		/*generateButtons: function(withEdit) {
			var buttons = $t(new Element('div', {
				'class': 'buttons'
			}));
			var remove = $t(new Element('a', {
				'class': 'delete-link',
				href: 'javascript:void(0)'
			}));
			remove.update('Удалить');
			buttons.insert(remove);
			if (withEdit) {
				var edit = $t(new Element('a', {
					'class': 'edit-link',
					href: 'javascript:void(0)'
				}));
				edit.update('Редактировать');
				buttons.insert(edit);
			}
			return buttons;
		},*/
		findInsertBefore: function(ui, args) {
			var node = $t(tinyMCE.activeEditor.selection.getNode());
			var ancestors = node.ancestors();
			var index;
			var insertBefore;
			ancestors.unshift(node);
			ancestors.each(function(el, i) {
				if (el.tagName == 'BODY') {
					index = i-1;
					throw $break;
				}
			}, this);
			if (index<0) {
				var bs = tinyMCE.activeEditor.selection.getSel();
				insertBefore = $t(bs.anchorNode);
				if (insertBefore.tagName == 'BODY') {
					insertBefore = $t(insertBefore.down());
					cl(insertBefore);
				}
			} else {
				insertBefore = $t(ancestors[index]);
			}
			return insertBefore;
		},
		openDialog: function(action, url, customArgs) {
			tinyMCE.activeEditor.windowManager.open({
				file : main.makeUrl('/tiny/action/'+action),
				width: 600,
				height: 400,
				inline : 1
			}, {
				plugin_url : url,
				customArgs: customArgs
			});
		},
		moveCaret: function(el, toStart) {
			tinyMCE.activeEditor.selection.select(el);
			tinyMCE.activeEditor.selection.collapse(toStart);
		},
		createDeleteLink: function() {
			var a = $t(new Element('a', {
				'href': 'javascript:void(0)',
				'class': 'element_delete'
			}));
			a.observe('click', this.deleteObject.bindAsEventListener(this));
			return a;
		},
		createEditLink: function() {
			var a = $t(new Element('a', {
				'href': 'javascript:void(0)',
				'class': 'element_edit'
			}));
			a.observe('click', this.editObject.bindAsEventListener(this));
			return a;
		},
		createOriginalValuesDiv: function(values) {
			return $t(new Element('div', {
				'style': 'display: none;'
			})).update(Object.toJSON(values));
		},
		
		findQuote: function(currentEl) {
			currentEl = $t(currentEl, 'force');
			var quote = null;
			var ancestors = currentEl.ancestors();
			ancestors.unshift(currentEl);
			ancestors.each(function(el) {
				if ($t(el).hasClassName('comment-quote')) {
					quote = el;
					throw $break;
				}
			}, this);
			return quote;
		},
		nodeChange: function(ed, controlManager, currentEl, selectionCollapsed, options) {
			currentEl = $t(currentEl);
			[{
				cls: 'deletable',
				button: 'delete'
			}, {
				cls: 'editable',
				button: 'edit'
			}].each(
			function(obj) {
				var el = currentEl;
				var i = 100;
				while (el && !el.hasClassName(obj.cls) && i) {
					el = $t(el.up());
					i--;
				}
				controlManager.setDisabled(obj.button, !el);
				this[obj.cls+'Object'] = el;
			}, this);
			this.quote = this.findQuote(currentEl);
		},
		execCommand: function(cmd, ui, value) {
			switch (cmd) {
				case 'mceReplaceContent':
					this.mceReplaceContentCallback.bind(this).defer();
					break;
			}
		},
		mceReplaceContentCallback: function() {
			var body = $t(this.editor.getBody());
			cl(body);
			Prototype.BrowserFeatures.XPath = false; // Turning off xpath
			body.select('.element_edit', '.element_delete').each(function(el) {
				var method = el.className.substring(el.className.lastIndexOf('_')+1);
				$t(el).observe('click', this[method+'Object'].bindAsEventListener(this));
			}, this);
			Prototype.BrowserFeatures.XPath = true;
			return true;
		},
		handle: function(ed, e) {
			if (!this.quote) return;
			var k = e.keyCode;
			var es = ed.selection;
			var bs = es.getSel();
			var br = es.getRng();
			switch (k) {
				case 13: // Enter
					var range = ed.selection.getRng();
					var text = range.commonAncestorContainer;
					var offset = range.endOffset;
					var p = $t(new Element('p'));
					p.update('&nbsp;');
					this.quote.insert({after: p});
					p = $t(p);
					ed.selection.select(p, true);
//					ed.selection.collapse(false);
					if (offset != text.length) {
						var quoteClone = this.quote.cloneNode(true);
						text.nodeValue = text.nodeValue.substr(0, offset);
						p.insert({after: quoteClone});
						(function() {
							quoteClone.lastChild.nodeValue = quoteClone.lastChild.nodeValue.substr(offset);
						}).defer();
					}
					return tinymce.dom.Event.cancel(e);
					break;
			}
		},
		deleteObject: function() {
			this.deletableObject.remove();
		},
		editObject: function() {
			cl(this);
			var object = this.editableObject.readAttribute('object');
			this.openDialog(object, this.pluginUrl, {
				isEdit: true,
				originalValues: this.editableObject.down().innerHTML.evalJSON()
			});
		},
		executeEditObject: function(ui, args) {
			var object = this.editableObject.readAttribute('object'); 
			if (this['executeEdit'+object.capitalize()]) {
				this['executeEdit'+object.capitalize()](args)
			} else {
				this.editableObject.update(args);	
			}
		},
		executeEditSource: function(args) {
			$t(this.editableObject.down()).update(Object.toJSON(args.originalValues));
			$t($t(this.editableObject).childElements().last()).remove();
			$t(this.editableObject).insert(args.values);
		},
		getInfo : function() {
			return {
				longname : 'Nixp plugin',
				author : 'Denis.Gorbachev',
				version : "1.0"
			};
		}
	});

	tinymce.PluginManager.add('nixp', tinymce.plugins.TfPlugin);
})();
