
const x = 10;
const y = 20;

// simplified object creation
const point = { x, y };

const key = 'age';

const person = {
  name: 'Jon',
  greet() {
    return "I am Jon"
  },
  [key]: 40
}

console.log(person);