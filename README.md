# vis-plugins

A collection of plugins and themes for the [vis text editor](https://github.com/martanne/vis).

Browse and search them on the [web page](https://erf.github.io/vis-plugins/).

Use the copy button to get a config line for [vis-plug](https://github.com/erf/vis-plug).

You are welcome to contribute [plugins](plugins.js) / [themes](themes.js) or to improve the web page.

## Contributing

Please open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with your changes.

Add an entry to [plugins.js](plugins.js) or [themes.js](themes.js). The page sorts them by name, so they can go anywhere in the list.

```js
// plugins.js
{
  "name": "vis-foo",
  "repo": "https://github.com/user/vis-foo",
  "desc": "what it does",
  "file": "foo",          // optional module to load if not the default init.lua
  "home": "https://...",  // optional link to a homepage, docs etc.
  "tags": ["linux"]       // optional, see Tags below; clickable on the page
}

// themes.js
{
  "name": "foo",
  "repo": "https://github.com/user/vis-foo",
  "file": "foo",                         // module to load, usually the theme name
  "image": "https://.../screenshot.png", // a screenshot of code using the theme
  "home": "https://...",                 // optional, as above
  "tags": ["light"]                      // optional, as above
}
```

### Tags

Tags are optional. Use them for facts a user might want to know or filter on before installing, not to describe what the plugin does (that's what `desc` is for). Prefer these:

- platform: `linux`, `macos`, `windows`, `bsd`
- dependency: `dep:<name>`, e.g. `dep:luafilesystem`
- optional dependency: `opt-dep:<name>`
- themes: `light` or `dark`

Keep tags lowercase without spaces, and use at most a few per entry. Vague categories like `qol` or `util` don't say much and may be left out.

The copy button turns an entry into a vis-plug config line, for example:

```lua
{ 'user/vis-foo', file = 'foo' },   -- plugin
{ 'user/vis-foo', theme = 'foo' },  -- theme
```

> The owner of this repository disclaims all liability regarding the use of third-party plugins on this site.
