# vis-plugins

A collection of plugins and themes for the [vis text editor](https://github.com/martanne/vis).

Browse and search them on the [web page](https://erf.github.io/vis-plugins/).

You are welcome to contribute [plugins](plugins.js) / [themes](themes.js) or to improve the web page.

## Contributing

Add an entry to [plugins.js](plugins.js) or [themes.js](themes.js). The page sorts them by name, so they can go anywhere in the list.

```js
// plugins.js
{
  "name": "vis-foo",
  "repo": "https://github.com/user/vis-foo",
  "desc": "what it does",
  "file": "foo",   // optional, module to load if not the default
  "home": "https://..."  // optional, extra link
}

// themes.js
{
  "name": "foo",
  "repo": "https://github.com/user/vis-foo",
  "file": "foo",
  "image": "https://.../screenshot.png"
}
```

The copy button on the page puts a [vis-plug](https://github.com/erf/vis-plug) config line on the clipboard. Themes get `theme = true`.

> The owner of this repository disclaims all liability regarding the use of third-party plugins on this site.
