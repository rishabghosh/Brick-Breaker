/* eslint-env mocha */

describe("class Paddle", () => {
  const height = 20;
  const width = 100;
  const bottom = 5;
  const left = 430;
  const speed = 20;

  describe("moveRight", () => {
    it("should increase paddle.left by 10", () => {
      const paddle = new Paddle(height, width, bottom, left, speed);
      paddle.moveRight();
      chai.assert.equal(paddle.left, 450);
    });
  });

  describe("moveLeft", () => {
    it("should decrease paddle.left by 10", () => {
      const paddle = new Paddle(height, width, bottom, left, speed);
      paddle.moveLeft();
      chai.assert.equal(paddle.left, 410);
    });
  });

});

describe("class Ball", () => {
  const radius = 5;

  describe("move", () => {

    it("should add velocity with current position", () => {
      const velocity = { left: 5, top: 5 };
      const ballPosition = { left: 0, top: 0 };
      const ball = new Ball(radius, ballPosition, velocity);
      ball.move();

      const expectedOutput = { left: 5, top: 5 };
      chai.assert.deepEqual(ball.position, expectedOutput);
    });

    it("should add velocity with current position", () => {
      const velocity = { left: 5, top: 5 };
      const ballPosition = { left: 10, top: 10 };
      const ball = new Ball(radius, ballPosition, velocity);
      ball.move();

      const expectedOutput = { left: 15, top: 15 };
      chai.assert.deepEqual(ball.position, expectedOutput);
    });
  });

  describe("setVelocity", () => {

    it("should change left and top of velocity", () => {
      const velocity = { left: 5, top: 5 };
      const ballPosition = { left: 0, top: 0 };
      const ball = new Ball(radius, ballPosition, velocity);
      ball.setVelocity(10, 10);

      const expectedOutput = { left: 10, top: 10 };
      chai.assert.deepEqual(ball.velocity, expectedOutput);
    });

    describe("behaviour", () => {

      it("should move towards bottom-right if velocity is not changed", () => {
        const velocity = { left: 5, top: 5 };
        const ballPosition = { left: 0, top: 0 };
        const ball = new Ball(radius, ballPosition, velocity);
        ball.move();

        const expected = { left: 5, top: 5 };
        chai.assert.deepEqual(ball.position, expected);
      });

      it("should be able to move towards top-left", () => {
        const velocity = { left: 5, top: 5 };
        const ballPosition = { left: 50, top: 50 };
        const ball = new Ball(radius, ballPosition, velocity);
        ball.setVelocity(-(ball.velocity.left), -(ball.velocity.top) );
        ball.move();

        const expected = { left: 45, top: 45 };
        chai.assert.deepEqual(ball.position, expected);
      });

      it("should be able to move towards bottom-left", () => {
        const velocity = { left: 5, top: 5 };
        const ballPosition = { left: 50, top: 50 };
        const ball = new Ball(radius, ballPosition, velocity);
        ball.setVelocity(-(ball.velocity.left), ball.velocity.top );
        ball.move();

        const expected = { left: 45, top: 55 };
        chai.assert.deepEqual(ball.position, expected);
      });

      it("should be able to move towards top-right", () => {
        const velocity = { left: 5, top: 5 };
        const ballPosition = { left: 50, top: 50 };
        const ball = new Ball(radius, ballPosition, velocity);
        ball.setVelocity((ball.velocity.left), -(ball.velocity.top) );
        ball.move();

        const expected = { left: 55, top: 45 };
        chai.assert.deepEqual(ball.position, expected);
      });

    });

  });


});