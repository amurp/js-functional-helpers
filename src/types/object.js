const removeKey = (object, keyToRemove) => {
  const keys = Object.keys(object);
  const newObject = {};
  keys.forEach(key => {
    if (key !== keyToRemove) {
      newObject[key] = object[key]
    }
  })
  return newObject;
};

const replaceKeyValue = (object, key, newValue) => {
  return {
    ...object,
    [key]: newValue
  }
}

module.exports = {
  removeKey,
  replaceKeyValue,
}