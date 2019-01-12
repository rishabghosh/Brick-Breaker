const applyPixel = (count) => count + PIXEL;


const movePaddle = function (paddle) {
  if (event.key === ARROW_RIGHT) { paddle.moveRight(); }
  if (event.key === ARROW_LEFT) { paddle.moveLeft(); }
  drawPaddle(paddle);
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


  const paddle = new Paddle(height, width, bottom, left);
  const ball = new Ball(radius, 0, 0);
  drawPaddle(paddle);
  drawBall(ball);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
};

window.onload = initialize;