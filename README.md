# dmd-kramdown-plugin

This is a simple dmd plugin that fixes a few kramdown-specific formatting issues
in [dmd](https://github.com/jsdoc2md/dmd).

To use this plugin in your project, first install it as a devDependency:

```
$ npm install dmd-kramdown-plugin --save-dev
```

Then pass the plug-in name to `jsdoc2md` or `dmd`:

```
$ jsdoc2md --plugin dmd-kramdown-plugin mySrcFiles/*.js
```
