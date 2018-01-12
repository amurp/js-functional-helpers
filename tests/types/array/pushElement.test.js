const test = require('tape');
const { pushElement } = require('../../../src/types/array');

test('array.pushElement: append a new element to the end of an array', (t) => {
  const array = [1, 2, 3];
  const newElement = 4;
  const output = pushElement(array, 4);

  t.deepEqual(output[output.length-1], newElement);

  t.end();
});