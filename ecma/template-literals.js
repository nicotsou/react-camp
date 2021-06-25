

const name = 'Jon';

const greeting = 'Hello ' + name + ' how are you?';

const getName = () => 'Jon';

const betterGreeting = `Hello ${getName()} today is ${Date.now()}`;

const multiLineStrings = `
  <p>this is a text</p>
  <p>and this is some other text</p>
`;

console.log(betterGreeting);
console.log(multiLineStrings);
