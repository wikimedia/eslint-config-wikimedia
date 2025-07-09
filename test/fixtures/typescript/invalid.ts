// eslint-disable-next-line @typescript-eslint/array-type
const x: Array<string> = [ 'a', 'b' ];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
function test() {
	return;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const arrowFn = ( arg ): string => `test ${ arg }`;

switch ( x[ 0 ] ) {
// eslint-disable-next-line @stylistic/indent, indent
case 'a':
		break;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function foo(): void {}
foo();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Bar {
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	animalName: string; // No accessibility modifier

	// eslint-disable-next-line @stylistic/semi
	private readonly name: string

	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	public constructor() {
		// technically not empty, but useless
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Example {
	// eslint-disable-next-line @typescript-eslint/prefer-function-type
	(): string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface OverloadedExample {
	y( z: number ): void;
	// eslint-disable-next-line @typescript-eslint/unified-signatures
	y( z: string ): void;
}
// eslint-disable-next-line @stylistic/type-annotation-spacing, @typescript-eslint/no-unused-vars
function baz():void {
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const self = this;
	setTimeout( () => {
		self.doWork();
	} );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myObject: {
	// eslint-disable-next-line @stylistic/member-delimiter-style
	a: string,
	// eslint-disable-next-line @stylistic/member-delimiter-style
	b: string
} = {
	a: 'a',
	// eslint-disable-next-line comma-dangle
	b: 'b'
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
interface Foo {}
