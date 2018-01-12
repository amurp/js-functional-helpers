const test = require('tape');
const helpers = require('../../src/types/object');

test('object.immutableRemoveKey: removes a given key from an object', (t) => {
  const object = {
    country: 'US',
    planet: 'Earth'
  };
  const keyToRemove = 'country';

  const output = helpers.immutableRemoveKey(object, keyToRemove);
  
  t.equal(typeof output[keyToRemove], 'undefined');

  t.end();
});

test('object.immutableReplaceKeyValue: replace the value at a given object key', (t) => {
  const object = { country: 'US', planet: 'Earth' };
  const key = 'country';
  const newValue = 'Mexico';

  const output = helpers.immutableReplaceKeyValue(object, key, newValue);

  t.equal(output[key], newValue);

  t.end();
});