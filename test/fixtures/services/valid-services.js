// Rule: strict
// Rule: lines-around-directive

'use strict';

// Rule: sort-vars
// Rule: one-var-declaration-per-line
// Rule: one-var
// Rule: prefer-const
const tagName = 'SPAN';

// Rule: object-property-newline
// Rule: object-shorthand
const nodes = [{ tagName: 'FOO' },{ tagName: 'DIV' }, { tagName }];

// Rule: array-callback-return
// Rule: arrow-spacing
Array.from(nodes, (node) => {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});

const objectStore = { a: 1 };

// Rule: accessor-pairs
// Rule: object-shorthand
Object.defineProperty(objectStore, 'value', {
    set(value) {
        function pointlessIndirection(object, val) { object.hiddenValue = val; }
        // Rule: consistent-this
        pointlessIndirection(this, value);
    },
    get() {
        return this.hiddenValue;
    }
});

objectStore.setValue({ b:1 });

// Rule: func-style
function negate(input) {
    // Rule: block-scoped-var
    let flag;

    if (!input) {
        flag = true;
    }

    return flag;
}

negate(objectStore);

// Rule: generator-star-spacing
function *FibGenerator() {
    yield "1";
    yield "1";
    yield "2";
    yield "3";
    yield "5";
    yield "8";
    yield "11";
}

objectStore.push(FibGenerator);

// Rule: default-case
switch (objectStore.length) {
    case 3:
        objectStore.pop();
        break;
    default:
        // Rule: radix
        objectStore.push({ 'hello': parseInt('2021', 3) });
}

for (const variable in objectStore) {
    // Rule: guard-for-in
    // Rule: no-prototype-bultins
    if (Object.prototype.hasOwnProperty.call(objectStore,variable)) {
        // Hello.
    }
}


// Rule: handle-callback-err
// Rule: jsx-quotes
// Rule: max-nested-callbacks
// Rule: multiline-ternary
// Rule: object-property-newline
// Rule: operator-assignment
// Rule: prefer-arrow-callback
// Rule: prefer-template
// Rule: rest-spread-spacing
// Rule: sort-imports
// Rule: symbol-description
// Rule: template-curly-spacing
// Rule: yield-star-spacing
// Rule: jsdoc/check-param-names
// Rule: jsdoc/check-tag-names
// Rule: jsdoc/check-types
// Rule: jsdoc/newline-after-description
// Rule: jsdoc/require-param-type
// Rule: jsdoc/require-returns-type
