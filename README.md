# js-functional-helpers

A growing library of functional javascript helpers.

## To install:

```npm install js-functional-helpers```

## Usage:
```
const helpers = require('js-functional-helpers');
```
## Examples 

### Working with arrays
Pop an element off of the end of an array (returns a new, non-mutated array):
```javascript
helpers.array.immutablePop([1, 2, 3]);
// returns [1, 2]
```
Push an new array element (returns a new, non-mutated array):
```javascript
helpers.array.immutablePushElement([1, 2, 3], 4);
// returns [1, 2, 3, 4]
```
Replace an array element at a given index (returns a new, non-mutated array):
```javascript
helpers.array.immutableReplaceElement([1, 2, 3], 1, 'hello');
// returns [1, 'hello', 3]
```
Reverse an array (returns a new, non-mutated array):
```javascript
helpers.array.immutableReverse([1, 2, 3]);
// returns [3, 2, 1]
```
### Working with objects
Remove a key from an object (returns a new, non-mutated object):
```javascript
helpers.object.immutableRemoveKey({ id: '1', age: 200}, 'age');
// returns { id: '1' }
```
Replace the value of a given key within an object (returns a new, non-mutated object):
```javascript
helpers.object.immutableReplaceKeyValue({ id: '1', age: 200}, 'age', 700);
// returns { id: '1', age: 700 }
```

