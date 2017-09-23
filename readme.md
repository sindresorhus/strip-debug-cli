# strip-debug-cli [![Build Status](https://travis-ci.org/sindresorhus/strip-debug-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-debug-cli)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code

Useful for making sure you didn't leave any logging in production code.


## Install

```
$ npm install --global strip-debug-cli
```


## Usage

```
$ strip-debug --help

  Usage
    $ strip-debug <input-file> > <output-file>
    $ cat <input-file> | strip-debug > <output-file>

  Examples
    $ strip-debug src/app.js > dist/app.js
    $ cat src/app.js | strip-debug > dist/app.js
```


## Related

- [strip-debug](https://github.com/sindresorhus/strip-debug) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
