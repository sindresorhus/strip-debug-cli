#!/usr/bin/env node
'use strict';
const fs = require('fs');
const getStdin = require('get-stdin');
const meow = require('meow');
const stripDebug = require('strip-debug');

const cli = meow(`
	Usage
	  $ strip-debug <input-file> > <output-file>
	  $ cat <input-file> | strip-debug > <output-file>

	Examples
	  $ strip-debug src/app.js > dist/app.js
	  $ cat src/app.js | strip-debug > dist/app.js
`);

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Input file required');
	process.exit(1);
}

if (input) {
	process.stdout.write(stripDebug(fs.readFileSync(cli.input[0], 'utf8')).toString());
} else {
	getStdin().then(data => {
		process.stdout.write(stripDebug(data).toString());
	});
}
