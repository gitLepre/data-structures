export class Node<T> {
  value: T | null;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(_value: T = null, _prev: Node<T> = null, _next: Node<T> = null) {
    this.value = _value;
    this.prev = _prev;
    this.next = _next;
  }
}

export class List<T> {
  head: Node<T>;
  tail: Node<T>;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    return this.tail ? this.tail.value : null;
  }

  insertFront(x: T) {
    if (x === null) throw Error("Invalid entry");
    let node: Node<T> = new Node(x);
    node.next = this.head;
    node.prev = null;

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      this.head = node;
    }
  }

  insertBack(x: T) {
    if (x === null) throw Error("Invalid entry");
    let node: Node<T> = new Node(x);
    node.next = null;
    node.prev = this.tail;
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  deleteFront() {
    if (this.head === null) throw new Error("List is empty");
    const val = this.head.value;
    this.deleteHelper(this.head);
    return val;
  }

  deleteBack() {
    if (this.tail === null) throw new Error("List is empty");
    const val = this.tail.value;
    this.deleteHelper(this.tail);
    return val;
  }

  deleteItem(x: T) {
    if (x === null) throw Error("Invalid entry");
    let node = this.search(x);
    if (node === null) throw new Error("Item not found");
    const val = node.value;
    this.deleteHelper(node);
    return val;
  }

  private deleteHelper(node: Node<T>) {
    // rimpiazzo il next dell'eventuale nodo precedente
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    // rimpiazzo il prev dell'eventuale nodo successivo
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  toArray() {
    let node = this.head;
    const res: T[] = [];
    while (node !== null) {
      res.push(node.value);
      node = node.next;
    }
    return res;
  }

  search(x: T) {
    let node = this.head;
    while (node !== null && node.value !== x) {
      node = node.next;
    }
    return node;
  }
}
