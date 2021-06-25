
const animal = {
  say() {
    console.log(`${this.name} says ${this.voice}`)
  }
}

const dog = {
  name: 'Dog',
  voice: 'woof',
};

function Mouse() {
  this.name = 'Mouse';
  this.voice = 'squeak';

}


Mouse.prototype = animal;


class Animal {

}

class Bird extends Animal {
  constructor() {
    super()
    this.name = 'Bird';
    this.voice = 'tweet';

    this.say = () => {

    }
  }

  say() {
    console.log(`${this.name} says ${this.voice}`)
  }
}

const mouse = new Mouse();
mouse.say();