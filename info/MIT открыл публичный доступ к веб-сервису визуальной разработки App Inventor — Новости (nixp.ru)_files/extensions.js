Object.extend(Element.Methods, {
	linkify: function() {
		arguments = $A(arguments);
		var el = arguments[0];
		arguments[0] = 'click';
		el.observe.apply(el, arguments);
		el.match('a') && el.activate();
		return el;
	},
	activate: function(el) {
		el.href = el.href || '#';
		return el;
	},
	getUoi: function(el) {
		return el.readAttribute('uoi') || main.extractUoi(el.id);
	},
	getRow: function(el) {
		return el.up('tr');
	},
	fireNativeEvent: function(element, event) {
		throw 'untested';
		if (document.createEvent) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent(event, true, true); // event type,bubbling,cancelable
			return !element.dispatchEvent(evt);
		} else { // ye olde IE
			var evt = document.createEventObject();
			return element.fireEvent('on'+event,evt)
		}
	}
});

Object.extend(Form.Methods, {
	augmentWithName: function(el) {
		el.name = el.down('.form-name').innerHTML;
	},
	fname: function(el, fname) {
		if (!el.name) {
			el.augmentWithName();
			if (!el.name) {
				console.error('Form element doesn\'t have a php name set: ');
				console.error(el);
			}
		}
		return el.down('#'+el.name+'_'+fname)
	},
	debug: function(el) {
		if (el.__debug) return;
		var observer = function(e) {
			e.stop();
		}
		el.observe('submit', observer);
		el.__debug = true;
	}
});

Object.extend(Form.Element.Methods, {
	getForm: function(el) {
		return el.up('form');
	},
	invokeRow: function(el, func) {
		var args = $A(arguments);
		var tr = el.up('tr');
		tr[func].apply(tr, args.slice(2));
	},
	hideRow: function(el) {
		el.invokeRow('hide');
	},
	showRow: function(el) {
		el.invokeRow('show');
	}
});

Element.addMethods();

Element.addMethods('INPUT', {
	getChecked: function(el) {
		return !!el.readAttribute('checked');
	},
	setChecked: function(el, value) {
		el.writeAttribute('checked', value? 'checked' : null);
	},
	toggleChecked: function(el) {
		el.setChecked(!el.getChecked());
	}
});
