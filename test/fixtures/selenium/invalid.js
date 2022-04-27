'use strict';

describe( 'my feature', () => {
	it( 'should do something', async () => {
		await browser.url( '/' );
		// eslint-disable-next-line wdio/no-debug
		await browser.debug( '/' );
		// eslint-disable-next-line wdio/no-pause
		await browser.pause( 1000 );
		// eslint-disable-next-line wdio/await-expect
		expect( browser ).toHaveTitle( 'Foobar' );
	} );
} );
