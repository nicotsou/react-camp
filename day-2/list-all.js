
class Entity {
  constructor(id) {
    this.id = id;
  }

  getName() {
    return `Entity #${this.id}`;
  }
}

class Unit extends Entity {
  constructor(id, hp) {
    super(id);
    this.hp = hp;
  }

  isAlive() {
    return this.hp > 0;
  }
}

const rover = new Unit(1, 100);

// 1. update the code so that rovers
// return 'Rover #N' for getName()

// 2. Write a function that prints the list of all
// functions in prototype chain  (only functions, not
// other types of properties