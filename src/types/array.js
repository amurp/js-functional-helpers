const pushElement = (array, newElement) => {
  return [ ...array, newElement];
}

const replaceElement = (array, index, newElement) => {
  return [
    ...array.slice(0, index),
    newElement,
    ...array.slice(index + 1)
  ];
};

const reverse = (array) => {
  return [...array].reverse();
};

module.exports = {
  pushElement,  
  replaceElement,
  reverse,
};