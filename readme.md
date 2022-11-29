# strip-debug-cli

> Strip `console`, `alert`, and `debugger` statements from JavaScript code

Useful for making sure you didn't leave any logging in production code.

## Install

```sh
npm install --global strip-debug-cli
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
