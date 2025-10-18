import clientCommon from '../client/common.js';
import es2022 from '../language/es2022.js';
import jquery from '../jquery.js';
import mediawiki from './common.js';
import qunit from '../qunit.js';

export default [
	...clientCommon,
	...es2022,
	...jquery,
	...mediawiki,
	...qunit,
	{
		name: 'wikimedia/mediawiki/qunit',
		languageOptions: {
			globals: {
				sinon: 'readonly'
			}
		},
		rules: {
			'compat/compat': [ 'error', 'last 2 chrome versions, last 2 firefox versions, last 2 safari versions' ],
			'max-len': 'off',
			'no-jquery/no-global-selector': 'off',
			'no-jquery/no-parse-html-literal': 'off'
		}
	}
];

