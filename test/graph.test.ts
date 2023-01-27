import { expect } from "chai";
import { GraphV1, GraphV2 } from "../notebooks/structures/Graph";

let graphV1 = new GraphV1(4);
let graphV2 = new GraphV2(4);

describe("GraphV1", () => {
  it("correctly initializes the graph", () => {
    expect(graphV1.nodes.length).to.be.equal(4);
  });

  it("links directly", () => {
    expect(graphV1.addDirectLink.bind(graphV1, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    expect(graphV1.addDirectLink.bind(graphV1, 2, 5)).to.throw(
      "Node 5 does not exist"
    );

    graphV1.addDirectLink(2, 3);
    expect(graphV1.areLinked(2, 3)).to.be.true;
  });

  it("links indirectly", () => {
    expect(graphV1.addIndirectLink.bind(graphV1, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    expect(graphV1.addIndirectLink.bind(graphV1, 2, 5)).to.throw(
      "Node 5 does not exist"
    );
    graphV1.addIndirectLink(1, 3);
    graphV1.addIndirectLink(1, 2);

    expect(graphV1.areLinked(1, 3)).to.be.true;
    expect(graphV1.areLinked(3, 1)).to.be.true;
    expect(graphV1.areLinked(1, 2)).to.be.true;
    expect(graphV1.areLinked(2, 1)).to.be.true;
  });

  it("deletes a link", () => {
    expect(graphV1.deleteLink.bind(graphV1, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    graphV1.deleteLink(1, 3);
    expect(graphV1.areLinked(1, 3)).to.be.false;
  });
});

describe("GraphV2", () => {
  it("correctly initializes the graph", () => {
    expect(graphV2.adjacencies.length).to.be.equal(4);
  });

  it("links directly", () => {
    expect(graphV2.addDirectLink.bind(graphV1, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    expect(graphV2.addDirectLink.bind(graphV1, 2, 5)).to.throw(
      "Node 5 does not exist"
    );

    graphV2.addDirectLink(2, 3);
    expect(graphV2.areLinked(2, 3)).to.be.true;
  });

  it("links indirectly", () => {
    expect(graphV2.addIndirectLink.bind(graphV2, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    expect(graphV2.addIndirectLink.bind(graphV2, 2, 5)).to.throw(
      "Node 5 does not exist"
    );
    graphV2.addIndirectLink(1, 3);
    graphV2.addIndirectLink(1, 2);

    expect(graphV2.areLinked(1, 3)).to.be.true;
    expect(graphV2.areLinked(3, 1)).to.be.true;
    expect(graphV2.areLinked(1, 2)).to.be.true;
    expect(graphV2.areLinked(2, 1)).to.be.true;
  });

  it("deletes a link", () => {
    expect(graphV2.deleteLink.bind(graphV1, 5, 2)).to.throw(
      "Node 5 does not exist"
    );
    graphV2.deleteLink(1, 3);
    expect(graphV2.areLinked(1, 3)).to.be.false;
  });
});
