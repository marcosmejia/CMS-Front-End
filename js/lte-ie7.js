/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'NewsCred-CMS\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-forward' : '&#x62;',
			'icon-back' : '&#x66;',
			'icon-close' : '&#x78;',
			'icon-plus' : '&#x79;',
			'icon-users' : '&#x61;',
			'icon-user-assets' : '&#x75;',
			'icon-modules' : '&#x6d;',
			'icon-pages' : '&#x6e;',
			'icon-newscred-icon' : '&#x76;',
			'icon-pencil' : '&#x70;',
			'icon-keyword' : '&#x6b;',
			'icon-search' : '&#x73;',
			'icon-grabby' : '&#x67;',
			'icon-list' : '&#x6c;',
			'icon-tile' : '&#x74;',
			'icon-arrow-up' : '&#x21;',
			'icon-arrow-down' : '&#x22;',
			'icon-big-arrow-right' : '&#x5d;',
			'icon-big-arrow-left' : '&#x5b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};