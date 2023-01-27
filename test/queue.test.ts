import { expect } from "chai";
import { Queue } from "../notebooks/structures/Queue";

const SIZE = 4;
const queue = new Queue<number>(SIZE);

describe("Queue", () => {
  it("correctly initialize the queue", () => {
    expect(queue.size).to.be.equal(SIZE);
    expect(queue.table.length).to.be.equal(SIZE);
  });

  it("enqueue a value", () => {
    expect(queue.isEmpty()).to.be.true;
    queue.enqueue(3);
    expect(queue.isEmpty()).to.be.false;
  });

  it("dequeue a value", () => {
    expect(queue.isEmpty()).to.be.false;
    queue.dequeue();
    expect(queue.isEmpty()).to.be.true;
  });

  it("works with the tacchella test", () => {
    queue.enqueue(1);
    queue.dequeue();

    expect(queue.isEmpty()).to.be.true;

    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.isFull()).to.be.true;

    expect(queue.enqueue.bind(queue, 5)).to.throw("Queue is full");

    queue.dequeue();
    queue.dequeue();

    const x = queue.dequeue();
    expect(x).to.equal(4);

    expect(queue.dequeue.bind(queue)).to.throw("Queue is empty");
  });
});
