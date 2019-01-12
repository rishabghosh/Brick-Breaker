/* eslint-env mocha */

describe("class Paddle", () => {
  const height = 20;
  const width = 100;
  const bottom = 5;
  const left = 430;
  
  describe("moveRight", () => {
    it("should increase left by 10", () => {
      const paddle = new Paddle(height, width, bottom, left);
      paddle.moveRight();
      chai.assert.equal(paddle.left, 440);
    });
  });

});