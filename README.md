construx
========

Lead Maintainer: [Matt Edelman](https://github.com/grawk)  

[![Build Status](https://travis-ci.org/krakenjs/construx.svg?branch=master)](https://travis-ci.org/krakenjs/construx)  
[![NPM version](https://badge.fury.io/js/construx.png)](http://badge.fury.io/js/construx)  

Compile-on-the-fly and other development tools for use when building [express](http://expressjs.com/) applications.

## Middleware compiler

The middleware compiler builds your dependencies as they are requested, allowing you to run your express application as-is and not have to set up a watch task.


### General Usage

```js
var app = require('express')(),
    construx = require('construx');

app.use(construx(/* src, dest [, config] */));
```

### Parameters

`src` - The directory of your source files  
`dest` - The destination directory for the compiled files  
`config` - Optional. An object of compilers to enable  



### Configuration

To enable a plugin, add it to the config object as follows:

```json
{
    "less": {
        "module": "construx-less",
        "files": "/css/**/*.css",
        "ext": "less"
    }
}
```

_Note: above you also would have the `construx-less` construx plugin installed in your project_

### KrakenJS Usage

KrakenJS uses [confit](https://github.com/krakenjs/confit) and [meddleware](https://github.com/krakenjs/meddleware) to configure and manage middleware registration. To use `construx` as a
krakenjs development tool, add the following to your application's `middleware` section in `development.json`

```js
"construx": {
    "enabled": true,
    "priority": 35,
    "module": {
        "name": "construx",
        "arguments": [
            "path:./public",
            "path:./.build",
            {
                "css": {
                    "module": "construx-less",
                    "files": "/css/**/*.css"
                },
                "copier": {
                    "module": "construx-copier",
                    "files": "**/*"
                }
            }
        ]
    }
}
```

This will engage the `construx` middleware only for the development environment. Note that the two configured plugins are as
an example and your actual plugin set will depend upon your application.
### Existing plugins

Please rely upon the individual plugins' README for configuration and other requirements information.

* [construx-copier](https://github.com/krakenjs/construx-copier/blob/master/README.md) - copier for static assets
* [construx-dust](https://github.com/krakenjs/construx-dust/blob/master/README.md) - DustJS template compiler
* [construx-less](https://github.com/krakenjs/construx-less/blob/master/README.md) - Less CSS compiler
* [construx-sass](https://github.com/krakenjs/construx-sass/blob/master/README.md) - Sass CSS compiler
* [construx-stylus](https://github.com/krakenjs/construx-stylus/blob/master/README.md) - TBD

### Author a plugin

We have created a template for construx plugins: [construx-star](https://github.com/krakenjs/construx-star). The template
includes the basic pattern of a plugin, preferred unit test/coverage modules, preferred `npm run` aliases, and license (Apache 2.0).
You can create a blank github repository and import `construx-star` as a starting point.

* If you are developing a plugin as a 3rd party (i.e. not as a PayPal employee), please be sure to remove the PayPal specific license block
at the top of each JavaScript file.
* Please use the naming convention `construx-<wrapped compiler>`

If you author and publish a `construx` plugin, please let us know so we can add it to our [existing plugins](#existing-plugins) list.

