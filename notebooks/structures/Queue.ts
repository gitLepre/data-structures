export class Queue<T> {
  table: T[];
  _head: number = 0;
  _tail: number = 0;
  size: number;

  constructor(n: number) {
    this.table = new Array(n);
    this.size = n;
  }

  isEmpty() {
    return this._head === this._tail;
  }

  isFull() {
    return (this._tail + 1) % this.size == this._head;
  }

  head() {
    return this.table[this._head];
  }

  tail() {
    return this.table[this._tail];
  }

  enqueue(x: T) {
    if (this.isFull()) throw new Error("Queue is full");
    this.table[this._tail] = x;
    this._tail = (this._tail + 1) % this.size;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    const x = this.table[this._head];
    this.table[this._head] = undefined;
    this._head = (this._head + 1) % this.size;
    return x;
  }
}
