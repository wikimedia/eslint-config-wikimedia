// Global: global
global.something = 'foo';

const { shallowMount } = require( '@vue/test-utils' );
const { CdxButton } = require( '@wikimedia/codex' );
const ButtonDemo = require( './ButtonDemo.vue' );

describe( 'Basic usage', () => {
	it( 'renders a Codex Button component', () => {
		const wrapper = shallowMount( ButtonDemo );
		expect( wrapper.findComponent( CdxButton ).exists() ).toBe( true );
	} );
	it.skip( 'skipped', () => {
		// Off: jest/no-disabled-tests
		expect( true ).toBe( true );
	} );
} );

// Off: jest/no-deprecated-functions
// This rule relies on detecting a local Jest installation and version.
// Since we aren't making Jest a dependency of this package, we can't
// enable the rule by default, as it causes a fatal error. We also can't
// set settings.jest.version as that would override the detected version.
