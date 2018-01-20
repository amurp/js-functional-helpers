const immutablePop = (array) => {
  return [...array].slice(0, -1)
};

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

const immutableSort = (array, compareFunction) => {
  if (compareFunction && typeof compareFunction === 'function') {
    return [...array].sort(compareFunction);
  }
  else {
    return [...array].sort();
  }
};

module.exports = {
  immutablePop,
  immutablePushElement,  
  immutableReplaceElement,
  immutableReverse,
  immutableSort,
};