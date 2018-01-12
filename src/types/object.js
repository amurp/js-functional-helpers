const immutableRemoveKey = (object, keyToRemove) => {
  const keys = Object.keys(object);
  const newObject = {};
  keys.forEach(key => {
    if (key !== keyToRemove) {
      newObject[key] = object[key]
    }
  })
  return newObject;
};

const immutableReplaceKeyValue = (object, key, newValue) => {
  return {
    ...object,
    [key]: newValue
  }
}

module.exports = {
  immutableRemoveKey,
  immutableReplaceKeyValue,
}