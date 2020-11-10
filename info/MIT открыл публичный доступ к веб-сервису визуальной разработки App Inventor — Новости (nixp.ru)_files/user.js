User = {
	data: {},
	permanent: {},
	checkLogin: function(e, afterLogin) {
		if (this.isAuthenticated()) {
			return true;
		}
		var el = e.element();
		this.afterLogin = afterLogin? afterLogin : el.fireNativeEvent.bind(el, e.eventType || e.type);
		this.showLoginForm();
		e.stop();
		return false;
	},
	showLoginForm: function(escapeIsDisabled) {
		if (escapeIsDisabled) {
			$('loginCloseLink').hide();
		} else {
			this.loginFormObserver = this.hideLoginForm.bindAsEventListener(this);
			Event.observe(window, 'keydown', this.loginFormObserver);
		}
		main.showGrid();
		$('loginform').setStyle({ display: 'block' });
		//$('loginFormPassword').value = '';
		if ($('loginFormUsername').value) {
      if ($('loginFormPassword')) {
        $('loginform').down('.login_enter').focus();
			} else {
        $('loginFormPassword').focus()
      }
		} else {
			$('loginFormUsername').focus()
		}
	},
	hideLoginForm: function(e) {
		if (e && e.keyCode != Event.KEY_ESC) {
			return;
		}
		main.hideGrid();
		if (this.loginFormObserver) {
			Event.stopObserving(window, 'keydown', this.loginFormObserver);
			delete this.loginFormObserver;
		}
		if (this.afterLogin) {
			delete this.afterLogin;
		}
		$('loginError').update('');
		$('loginform').hide();
	},
	login: function(form) {
		var parameters = {
			requestedData: this.stateChange.collectData().toJSON()
		};
		parameters = Object.extend(parameters, form.serialize('hash'));
		if (!Prototype.Browser.Opera) {
			form.disable();
		}
		new Ajax.Request(form.action, {
			method: 'post',
			parameters: parameters,
			onSuccess: this.loginSuccess.bind(this),
			onComplete: this.loginComplete.bind(this)
		});
		return false;
	},
	logout: function() {
		if (this.inAdminPanel) {
			location.href = $('logout-link').href;
		} else {
			var smth = new Ajax.Request('/ajaxLogout', {
				onSuccess: this.logoutSuccess.bind(this)
			});
			return smth;
		}
	},
	loginSuccess: function(request) {
		result = request.responseText.evalJSON();
		this.loginComplete();
		if (result.success) {
			Object.extend(this.data, result.user);
			var afterLogin = this.afterLogin; // the next line will delete this.afterLogin
			this.hideLoginForm();
			$('loginFormPassword').clear();
			this.stateChange.login(result);
			afterLogin && afterLogin();
		} else {
			$('loginError').update(result.reason);
			$('loginFormPassword').focus();
		}
	},
	loginComplete: function() {
		$('loginFormReal').enable();
	},
	logoutSuccess: function(request) {
		result = request.responseText.evalJSON();
		if (result.success) {
			if (this.permanent.isSecure) {
				location.reload(true);
			} else {
				this.data = {};
				this.stateChange.logout();
			}
		}
	},
	hasCredential: function(credential) {
		return this.data.credentials &&
			this.data.credentials.indexOf(credential) != -1;
	},
	getPreference: function(preference) {
		return this.data.preferences &&
			this.data.preferences[preference];
	},
	setLocalPreference: function(preference, value) {
		return this.data.preferences[preference] = value;
	},
	setPreference: function(preference, newValue) {
		var oldValue = this.getPreference(preference);
		var id = preference+'-'+newValue.toString()+'-link';
		var link = $(id);
		new Ajax.Request(link.href);
		this.data.preferences[preference] = newValue;
		this.stateChange.preferenceChanged(preference, oldValue, newValue);
		return this;
	},
	togglePreference: function(preference) {
		var old = this.getPreference(preference);
		var oldClass = '.'+preference+'-'+old.toString();
		var newClass = '.'+preference+'-'+(!old).toString();
		$$(oldClass).invoke('toggle');
		$$(newClass).invoke('toggle');
		this.setPreference(preference, !old);
		return this;
	},
	isAuthenticated: function() {
		return this.data.isAuthenticated;
	},
	attachEffect: function() {
		var pcl = $('profileCollapseLink');
		if (!pcl) {
			return;
		}
		if (this.profileCollapseLinkObserver) {
			pcl.stopObserving('click', this.profileCollapseLinkObserver);
		}
		if (this.isAuthenticated()) {
			this.profileCollapseLinkObserver = Effect.toggle.bind(Effect, 'profileCollapse', 'blind');
		} else {
			this.profileCollapseLinkObserver = this.showLoginForm.bind(this, false);
		}
		pcl.observe('click', this.profileCollapseLinkObserver);
	},
	attachKeyNav: function() {
		Event.observe(document, 'keydown', this.handleKeyNav.bindAsEventListener(this));
	},
	handleKeyNav: function(e) {
		switch (e.keyCode) {
			case 222: // '
				if (e.ctrlKey) {
					this.toggleLogin();
					Event.stop(e);
				}
				break;
		}
	},
	toggleLogin: function(el) {
		if (el) $(el).blur();
		this.isAuthenticated()? this.logout() : this.showLoginForm();
	},
	stateChangeHandlers: {
		updateProfile: function() {
			this.attachEffect();
			Effect.toggle('profileCollapse', 'blind')
			var elements = $$('#profileCollapseLink span');
			elements[0].update(this.data.displayName);
			var avatar = $('avatar');
			avatar.src = this.data.avatar;
			avatar.title = this.data.displayName;
			avatar.up('a').href = this.data.linkInfo;
			$('commentary-counter').update(this.data.commentaryCounter)
			$('update-counter-holder').update(this.data.updateCounter);
			$('update-counter-wrapper').show();
			$('votesHTML').update(this.data.votesHTML);
			$('profileExitLink').show();
			$('profileRegisterLink').hide();
		},
		defaultProfile: function() {
			var defaults = [
				['#profileCollapseLink span', '<em>Войти</em>']
			]
			var field, selector, elements;
			for (var i = 0; i < defaults.length; i++) {
				selector = defaults[i][0];
				if (elements = $$(selector)) {
					elements.invoke('update', defaults[i][1]);
				}
			}
			var pc = $('profileCollapse');
			if (pc.visible()) {
				Effect.BlindUp('profileCollapse');
			}
			$('profileExitLink').hide();
			$('profileRegisterLink').show();
		},
		redefineVisualEffects: function() {
			var showEffects = User.getPreference('ShowVisualEffects');
			if (showEffects === false/*preventing 'undefined' from screwing my effects*/) {
				Object.redefine(Effect.Base.prototype, {
					'start': function(options) {
						options.duration = 0;
						this._original_start(options);
					}
				})
			}
		},
		unRedefineVisualEffects: function() {
			Object.unredefine(Effect.Base.prototype);
		},
		addGlobalListeners: function() {
			$$('.beg-pardon').each(function(el) {
				el.href = 'javascript:void(0)';
				el.observe('click', main.begPardon.bind(main));
			});
		}
	}
};
User.stateChange = {
	loadFuncs: [],
	loginFuncs: [],
	logoutFuncs: [],
	dataFuncs: [],
	preferenceChangeFuncs: {},
	append: function() {
		var o;
		for (var i=0; i<arguments.length; i++) {
			o = arguments[i];
			if (typeof o == 'function') {
				o = {
					load: o,
					login: o,
					logout: o
				}
			}
			if (typeof o.data == 'object') {
				o.data = function() {return o.data};
			}
			if (o.load) {
				if (document.loaded) {
					o.load.call(this);
				} else {
					this.loadFuncs.push(o.load);
				}
			}
			if (o.login) this.loginFuncs.push(o.login);
			if (o.logout) this.logoutFuncs.push(o.logout);
			if (o.data) this.dataFuncs.push(o.data);
			if (o.preferenceChange) {
				for (var preference in o.preferenceChange) {
					if (!this.preferenceChangeFuncs[preference]) {
						this.preferenceChangeFuncs[preference] = [];
					}
					this.preferenceChangeFuncs[preference].push(o.preferenceChange[preference]);
				}
			}
		}
	},
	load: function() {
		this.loadFuncs.invoke('call', this);
		delete this.loadFuncs;
	},
	login: function(result) {
		this.loginFuncs.invoke('call', this, result);
	},
	logout: function() {
		this.logoutFuncs.invoke('call', this);
	},
	collectData: function() {
		var requestedData = [];
		this.dataFuncs.each(
			function(func) {
				requestedData.push(func());
			}
		);
		requestedData = requestedData.compact();
		return requestedData;
	},
	preferenceChanged: function(preference, oldValue, newValue) {
		var preferenceFuncs = this.preferenceChangeFuncs[preference];
		if (!preferenceFuncs) return;
		preferenceFuncs.invoke('call', this, oldValue, newValue);
	}
}
main.waitingRoom.append('domLoaded', User.stateChange.load.bind(User.stateChange));
/* Default state change handlers */

User.stateChange.append(
	{
		load: User.attachKeyNav.bind(User)
	},{
		load: User.stateChangeHandlers.redefineVisualEffects.bind(User),
		login: User.stateChangeHandlers.redefineVisualEffects.bind(User),
		logout: User.stateChangeHandlers.unRedefineVisualEffects.bind(User),
		preferenceChange: {
			ShowVisualEffects: function(oldValue, newValue) {
				var funcNames = ['redefineVisualEffects', 'unRedefineVisualEffects']
				User.stateChangeHandlers[funcNames[(+newValue)/*type conversion*/]]();
			}
		}
	},
	User.attachEffect.bind(User),
	{
		login: User.stateChangeHandlers.updateProfile.bind(User),
		logout: User.stateChangeHandlers.defaultProfile.bind(User)
	},{
		preferenceChange: {
			ShowPreferences: function(oldValue, newValue) {
				$('user-preferences')[newValue? 'show' : 'hide']();
			}
		},
		load: User.stateChangeHandlers.addGlobalListeners.bind(User)
	}
);

