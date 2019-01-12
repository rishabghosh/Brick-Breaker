/* eslint-env mocha */

describe("class Paddle", () => {
  const height = 20;
  const width = 100;
  const bottom = 5;
  const left = 430;

  describe("moveRight", () => {
    it("should increase paddle.left by 10", () => {
      const paddle = new Paddle(height, width, bottom, left);
      paddle.moveRight();
      chai.assert.equal(paddle.left, 440);
    });
  });

  describe("moveLeft", () => {
    it("should decrease paddle.left by 10", () => {
      const paddle = new Paddle(height, width, bottom, left);
      paddle.moveLeft();
      chai.assert.equal(paddle.left, 420);
    });
  });

});

describe("class Ball", () => {
  const radius = 10;
  const top = 10;
  const left = 10;

  describe("moveTop", () => {
    it("should decrease ball.top by 10", () => {
      const ball = new Ball(radius, top, left);
      ball.moveTop();
      chai.assert.equal(ball.top, 0);
    });
  });

  describe("moveBottom", () => {
    it("should increase ball.top by 10", () => {
      const ball = new Ball(radius, top, left);
      ball.moveBottom();
      chai.assert.equal(ball.top, 20);
    });
  });

  describe("moveLeft", () => {
    it("should decrease ball.left by 10", () => {
      const ball = new Ball(radius, top, left);
      ball.moveLeft();
      chai.assert.equal(ball.left, 0);
    });
  });

  describe("moveRight", () => {
    it("should increase ball.left by 10", () => {
      const ball = new Ball(radius, top, left);
      ball.moveRight();
      chai.assert.equal(ball.left, 20);
    });
  });

});