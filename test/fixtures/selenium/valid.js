'use strict';

// Global: $
// (not jQuery)
const el = $( '.el' );
// Global: $$
const menu = $$( '#menu' );

// Global: browser
browser.execute( () => {
	// Client code
} );

// Global: driver
driver.wait();

// Global: multiremotebrowser
multiremotebrowser.execute();

// Global: expect
expect( true );
