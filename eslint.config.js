import server from './configs/server.js';
import qunit from './configs/qunit.js';

export default [
	...server,
	{
		files: [ '**/*.js', '**/*.mjs' ],
		languageOptions: {
			sourceType: 'module'
		}
	},
	{
		files: [ 'test/**/*.js' ],
		...qunit[0]
	},
	{
		ignores: [ 'node_modules/**', '.git/**', 'test/fixtures/**' ]
	}
];

