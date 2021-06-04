import test from 'ava';
import execa from 'execa';
import tempWrite from 'temp-write';

const fixture = 'const foo = () => { return 1; console.log(\'Yo\') };';
const fixtureStripped = 'const foo = () => {\n  return 1;\n  void 0;\n};';

test('main', async t => {
	const {stdout} = await execa('./cli.js', [tempWrite.sync(fixture)]);
	t.is(stdout, fixtureStripped);
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: fixture});
	t.is(stdout, fixtureStripped);
});
