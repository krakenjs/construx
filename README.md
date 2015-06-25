construx
========

Lead Maintainer: [Matt Edelman](https://github.com/grawk)  

[![Build Status](https://travis-ci.org/krakenjs/construx.svg?branch=master)](https://travis-ci.org/krakenjs/construx)  
[![NPM version](https://badge.fury.io/js/construx.png)](http://badge.fury.io/js/construx)  

Compile-on-the-fly and other development tools for use when building [express](http://expressjs.com/) applications.

## Middleware compiler

The middleware compiler builds your dependencies as they are requested, allowing you to run your express application as-is and not have to set up a watch task.


### Usage

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

### Author a plugin

Create a module with the following format and add it to your configuration:

```js
module.exports = function (options) {
    return function (data, args, callback) {
        // Compile the data
    };
};
```

If you decide to publish your plugin for others to use, please consider using the naming convention `construx-<wrapped functionality>`

### Existing plugins

TBD
