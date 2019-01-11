/* eslint-env mocha */
/* eslint no-undef: "off" */

describe("sum", () => {
  it("should add two numbers", () => {
    chai.expect(sum(1, 2)).to.equal(3);
  });
});
console.log("inside gameTest")