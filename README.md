[![view on npm](http://img.shields.io/npm/v/dmd-plugin-example.svg)](https://www.npmjs.org/package/dmd-plugin-example)
[![npm module downloads per month](http://img.shields.io/npm/dm/dmd-plugin-example.svg)](https://www.npmjs.org/package/dmd-plugin-example)
[![Dependency Status](https://david-dm.org/75lb/dmd-plugin-example.svg)](https://david-dm.org/75lb/dmd-plugin-example)

#dmd-plugin-example

This is a simple example demonstrating how to construt a dmd plugin. It adds a generated date to the bottom of your API docs.

To make your own plug-in, clone this project, edit and publish to npm. 

To use a plug-in in your project, first install it as a devDependency: 
```
$ npm install dmd-plugin-example --save-dev
```

Then pass the plug-in name to `jsdoc2md` or `dmd`:
```
$ jsdoc2md --plugin dmd-plugin-example lib/*.js 
```
