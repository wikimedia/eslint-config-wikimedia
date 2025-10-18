import node from './node.js';
import es2022 from './language/es2022.js';

export default [
	...node,
	...es2022,
	{
		name: 'wikimedia/server',
		rules: {
			'es-x/no-hashbang': 'off'
		}
	}
];

