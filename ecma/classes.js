
class Animal {
  voice = 'tweeet';

  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`${this.name} says ${this.voice}`);
  }
}

class Bird extends Animal {
  constructor() {
    super();
  }
}

const bird = new Animal('Birdey');
bird.say();