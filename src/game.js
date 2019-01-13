class Paddle {
  constructor(height, width, bottom, left) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }

  moveLeft() {
    this.left -= 30;
  }

  moveRight() {
    this.left += 30;
  }
}

class Ball {
  constructor(radius, ballPosition, velocity) {
    this.radius = radius;
    this.position = ballPosition;
    this.velocity = velocity;
  }
  move() {
    this.position.left += this.velocity.left;
    this.position.top += this.velocity.top;
  }

  setVelocity(left, top) {
    this.velocity.left = left;
    this.velocity.top = top;
  }
}

const isColliedWithSideWalls = function (ball) {
  const diameterOfBall = ball.radius * 2;
  return ball.position.left <= (0 + diameterOfBall) ||
    ball.position.left >= (960 - diameterOfBall);
};

const isColliedWithTopWall = function (ball) {
  const diameterOfBall = ball.radius * 2;
  return ball.position.top <= (0 + diameterOfBall);
};

const hasColliedWithBottomWall = function (ball) {
  const diameterOfBall = ball.radius * 2;
  return ball.position.top >= (600 - diameterOfBall);
};

const isColliedWithPaddle = function (ball, paddle) {
  const diameterOfBall = ball.radius * 2;
  return (ball.position.left >= paddle.left &&
    ball.position.left <= (paddle.left + paddle.width) &&
    ball.position.top >= (600 - paddle.bottom - diameterOfBall - paddle.height));
};


class Game {
  constructor(paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
  }

  detectCollision() {
    const velocityOfLeft = this.ball.velocity.left;
    const velocityOfTop = this.ball.velocity.top;
    const diameterOfBall = this.ball.radius * 2;

    if (isColliedWithPaddle(this.ball, this.paddle)) {
      this.ball.setVelocity(velocityOfLeft, -velocityOfTop);
      console.log("collied with paddle");
      return;
    }

    if (hasColliedWithBottomWall(this.ball)) {
      console.log("gameLost");
      clearInterval(a);
    }

    if (isColliedWithTopWall(this.ball)) {
      this.ball.setVelocity(velocityOfLeft, -velocityOfTop);
      return;
    }

    if (isColliedWithSideWalls(this.ball)) {
      this.ball.setVelocity(-velocityOfLeft, velocityOfTop);
      return;
    }

  }

}