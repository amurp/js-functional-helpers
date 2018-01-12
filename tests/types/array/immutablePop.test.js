const test = require('tape');
const { immutablePop } = require('../../../src/types/array');

test('array.immutablePop: returns an array copy with the last element removed', (t) => {
  const array = [1, 2, 3];
  const output = immutablePop(array);
  t.equal(output.indexOf(array[array.length - 1]), -1);

  t.end();
});