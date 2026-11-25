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
  "home": "https://...",  // optional link to homepage etc.
  "tags": ["linux"]       // optional tag to describe what it's for or platform etc.
}

// themes.js
{
  "name": "foo",
  "repo": "https://github.com/user/vis-foo",
  "file": "foo",
  "image": "https://.../screenshot.png"       // a link to a screenshot of code using theme
}
```

> The owner of this repository disclaims all liability regarding the use of third-party plugins on this site.
