const replaceElement = (array, index, newValue) => {
  return [
    ...array.slice(0, index),
    newValue,
    ...array.slice(index + 1, array.length - 1)
  ];
}

const reverse = (array) => {
  return [...array].reverse();
}

module.exports = {
  replaceElement,
  reverse,
}