const arr = ['12', '15', '30', '45'];

// using arrow functions to filter
const res = arr
  .map((n) => parseInt(n))   // converted to numbers
  .filter((n) => n%2)
  .reduce((a, b) => a + b)

console.log(res);

// functions that return functions
const x = () => () => () => 5;

const f = (a) => (b) => a + b;
console.log(f(5)(7));
