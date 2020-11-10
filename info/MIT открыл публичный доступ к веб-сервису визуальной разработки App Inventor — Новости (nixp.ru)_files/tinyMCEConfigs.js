main.tinyMCEConfigs = {
	currentConfigName: null,
	all: {
		theme: 'advanced',
		language: 'ru',
		width: '100%',
		content_css: '/css/tiny_content.css',
		theme_advanced_toolbar_location: 'top',
		theme_advanced_toolbar_align: 'left',
		theme_advanced_statusbar_location: 'bottom',
		theme_advanced_path: true,
		theme_advanced_resizing: true,
		theme_advanced_resize_horizontal: false,
		mode: 'none',
		tab_focus: ':next',
		cleanup: true,
		verify_html: false,
		forced_root_block: false,
		noneditable_noneditable_class: /*'mce-non-editable'*/'',
		noneditable_editable_class: /*'mce-editable'*/'',
		gecko_spellcheck: true,
		dialog_type: 'modal',
		entity_encoding: 'raw',
		plugins: 'nixp,inlinepopups',
		inlinepopups_skin: 'inlinepopups_nixp',
		extended_valid_elements: 'code[class,object],embed[src|width|height|scale,bgcolor,type,allowfullscreen,allownetworking,pluginspage]',
		convert_urls: false,
		relative_urls: false
	},
	page: {
		theme_advanced_buttons1: 'bold,italic,underline,strikethrough,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,sub,sup,separator,charmap',
		theme_advanced_buttons2: 'bullist,numlist,separator,outdent,indent,separator,undo,redo,separator,link,unlink,separator,cleanup,removeformat,separator,code',
		theme_advanced_buttons3: '',
		extended_valid_elements: 'iframe[src|width|height|name|align],embed[src|width|height|scale,bgcolor,type,allowfullscreen,allowscriptaccess,allownetworking,pluginspage]'
	},
	full: {
		theme_advanced_buttons1: 'bold,italic,underline,strikethrough,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,sub,sup,separator,charmap,separator,code',
		theme_advanced_buttons2: 'more,separator,bullist,numlist,separator,outdent,indent,separator,undo,redo,separator,link,unlink,separator,cleanup,removeformat,separator,quote,console,insertsource,separator,edit,delete',
		theme_advanced_buttons3: '',
		extended_valid_elements: 'embed[src|width|height|scale,bgcolor,type,allowfullscreen,allownetworking,pluginspage]'
	},
	comment: {
		theme_advanced_buttons1: 'bold,italic,underline,strikethrough,separator,bullist,numlist,separator,outdent,indent,separator,link,unlink,separator,charmap,separator,quote,console,insertsource,separator,edit,delete',
		theme_advanced_buttons2: '',
		theme_advanced_buttons3: '',
		height: '200'
	},
	getConfig: function(configName) {
		this.currentConfigName = configName;
		var config = {};
		config = Object.extend(config, this.all);
		config = Object.extend(config, this[configName]);
		if (config.plugins) {
			if (main.isDev()) {
				config.plugins = config.plugins.replace('inlinepopups', '');
			}
		}
		return config;
	}
}
