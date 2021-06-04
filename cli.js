#!/usr/bin/env node
import fs from 'node:fs';
import getStdin from 'get-stdin';
import meow from 'meow';
import {transformSync} from '@babel/core';
import stripDebug from 'strip-debug';

const cli = meow(`
	Usage
	  $ strip-debug <input-file> > <output-file>
	  $ cat <input-file> | strip-debug > <output-file>

	Examples
	  $ strip-debug src/app.js > dist/app.js
	  $ cat src/app.js | strip-debug > dist/app.js
`, {
	importMeta: import.meta
});

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Input file required');
	process.exit(1);
}

const transform = code => transformSync(code, {plugins: [stripDebug]}).code;

if (input) {
	process.stdout.write(transform(fs.readFileSync(cli.input[0], 'utf8')));
} else {
	(async () => {
		const code = transform(await getStdin());
		process.stdout.write(code);
	})();
}
