const test = require('tape');
const { reverse } = require('../../../src/types/array');

test('array.reverse: reverse the given array', (t) => {
  const array = [1, 2, 3];
  const actualOutput = reverse(array);
  const expectedOutput = [3, 2, 1];

  t.deepEqual(actualOutput, expectedOutput);

  t.end();
});