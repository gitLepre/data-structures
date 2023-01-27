export class Stack<T> {
  table: T[];
  get top() {
    return this.table.length - 1;
  }
  get size() {
    return this._size;
  }

  private _size: number;

  constructor(size: number) {
    if (size < 1) throw new Error("The size must be a positive number");
    this.table = [];
    this._size = size;
  }

  isEmpty() {
    return this.top < 0;
  }

  isFull() {
    return this.top === this._size - 1;
  }

  push(x: T) {
    if (this.isFull()) throw new Error("The stack is full");
    this.table.push(x);
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.table.splice(this.top, 1)[0];
  }

  next() {
    return this.table[this.top];
  }
}
