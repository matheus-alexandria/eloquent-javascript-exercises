class Group {
  constructor() {
    this.elements = [];
  }

  add(elem) {
    if(!this.elements.includes(elem)) {
      this.elements.push(elem);
    } else {
      console.log(`Element ${elem} is duplicated`);
    }
  }

  delete(elem) {
    const index = this.elements.indexOf(elem);

    if(index !== -1) {
      this.elements = this.elements.filter(e => e !== this.elements[index]);
    }
  }

  has(elem) {
    return this.elements.includes(elem);
  }

  static from(iter) {
    const group = new Group();
    for (let elem of iter) {
      group.add(elem);
    }

    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.pos = 0;
    this.group = group;
  }

  next() {
    if (this.group.elements.length === this.pos) return { done: true };

    let value = this.group.elements[this.pos];
    this.pos++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  console.log(this);
  return new GroupIterator(this);
}

const group = new Group();
group.add(20);
group.add(10);
group.add(15);

for (elem of group) {
  console.log(elem);
}