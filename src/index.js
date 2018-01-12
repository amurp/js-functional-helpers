const arrayFunctions = require('./types/array');
const objectFunctions = require('./types/object');

module.exports = {
  array: { ...arrayFunctions },
  object: { ...objectFunctions },
};