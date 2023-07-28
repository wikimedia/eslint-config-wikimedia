// const { shallowMount } = require( '@vue/test-utils' );
// const { CdxButton } = require( '@wikimedia/codex' );
const ButtonDemo = require( './ButtonDemo.vue' );

// eslint-disable-next-line jest/no-focused-tests
describe.only( 'Description', () => {
	// eslint-disable-next-line jest/expect-expect
	it( 'nothing', () => {
	} );
} );

// eslint-disable-next-line jest/no-identical-title, jest/valid-describe-callback
describe( 'Description', ( cb ) => {
	// eslint-disable-next-line jest/no-done-callback, jest/no-test-prefixes
	xit( 'test', ( done ) => {
		if ( ButtonDemo ) {
			// eslint-disable-next-line jest/no-alias-methods, jest/no-conditional-expect
			expect( ButtonDemo ).toReturn();
		}
		const errorThrowingFunction = ( () => {} );
		const interpolated = '';
		expect( errorThrowingFunction ).toThrowErrorMatchingInlineSnapshot(
			// eslint-disable-next-line jest/no-interpolation-in-snapshots
			`${ interpolated }`
		);
		// eslint-disable-next-line no-undef, jest/no-jasmine-globals
		spyOn( ButtonDemo, 'object' );
		// eslint-disable-next-line jest/valid-expect
		expect( true );

		done();
	} );
	// eslint-disable-next-line jest/valid-title
	it( '', () => {
		// eslint-disable-next-line jest/valid-expect-in-promise
		ButtonDemo.getRequest().then( ( thing ) => {
			expect( thing ).toHaveProperty( 'foo', 'bar' );
		} );
	} );
	cb();
} );

// eslint-disable-next-line jest/no-mocks-import
require( './__mocks__/index' );

// eslint-disable-next-line jest/no-standalone-expect
expect( ButtonDemo ).toBe( true );

// eslint-disable-next-line jest/no-export
module.exports = {
	something: 'that should be moved to a non-test file'
};

// eslint-disable-next-line jest/no-commented-out-tests
// describe( 'Commented out test', () => {
// } );
