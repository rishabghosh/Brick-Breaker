const applyPixel = (count) => count + PIXEL;

const movePaddle = function (paddle) {
  if (event.key === ARROW_RIGHT) { paddle.moveRight(); }
  if (event.key === ARROW_LEFT) { paddle.moveLeft(); }
  drawPaddle(paddle);
};

const moveBall = function (ball) {
  ball.setVelocity(5, 5);
  ball.move();
  drawBall(ball);
};

const initialize = function () {
  const height = 20;
  const width = 100;
  const bottom = 5;
  const left = 430;
  const radius = 10;


  const playground = document.getElementById(PLAYGROUND);
  const paddleDiv = createPaddleDiv();
  const ballDiv = createBallDiv();
  playground.appendChild(paddleDiv);
  playground.appendChild(ballDiv);

  const ballPosition = { left: 0, top: 0 };
  const velocity = { left: 5, top: 5 };
  const paddle = new Paddle(height, width, bottom, left);
  const ball = new Ball(radius, ballPosition, velocity);
  drawPaddle(paddle);
  drawBall(ball);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
  setInterval(() => moveBall(ball), 50);
};

window.onload = initialize;