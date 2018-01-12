const test = require('tape');
const { replaceElement } = require('../../../src/types/array');

const array = [1, 2, 3];
const newValue = 'hello';

test('array.replaceElement: replace first element', (t) => {
  const index = array.indexOf(1);
  const output = replaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});

test('array.replaceElement: replace last element', (t) => {
  const index = array.indexOf(3);
  const output = replaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});

test('array.replaceElement: replace interior element', (t) => {
  const index = array.indexOf(2);
  const output = replaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});
