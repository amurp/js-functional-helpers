const test = require('tape');
const { replaceKeyValue } = require('../../../src/types/object');

test('object.replaceKeyValue: replace the value at a given object key', (t) => {
  const object = { country: 'US', planet: 'Earth' };
  const key = 'country';
  const newValue = 'Mexico';

  const output = replaceKeyValue(object, key, newValue);

  t.equal(output[key], newValue);

  t.end();
});