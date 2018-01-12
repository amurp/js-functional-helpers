const immutablePushElement = (array, newElement) => {
  return [ ...array, newElement];
};

const immutableReplaceElement = (array, index, newElement) => {
  return [
    ...array.slice(0, index),
    newElement,
    ...array.slice(index + 1)
  ];
};

const immutableReverse = (array) => {
  return [...array].reverse();
};

module.exports = {
  immutablePushElement,  
  immutableReplaceElement,
  immutableReverse,
};