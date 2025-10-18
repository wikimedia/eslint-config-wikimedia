import server from './server.js';
import mocha from './mocha.js';
import pluginWdio from 'eslint-plugin-wdio';

export default [
	...server,
	...mocha,
	{
		name: 'wikimedia/selenium',
		...pluginWdio.configs['flat/recommended'],
		plugins: {
			wdio: pluginWdio
		}
	}
];

