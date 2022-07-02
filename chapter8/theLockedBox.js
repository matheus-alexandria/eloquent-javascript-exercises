class MultiplyError extends Error {}

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: ['2', 3],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(process) {
  let locketState = box.locked;
  box.unlock();

  try {
    process(box.content);
  } finally {
    if (locketState) box.lock();
  }
}

let multiply = (array) => {
  array.forEach(e => {
    if (typeof e == 'number') {
      console.log(e * 2);
      return;
    }

    throw new Error('Array with invalid argument');
  });
}

try {
  withBoxUnlocked(multiply);
} catch (err) {
  console.log(err.message);
} finally {
  console.log(box.locked);
}