const replaceValue = (object, key, newValue) => {
  if (object[key]) {
    return {
      ...object,
      [key]: newValue
    }
  }
}

module.exports = {
  replaceValue,
}