
const person = {
  name: {
    first: 'Jon',
    last: 'Snow'
  },
  address: {
  //   continent: 'Westeros',
  //   city: 'Kings Landing'
  }
};

const { address: { continent = 'Westeros' } = {}} = person;

// const firstName = person.firstName;
// const lastName = person.lastName;

const { name : { first: firstName, last: lastName }, address = 'Westeros' } = person;
console.log(firstName, lastName, address);


// With function parameters

const arr = [
  { name: 'Alice', score: 70},
  { name: 'Bob', score: 65 }
];

const result = arr.filter(({ score }) => score > 50);
console.log(result);
