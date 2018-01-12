const test = require('tape');
const { immutablePushElement } = require('../../../src/types/array');

test('array.immutablePushElement: append a new element to the end of an array', (t) => {
  const array = [1, 2, 3];
  const newElement = 4;
  const output = immutablePushElement(array, 4);

  t.deepEqual(output[output.length-1], newElement);

  t.end();
});