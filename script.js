// plugins.js
plugins.sort((a, b) => a.name.localeCompare(b.name));

let plugins_el = plugins.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { class: 'name' }),
		el('button', 'copy', { class: 'copy' }, { click: (e) => copy(plugin, false, e.target) }),
		el('p', plugin.desc, { class: 'description' }),
		repo_line(plugin),
		plugin.home 
			? el('p', [ el('a', { href: plugin.home }, plugin.home) ])
			: el('span'),
		tag_line(plugin),
	]);
})

// themes.js
themes.sort((a, b) => a.name.localeCompare(b.name));

let themes_el = themes.map((plugin) => {
	return el('li', { class: 'item' }, [
		el('span', plugin.name, { class: 'name' }),
		el('button', 'copy', { class: 'copy' }, { click: (e) => copy(plugin, true, e.target) }),
		el('div', { class: 'image-container' }, [
			el('img', { src: plugin.image, class: 'image', loading: 'lazy', alt: `${plugin.name} screenshot` }, {
				click: () => { window.open(plugin.image, '_blank').focus(); }
			}),
		]),
		repo_line(plugin),
		plugin.home 
			? el('p', [ el('a', { href: plugin.home }, plugin.home) ])
			: el('span'),
		tag_line(plugin),
	]);
})

// repo url without the scheme
function host(url) {
	return url.replace(/^https?:\/\//, '')
}

// repo link with the optional file name after it
function repo_line(plugin) {
	return el('div', { class: 'meta' }, [
		el('a', { href: plugin.repo }, host(plugin.repo)),
		el('span', plugin.file ? ` (${plugin.file})` : ''),
	])
}

// optional tags, e.g. platform notes like 'linux' or 'macos'
// clicking a tag searches for it
function tag_line(plugin) {
	if (!plugin.tags?.length) return el('span')
	return el('div', { class: 'tags' }, plugin.tags.map((tag) =>
		el('button', tag, { class: 'tag' }, { click: () => {
			get('search').value = tag
			search()
		} })
	))
}

// copy a vis-plug config line to the clipboard
function copy(plugin, theme, button) {
	let repo = plugin.repo.replace(/https:\/\/(github.com\/)?/, '')
	var lua = `{ '${repo}' `
	if (plugin.file) {
		lua += `, file = '${plugin.file}' `
	}
	if (theme) {
		lua += `, theme = ${theme} `
	}
	lua += `},`
	navigator.clipboard.writeText(lua);
	button.textContent = 'copied'
	setTimeout(() => button.textContent = 'copy', 1000)
}

// search for plugins and themes
function search() {
	let query = get('search').value.toLowerCase()
	let shown = 0
	for (let item of get('plugins').children) {
		item.hidden = !item.innerText.toLowerCase().includes(query)
		if (!item.hidden) shown++
	}
	get('empty').hidden = shown > 0
	get('count').textContent = `${shown} ${plugin_type === 'theme' ? 'themes' : 'plugins'}`
}

function set_plugin_type(type) {
	localStorage.setItem('plugin-type', type)
	plugin_type = type
	set('plugins', type === 'theme' ? themes_el : plugins_el)
	get('show-plugins').setAttribute('aria-pressed', type === 'plugin')
	get('show-themes').setAttribute('aria-pressed', type === 'theme')
	get('search').value = ''
	search()
}

let plugin_type
set_plugin_type(localStorage.getItem('plugin-type') ?? 'plugin')

get('search').addEventListener('input', search)


// focus search with /
document.addEventListener('keydown', (e) => {
	if (e.key === '/' && document.activeElement !== get('search')) {
		e.preventDefault()
		get('search').focus()
	}
})

// light / dark toggle, defaults to the system setting
function set_color_theme(mode) {
	document.documentElement.dataset.theme = mode
	get('theme-toggle').textContent = mode === 'dark' ? 'light' : 'dark'
	try { localStorage.setItem('color-theme', mode) } catch { }
}

get('theme-toggle').addEventListener('click', () => {
	set_color_theme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
})

set_color_theme(localStorage.getItem('color-theme')
	?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
