// copy a vis-plug config line to the clipboard
function copy(plugin, theme) {
	let lua = `{ url = '${plugin.repo}', file = '${plugin.path}', theme = ${theme} }`
	navigator.clipboard.writeText(lua);
}

// search for plugins and themes
function search() {
	let query = get('search').value
	let pluginList = get('plugins').getElementsByTagName('li')
	let themeList = get('themes').getElementsByTagName('li')
	for (let plugin of pluginList) {
		plugin.style.display = plugin.innerText.toLowerCase()
			.indexOf(query.toLowerCase()) > -1 ? 'block' : 'none'
	}
	for (let theme of themeList) {
		theme.style.display = theme.innerText.toLowerCase()
			.indexOf(query.toLowerCase()) > -1 ? 'block' : 'none';
	}
}

function set_plugins_visibility() {
	get('plugins-container').style.display = get('show-plugins').checked ? 'block' : 'none'
}

function set_themes_visibility() {
	get('themes-container').style.display = get('show-themes').checked ? 'block' : 'none'
}

function init() {

	// list plugins.json
	plugins.sort((a, b) => a.name.localeCompare(b.name));
	let plugins_el = plugins.map((plugin) => {
		return el('li', '', { class: 'item' }, [
			el('p', plugin.name, { 'class': 'name' }),
			el('p', plugin.description, { class: 'description' }),
			el('a', { href: plugin.repo }, plugin.repo),
			el('p', plugin.path || 'init.lua'),
			el('button', 'copy', { class: 'copy' }, { click: () => copy(plugin, false) }),
		]);
	})
	set('plugins', plugins_el)

	// list themes.json
	themes.sort((a, b) => a.name.localeCompare(b.name));
	let themes_el = themes.map((theme) => {
		return el('li', '', { class: 'item' }, [
			el('p', theme.name, { 'class': 'name' }),
			el('img', { src: theme.image, class: 'image' }),
			el('a', { href: theme.repo }, theme.repo),
			el('p', theme.path || 'init.lua'),
			el('button', 'copy', { class: 'copy' }, { click: () => copy(theme, true) }),
		]);
	})
	set('themes', themes_el)

	get('search').addEventListener('input', search);

	set_plugins_visibility()
	set_themes_visibility()
}

init()
