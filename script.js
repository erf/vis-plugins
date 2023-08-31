// plugins.js
plugins.sort((a, b) => a.name.localeCompare(b.name));

let plugins_el = plugins.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { 'class': 'name' }),
		el('button', 'plug', { class: 'copy' }, { click: () => copy(plugin, false) }),
		el('p', plugin.desc, { class: 'description' }),
		el('a', { href: plugin.url }, plugin.url),
		el('span', ` (${plugin.file || 'init'})`),
	]);
})

// themes.js
themes.sort((a, b) => a.name.localeCompare(b.name));

let themes_el = themes.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { 'class': 'name' }),
		el('button', 'plug', { class: 'copy' }, { click: () => copy(plugin, true) }),
		el('div', { class: 'image-container' }, [
			el('img', { src: plugin.image, class: 'image' }, {
				click: () => { window.open(plugin.image, '_blank').focus(); }
			}),
		]),
		el('a', { href: plugin.url }, plugin.url),
		el('span', ` (${plugin.file || 'init'})`),
	]);
})

// copy a vis-plug config line to the clipboard
function copy(plugin, theme) {
	let repo = plugin.url.replace(/https:\/\/(github.com\/)?/, '')
	var lua = `{ '${repo}' `
	if (plugin.file) {
		lua += `, file = '${plugin.file}' `
	}
	if (theme) {
		lua += `, theme = ${theme} `
	}
	lua += `},`
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
	localStorage.setItem('plugin-type', type);
	switch (type) {
		case 'plugin': {
			// set checked
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

const plugin_type = localStorage.getItem('plugin-type') ?? 'plugin'

set_plugin_type(plugin_type)

if (plugin_type === 'plugin') {
	get('show-plugins').checked = true
} else {
	get('show-themes').checked = true
}

get('search').addEventListener('input', search)
