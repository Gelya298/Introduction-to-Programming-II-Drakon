main = {
	tinyMCEToggler: {},
	alertTimeout: 10000,
	errorMessages: {
		s403: 'У вас нет доступа для выполнения этой операции.',
		s404: 'Объект не найден в базе данных. Возможно, он был удален.',
		s500: 'Сервер временно не обслуживает запросы. Попробуйте повторить свой запрос позже.',
		s0: 'Сервер временно недоступен. Возможно, у вас проблемы с доступом в интернет. Попробуйте повторить свой запрос позже.',
		other: 'Произошла непредвиденная ошибка. Попробуйте повторить свой запрос позже.',
		norights: 'У вас недостаточно прав'
	},
	href: 'javascript:void(0)', // Default href to use for JS links
	checkRequest: function(request) {
		if (request.success() === false
				|| /* Bug in Prototype */request.getStatus() == 0) {
			this.handleError(request);
		}
	},
	handleError: function(request) {
		var status = request.getStatus();
		var message;
		switch (status) {
			case 400:
				break;
			case 401:
				User.showLoginForm();
				break;
			case 403:
				message = request.transport.responseText
						? request.transport.responseText
						: this.errorMessages['s' + status];
				this.alert(message);
				break;
			case 404:
				this.reload();
				break;
			case 500:
			case 0:
				this.alert(this.errorMessages['s' + status]);
				break;
			default:
				this.alert(this.errorMessages['other']);
				break;
		}
	},
	showGrid: function() {
		var bodyWidth = ($(document.body).getWidth() || document.viewport	.getWidth())	+ 'px'; // '100%' ?
		var bodyHeight = ($(document.body).getHeight() || document.viewport.getHeight())	+ 'px'; // '100%' ?
		$('grid').setStyle({
			display: 'block'
		});
	},
	hideGrid: function() {
		$('grid').hide();
	},
	alert: function(message, closeText) {
		if (!message) {
			this.hideGrid();
			$('messageAlert').remove();
			Event.stopObserving(window, 'keydown', this.alertEscapeObserver);
			User && User.hideLoginForm();
			return true;
		}
		this.showGrid();
		var alertHtmlBlock = '<div id="messageAlert"><div id="messageAlertText"><a id="alert_close" href="#" onClick="main.alert(); return false;"></a><strong>'	+ message + '</strong>'+(closeText? '<div id="messageAlertCloseText"><a href="#" onClick="main.alert(); return false;">'+closeText+'</a></div>' : '')+'</div></div>';
		$(document.body).insert({
			bottom: alertHtmlBlock
		});
		Event.observe(window, 'keydown', this.alertEscapeObserver);
		return true;
	},
	alertEscapeObserver: function(e) {
		if (e.keyCode == Event.KEY_ESC) {
			main.alert();
		}
	},
	recalculateReloadSeconds: function(seconds) {
		var prettySeconds = Math.round(seconds / 1000);
		if (prettySeconds) {
			$('messageAlertSeconds').innerHTML = prettySeconds	+ ' секунд' + (prettySeconds == 1? 'у': (prettySeconds < 5 ? 'ы': ''));
			seconds -= 1000;
			setTimeout(this.recalculateReloadSeconds.bind(this, seconds), 1000);
		}
	},
	reload: function() {
		this.alert('<div>Страница будет автоматически перезагружена через <span id="messageAlertSeconds"></span>.</div><a class="alert_okay" href="#" onClick="javascript:window.location.reload();">Ну и ладно!</a>');
		this.recalculateReloadSeconds(this.alertTimeout);
		setTimeout('location.reload()', this.alertTimeout);
	},
	check42: function() {
		if ($('searchInput').value == '42') {
			Effect.toggle('aum42', 'slide');
			return false;
		}
		return true;
	},
	initTinyMCE: function(configName, overrides) {
		if (configName != this.tinyMCEConfigs.currentConfigName || overrides) {
			var config = this.tinyMCEConfigs.getConfig(configName);
			config.configName = configName;
			Object.extend(config, overrides || {});
			tinyMCE.init(config);
		}
		return true;
	},
	toggleTinyMCE: function() {
		if (this.tinyMCEToggler.selector) {
			var overrides = this.tinyMCEToggler.overrides || {};
			overrides.editor_selector = this.tinyMCEToggler.selector;
			overrides.mode = 'specific_textareas';
			this.initTinyMCE(this.tinyMCEToggler.configName, overrides);
		}
	},
	extractUoi: function(stringWithUoi, delimeter) {
		delimeter = delimeter || '-'
		return stringWithUoi.substr(stringWithUoi.lastIndexOf(delimeter) + 1);
	},
	extractId: function(uoi) {
		return uoi.substr(uoi.lastIndexOf(':') + 1);
	},
	extractModel: function(uoi) {
		var li = uoi.lastIndexOf('-');
		return uoi.substring(li + 1, uoi.lastIndexOf(':'));
	},
	isDev: function() {
		var match = location.href.match(/dev.php/);
		return !!match;
	},
	makeUrl: function(url) {
		if (this.isDev()) {
			return '/dev.php'+url;
		}
		return url;
	},
	ensureVisibility: function(el1, el2, config) {
		if (el1) {
			el2 = el2 || el1;
			var el1ViewportOffset = el1.viewportOffset();
			var el2ViewportOffset = el2.viewportOffset();
			if (el1ViewportOffset.top < 0
					|| el2ViewportOffset.top + el2.getHeight() > document.viewport
							.getHeight()) {
				Effect.ScrollTo(el1.id, config);
			}
		} else {
			Effect.ScrollTo(el2.id, Object.extend({
								offset: -200
							}, config));
		}
	},
	begPardon: function() {
		this.alert('К сожалению, эти данные мы вам пока не покажем. А что вы хотели от альфа-версии?<em>P.S. Не волнуйтесь: все будет — <a href="http://bugs.nixp.ru/milestone/Irgendwann">Irgendwann</a>.</em>');
	},
	link: function(el, observer) {
		el.href = this.href;
		el.observe('click', observer);
		return observer;
	},
	setCookie: function(name,value,days) {
		if (!days) days = 30;
		var expires = '';
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = '; expires='+date.toGMTString();
		document.cookie = name+'='+value+expires+'; path=/';
	},
	getCookie: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	removeCookie: function(name) {
		createCookie(name,"",-1);
	},
	setHash: function(name, value) {
		var oldValue = this.getHash(name);
		var newHash = ';'+name+'='+value;
		if (oldValue) {
			var regexp = new RegExp(';'+name+'=([^;]*)');
			location.hash = location.hash.replace(regexp, newHash);
		} else {
			location.hash += newHash;
		}
	},
	getHash: function(name) {
		if (!name) return location.hash.substr(1);
		var regexp = new RegExp(';'+name+'=([^;]*)');
		var results = location.hash.match(regexp);
		return results && results[1];
	},
	nixpAntiMsiePolicy: function() {
		if (!Prototype.Browser.IE) return true;

		// thanks to http://stackoverflow.com/questions/209043/browser-version-in-prototype-library
		Prototype.Browser.IE6 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 6;
		Prototype.Browser.IE7 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 7;
		Prototype.Browser.IE8 = Prototype.Browser.IE && !Prototype.Browser.IE6 && !Prototype.Browser.IE7;

		var stopExplorerBlock = '<div id="stopmsie"><strong>nixp.ru рекомендует вам отказаться от Internet Explorer</strong> в пользу адекватных и открытых браузеров: <a href="http://www.mozilla.com?from=sfx&amp;uid=191642&amp;t=556">Firefox</a> или <a href="http://www.google.ru/chrome">Chrome</a>.</div>';
		$('nixp').insert( { before: stopExplorerBlock } );
		if (!Prototype.Browser.IE6) $('nixp').addClassName('topfixed');
		else {//if (!main.getCookie('nixpie6')) {
			// ie version really sucks
			$('nixp').addClassName('hidden');
			var reallyStopExplorerBlock = '<div id="ie6blocker" class="ie6fixed"><div>Прошел уже не один год с тех пор, как <strong>используемый вами браузер категорически устарел</strong>. Кроме того, <strong>он не поддерживает мировые стандарты в должной мере</strong>.<br /><br />По этим причинам <strong>мы не можем гарантировать адекватное отображение и функционирование сайта</strong>.<br /><br />Настойчиво <strong>рекомендуем вам сменить браузер</strong> на такие продукты, завоевавшие мировое признание, как <a href="http://www.mozilla.com?from=sfx&amp;uid=191642&amp;t=556">Mozilla Firefox</a> или <a href="http://www.google.ru/chrome">Google Chrome</a>. Эти Open Source-разработки не только гарантируют более высокое качество отображения страниц, но и предоставляют б<em>о</em>льшие возможности, а также обеспечивают надежную и безопасную работу в интернете.<span><a onclick="main.nixpAntiMsiePolicyDisableIE6();" href="javascript:void(0);">Окей, я сменю браузер, но пока попробую посмотреть из IE6</a></span></div></div>';
			$('nixp').insert( { before: reallyStopExplorerBlock } );
		}
		return true;
	},
	nixpAntiMsiePolicyDisableIE6: function () {
		$('ie6blocker').remove();
		$('nixp').removeClassName('hidden');
    // main.setCookie('nixpie6', 1, 30);
	}
};

main.waitingRoom = {
	domLoaded: [ main.nixpAntiMsiePolicy ],
	windowLoaded: [],
	caller: function(place) {
		this[place].invoke('call');
	},
	append: function(place) {
		for (var i = 1; i < arguments.length; i++) {
			this[place].push(arguments[i]);
		}
	}
};
document.observe('dom:loaded', main.waitingRoom.caller.bind(main.waitingRoom,
				'domLoaded'));
Event.observe(window, 'load', main.waitingRoom.caller.bind(main.waitingRoom,
				'windowLoaded'));
main.ajaxResponder = {
	onFailure: main.checkRequest.bind(main)
};
Ajax.Responders.register(main.ajaxResponder);

function nixp_auto_complete_disable_enter() {
	if (Prototype.Browser.Opera)
		alert('Тег добавлен!');
}

function nixp_add_tag(element_id, tag_element) {
	if ($(element_id).value) {
		if ($(element_id).value.substr(-1) == ',')
			$(element_id).value += ' ';
		else if ($(element_id).value.substr(-2) != ', ')
			$(element_id).value += ', ';
	}
	$(element_id).value += tag_element.innerHTML + ', ';
	$(element_id).focus();
	return false;
}

function switchVisibility(id1, id2) {
	// In fact, this function is roughly related to expanding text...
	var el1 = $(id1);
	if (el1.visible()) {
		el1.hide();
		$(id2).show();
	} else {
		$(id2).hide();
		el1.show();
	}
	return false;
}

main.Object = {
	redefine: function(object, properties) {
		var property;
		for (property in properties) {
			object['_original_' + property] = object[property];
			object[property] = properties[property];
		}
		return object;
	},
	unredefine: function(object) {
		var property, originalProperty;
		for (property in object) {
			if (property.startsWith('_original_')) {
				originalProperty = property.gsub('_original_', '');
				object[originalProperty] = object[property];
				delete object[property];
			}
		}
		return object;
	}
}

Object.extend(Object, main.Object);

Event.observe(window, 'load', main.toggleTinyMCE.bind(main));
