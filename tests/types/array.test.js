const test = require('tape');
const helpers = require('../../src/types/array');

test('array.immutablePop: returns an array copy with the last element removed', (t) => {
  const array = [1, 2, 3];
  const output = helpers.immutablePop(array);
  t.equal(output.indexOf(array[array.length - 1]), -1);

  t.end();
});

test('array.immutablePushElement: returns an array copy with a new element added to the end', (t) => {
  const array = [1, 2, 3];
  const newElement = 4;
  const output = helpers.immutablePushElement(array, 4);

  t.deepEqual(output[output.length-1], newElement);

  t.end();
});

test('array.immutableReplaceElement: returns an array copy with the element at the specified index replaced', (t) => {
  const array = [1, 2, 3];
  const newValue = 'hello';
  const index = array.indexOf(1);
  const output = helpers.immutableReplaceElement(array, index, newValue);

  t.equal(output.indexOf(newValue), index);

  t.end();
});

test('array.immutableReverse: reverse the given array', (t) => {
  const array = [1, 2, 3];
  const actualOutput = helpers.immutableReverse(array);
  const expectedOutput = [3, 2, 1];

  t.deepEqual(actualOutput, expectedOutput);

  t.end();
});