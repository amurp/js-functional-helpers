const test = require('tape');
const { immutableReverse } = require('../../../src/types/array');

test('array.immutableReverse: reverse the given array', (t) => {
  const array = [1, 2, 3];
  const actualOutput = immutableReverse(array);
  const expectedOutput = [3, 2, 1];

  t.deepEqual(actualOutput, expectedOutput);

  t.end();
});