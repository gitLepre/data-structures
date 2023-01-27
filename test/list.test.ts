import { expect } from "chai";
import { Node, List } from "../notebooks/structures/List";

let list = new List<number>();

describe("List", () => {
  it("correctly initialize the queue", () => {
    expect(list.getHead()).to.be.null;
    expect(list.getTail()).to.be.null;
    expect(list.isEmpty()).to.be.true;
  });

  it("adds and removes front item", () => {
    expect(list.deleteFront.bind(list)).to.throw("List is empty");

    expect(list.insertFront.bind(list, null)).to.throw("Invalid entry");

    list.insertFront(4);
    expect(list.getHead()).to.be.equal(4);
    expect(list.isEmpty()).to.be.false;

    expect(list.deleteFront.bind(list)).to.not.throw("List is empty");

    expect(list.getHead()).to.be.null;
    expect(list.isEmpty()).to.be.true;
  });

  it("adds and removes back item", () => {
    expect(list.deleteBack.bind(list)).to.throw("List is empty");

    expect(list.insertBack.bind(list, null)).to.throw("Invalid entry");

    list.insertBack(5);
    expect(list.getTail()).to.be.equal(5);
    expect(list.isEmpty()).to.be.false;

    expect(list.deleteBack.bind(list)).to.not.throw("List is empty");
    expect(list.getTail()).to.be.null;
    expect(list.isEmpty()).to.be.true;
  });

  it("adds multiple values", () => {
    list.insertBack(3);
    list.insertBack(4);
    list.insertBack(5);
    list.insertFront(2);
    list.insertFront(1);

    expect(list.toArray()).to.be.deep.equal([1, 2, 3, 4, 5]);
  });

  it("finds an item", () => {
    let node = list.search(3);
    expect(node).to.exist;
    expect(node.value).to.equal(3);
    expect(node.next?.value).to.equal(4);
    expect(node.prev?.value).to.equal(2);
  });

  it("deletes multiple items", () => {
    expect(list.deleteItem.bind(list, null)).to.throw("Invalid entry");
    expect(list.deleteItem.bind(list, 1)).to.not.throw("Item not found");
    expect(list.deleteItem.bind(list, 9)).to.throw("Item not found");

    const deleted = list.deleteItem(4);
    expect(deleted).to.be.equal(4);

    list.deleteItem(5);

    expect(list.toArray()).to.be.deep.equal([2, 3]);
  });
});
