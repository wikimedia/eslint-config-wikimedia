QUnit.module( 'example', () => {

	QUnit.test( 'test', ( assert ) => {
		// Off: max-len
		const data = { url: 'https://en.wikipedia.org/wiki/Cneoridium_dumosum_(Nuttall)_Hooker_F._Collected_March_26,_1960,_at_an_Elevation_of_about_1450_Meters_on_Cerro_Quemaz%C3%B3n,_15_Miles_South_of_Bah%C3%ADa_de_Los_Angeles,_Baja_California,_M%C3%A9xico,_Apparently_for_a_Southeastward_Range_Extension_of_Some_140_Miles', from: 'https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_records' };

		// Off: no-jquery/no-global-selector
		$( '#example .foo' );

		// Off: no-jquery/no-parse-html-literal
		$( '<div>contents</div>' );

		// Global: sinon
		sinon.stub( data, 'isValid', function () {
			return true;
		} );

		assert.true( data.save() );
	} );

} );
