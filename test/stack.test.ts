import { expect } from "chai";
import { Stack } from "../notebooks/structures/Stack";

const SIZE = 3;
const stack = new Stack<{ title: string; id: number }>(SIZE);

const exampleValues = [
  {
    title: "Harry Potter",
    id: 10234,
  },
  {
    title: "Geronimo Stilton",
    id: 10235,
  },
  {
    title: "Il signore degli Anelli",
    id: 10236,
  },
];

describe("Stack", () => {
  it("correctly initialize the stack", () => {
    expect(stack.size).to.be.equal(SIZE);
    expect(stack.isEmpty()).to.be.true;
    expect(stack.top).to.be.lessThan(0);
  });

  it("pushes a value", () => {
    stack.push(exampleValues[0]);
    expect(stack.top).to.be.equal(0);
    expect(stack.isEmpty()).to.be.false;
    expect(stack.next()).to.be.equal(exampleValues[0]);
  });

  it("fills the stack", () => {
    stack.push(exampleValues[1]);
    stack.push(exampleValues[2]);
    expect(stack.isFull()).to.be.true;
    expect(stack.next()).to.be.equal(exampleValues[2]);
    expect(stack.top).to.be.equal(SIZE - 1);
  });

  it("pops a value", () => {
    const popped = stack.pop();
    expect(popped).to.be.deep.equal(exampleValues[2]);
    expect(stack.next()).to.be.deep.equal(exampleValues[1]);
    expect(stack.isFull()).to.be.false;
  });
});
