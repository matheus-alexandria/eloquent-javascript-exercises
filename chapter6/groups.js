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

const group = new Group();

group.add(20);
group.add(10);
group.add(15);
group.add(20);
console.log(group);

group.delete(20);
group.delete(40);
console.log(group);

console.log(group.has(10));
console.log(group.has(40));

const duplicated = [1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8];
const unique = Group.from(duplicated);
console.log(unique);