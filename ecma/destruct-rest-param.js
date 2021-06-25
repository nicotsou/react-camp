
const dict = {
  pass: 'Secret',
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const { pass, ...cleanObject } = dict;
console.log(cleanObject);

