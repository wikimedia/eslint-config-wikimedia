module.exports = function ( childRules, parentRules ) {
	// Only rules are preserved
	const mergedRules = { rules: {} };

	// Merge rules
	Object.assign( mergedRules.rules, parentRules.rules, childRules.rules );

	// For the specified keys, concatenate the lists
	[ 'no-restricted-syntax', 'no-restricted-properties' ].forEach( function ( key ) {
		if ( !mergedRules.rules[ key ] ) {
			// If both are unset, do nothing
			return;
		} else if ( !parentRules.rules[ key ] ) {
			// If either is unset, return the other
			mergedRules.rules[ key ] = childRules.rules[ key ];
		} else if ( !childRules.rules[ key ] ) {
			mergedRules.rules[ key ] = parentRules.rules[ key ];
		} else {
			// If both are set, merge. Assume mode is 'error'.
			mergedRules.rules[ key ] = [ 'error' ]
				.concat( ( parentRules.rules[ key ] || [] ).slice( 1 ) )
				.concat( ( childRules.rules[ key ] || [] ).slice( 1 ) );
		}
	} );
	return mergedRules;
};
