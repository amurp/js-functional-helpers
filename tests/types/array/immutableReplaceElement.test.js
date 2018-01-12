const test = require('tape');
const { immutableReplaceElement } = require('../../../src/types/array');

const array = [1, 2, 3];
const newValue = 'hello';

test('array.immutableReplaceElement: replace first element', (t) => {
  const index = array.indexOf(1);
  const output = immutableReplaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});

test('array.immutableReplaceElement: replace last element', (t) => {
  const index = array.indexOf(3);
  const output = immutableReplaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});

test('array.immutableReplaceElement: replace interior element', (t) => {
  const index = array.indexOf(2);
  const output = immutableReplaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});
