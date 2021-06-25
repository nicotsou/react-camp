
const coords = [[1, 2], [3]];
const [[aX, aY], [bX, bY = 0]] = coords;

const fibbonaci = [1, 2, 3, 5, 8, 13];
const [first, ...others] = fibbonaci;

console.log('hello', first, others);

