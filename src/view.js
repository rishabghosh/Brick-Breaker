const createDiv = () => document.createElement(DIV);

const createPaddleDiv = function () {
  const div = createDiv();
  div.className = PADDLE;
  div.id = PADDLE_1;
  return div;
};

const drawPaddle = function (paddle) {
  const paddleDiv = document.getElementById(PADDLE_1);
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};

const createBallDiv = function () {
  const div = createDiv();
  div.className = BALL;
  div.id = BALL_1;
  return div;
};

const drawBall = function (ball) {
  const ballDiv = document.getElementById(BALL_1);
  ballDiv.style.top = applyPixel(ball.position.top);
  ballDiv.style.left = applyPixel(ball.position.left);
  ballDiv.style.height = applyPixel(ball.radius*2);
  ballDiv.style.width = applyPixel(ball.radius*2);
};