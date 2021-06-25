// Basic example - spread syntax
const arr = [1, 2, 3];
console.log(Math.max(...arr));

// combining arrays
const arr2 = [1, 3, ...arr, 5, 6];

const shallowCopy = [...arr];
const newArrayWithOneMoreValue = [...arr, 42];
