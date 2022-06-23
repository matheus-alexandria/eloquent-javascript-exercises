class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  minus(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}


const vector1 = new Vector(10, 20);
const vector2 = new Vector(10, 15);

console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(Math.round(vector1.length));