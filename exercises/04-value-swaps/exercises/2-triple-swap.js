'use strict';

let a = 3;
let b = 1;
let c = 2;
let temp = null;

temp = a -c ;
a = temp;
b = temp +1;
c = temp + 2



// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 1;
console.assert(isTrue4, 'Test 4');

