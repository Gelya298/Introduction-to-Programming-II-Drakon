(function() {
    var Moikrug = window['Moikrug'] = Moikrug || {};
    var share_text = 'Поделиться';
    var share_title = 'Поделиться в Мой Круг';
    var base_url = 'http://share.yandex.ru/go.xml?service=moikrug';

    Moikrug.share = function(id, options) {
        options = options || {};
        var link = encodeURIComponent(options.link || window.location.href);
        var title = encodeURIComponent(options.title || document.title);
        var button_text =  options.button_text || share_text;
        var share_url = base_url + '&url=' + link + '&title=' + title;
        if (options.description) {
            share_url = share_url + '&description=' + encodeURIComponent(options.description);
        }

        document.getElementById(id).innerHTML = [
            '<a target="_blank" title="' + share_title + '" style="',
            'font-family: Arial, sans-serif;',
            'font-size: 12px;',
            'display: inline-block;',
            'height: 20px;',
            'padding: 0 8px 0 26px;',
            'border: 1px solid #8fa1ab;',
            'border-radius: 3px;',
            '-moz-border-radius: 3px;',
            'color: #0A4B72;',
            'text-decoration: none;',
            'line-height: 21px;',
            'background: url(//moikrug.ru/api/share/mk20.png) no-repeat 0 50% #f5f5f5;" ',
            'href="',
            share_url,
            '">',
            button_text,
            '</a>'
        ].join('');
    };
})();

