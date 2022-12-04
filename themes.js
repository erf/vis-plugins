const fs = require('fs/promises');

async function parseThemes() {

    let data = await fs.readFile('themes.md', { encoding: 'utf8' });

    let lines = data.split(/\r?\n/)

    let themes = lines.map(line =>  {

		let matches = line.match(/(?<=\[).+?(?=\])|(?<=\()http[s]?.+?(?=\))/g)

		let name = matches[0]
		let url = matches[1]
		let path = url.match(/(?<=http[s]:\/\/(.+?\/){4}).+$/)[0]
		let image = matches[3]
		let repo = url.match(/^http[s]:\/\/(.+?\/){3}/)[0].replace('raw.githubusercontent', 'github')

		let theme = {
			name: name,
			repo: repo,
			path: path,
			image: image,
		}
		return theme
    })

	let content = JSON.stringify(themes, null, 2)
    await fs.writeFile('themes.json', content)
}
parseThemes();