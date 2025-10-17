import jsdocConfig from './jsdoc.js';

export default [
	...jsdocConfig,
	{
		name: 'wikimedia/jsduck',
		settings: {
			jsdoc: {
				tagNamePreference: {
					alias: 'alternateClassName',
					mixes: 'mixins',
					typedef: 'type'
				}
			}
		},
		rules: {
			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-check': 'off'
		}
	}
];

