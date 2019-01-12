/* eslint-env mocha */

describe("sum", () => {
  it("should add two numbers", () => {
    chai.assert.equal(sum(1, 2), 3);
  });
});