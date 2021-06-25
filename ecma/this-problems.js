class Counter {
  constructor() {
    this.count = 0;
  }

  inc() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();

const f = counter.inc;

const otherObject = { count: 70 };
f.call(otherObject);

// setTimeout(counter.inc, 200);