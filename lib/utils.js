'use strict';

/**
 * Convert an eslintrc config of a plugin that has no flat version.
 *
 * Only "extends" of configs in the same plugin, "plugins" and "rules" are supported.
 *
 * @param {string} pluginName Plugin name, e.g. 'no-jquery'
 * @param {Object} plugin Plugin object
 * @param {string} configName Config name, e.g. 'recommended'
 * @return {Object} Flat config object
 */
function legacyPluginConfig( pluginName, plugin, configName ) {
	const rules = {};
	const add = ( name ) => {
		const config = plugin.configs[ name ];
		const unsupported = Object.keys( config )
			.filter( ( key ) => ![ 'extends', 'plugins', 'rules' ].includes( key ) );
		if ( unsupported.length ) {
			throw new Error( `${ pluginName }/${ name }: Unsupported keys: ${ unsupported.join( ', ' ) }` );
		}
		[].concat( config.extends || [] ).forEach( ( extend ) => {
			const prefix = `plugin:${ pluginName }/`;
			if ( !extend.startsWith( prefix ) ) {
				throw new Error( `${ pluginName }/${ name }: Unsupported extends: ${ extend }` );
			}
			add( extend.slice( prefix.length ) );
		} );
		Object.assign( rules, config.rules );
	};
	add( configName );
	return {
		name: `${ pluginName }/${ configName }`,
		plugins: { [ pluginName ]: plugin },
		rules
	};
}

/**
 * Give a name to each config object of a plugin config that has no name.
 *
 * @param {string} name Name
 * @param {Object|Object[]} config Flat config object or array
 * @return {Object[]} Flat config objects
 */
function named( name, config ) {
	return [].concat( config ).map( ( object, i, all ) => ( {
		name: all.length > 1 ? `${ name }[${ i }]` : name,
		...object
	} ) );
}

/**
 * Get the rules of the config objects with a given name.
 *
 * @param {Object[]} configs Flat config objects
 * @param {string} name Config object name, e.g. 'wikimedia/common'
 * @return {Object} Rules
 */
function getRules( configs, name ) {
	return Object.assign( {}, ...configs
		.filter( ( config ) => config.name === name )
		.map( ( config ) => config.rules ) );
}

module.exports = {
	legacyPluginConfig,
	named,
	getRules
};
