const test = require('tape');
const { removeKey } = require('../../../src/types/object');

test('object.removeKey: removes a given key from an object', (t) => {
  const object = {
    country: 'US',
    planet: 'Earth'
  };
  const keyToRemove = 'country';

  const output = removeKey(object, keyToRemove);
  
  t.equal(typeof output[keyToRemove], 'undefined');

  t.end();
});