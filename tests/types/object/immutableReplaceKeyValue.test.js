const test = require('tape');
const { immutableReplaceKeyValue } = require('../../../src/types/object');

test('object.immutableReplaceKeyValue: replace the value at a given object key', (t) => {
  const object = { country: 'US', planet: 'Earth' };
  const key = 'country';
  const newValue = 'Mexico';

  const output = immutableReplaceKeyValue(object, key, newValue);

  t.equal(output[key], newValue);

  t.end();
});