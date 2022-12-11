// plugins.js
plugins.sort((a, b) => a.name.localeCompare(b.name));

let plugins_el = plugins.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { 'class': 'name' }),
		el('button', 'copy', { class: 'copy' }, { click: () => copy(plugin, false) }),
		el('p', plugin.description, { class: 'description' }),
		el('a', { href: plugin.repo }, plugin.repo),
		el('span', ` (${plugin.path || 'init'})`),
	]);
})

// themes.js
themes.sort((a, b) => a.name.localeCompare(b.name));

let themes_el = themes.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { 'class': 'name' }),
		el('button', 'copy', { class: 'copy' }, { click: () => copy(plugin, true) }),
		el('div', { class: 'image-container' }, [
			el('img', { src: plugin.image, class: 'image' }, {
				click: () => { window.open(plugin.image, '_blank').focus(); }
			}),
		]),
		el('a', { href: plugin.repo }, plugin.repo),
		el('span', ` (${plugin.path || 'init'})`),
	]);
})

// copy a vis-plug config line to the clipboard
function copy(plugin, theme) {
	let repo = plugin.repo.replace('https://github.com/', '')
	let lua = `{ '${repo}', file = '${plugin.path ?? 'init'}', theme = ${theme} },`
	navigator.clipboard.writeText(lua);
}

// search for plugins and themes
function search() {
	let query = get('search').value
	let pluginList = get('plugins').getElementsByTagName('li')
	for (let plugin of pluginList) {
		plugin.style.display = plugin.innerText.toLowerCase()
			.indexOf(query.toLowerCase()) > -1 ? 'block' : 'none'
	}
}

function set_plugin_type(type) {
	switch (type) {
		case 'plugin': {
			set('plugins', plugins_el)
			break;
		}
		case 'theme': {
			set('plugins', themes_el)
			break;
		}

		default:
			break;
	}
}

set_plugin_type('plugin')

get('search').addEventListener('input', search);
