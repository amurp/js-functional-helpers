const test = require('tape');
const { immutableRemoveKey } = require('../../../src/types/object');

test('object.immutableRemoveKey: removes a given key from an object', (t) => {
  const object = {
    country: 'US',
    planet: 'Earth'
  };
  const keyToRemove = 'country';

  const output = immutableRemoveKey(object, keyToRemove);
  
  t.equal(typeof output[keyToRemove], 'undefined');

  t.end();
});