const createDiv = () => document.createElement(DIV);
const getPaddle_1 = () => document.getElementById(PADDLE_ID1);
const applyPixel = (count) => count + PIXEL;

const createPaddleDiv = function () {
  const div = createDiv();
  div.className = PADDLE;
  div.id = PADDLE_ID1;
  return div;
};

const drawPaddle = function (paddle) {
  const paddleDiv = getPaddle_1();
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};

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

  //creates a new div named paddle inside playground
  const playground = document.getElementById(PLAYGROUND);
  const paddleDiv = createPaddleDiv();
  playground.appendChild(paddleDiv);


  const paddle = new Paddle(height, width, bottom, left);
  console.log(paddle);
  //changes each spec of paddle div with the same spec of paddle object
  drawPaddle(paddle);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
};

window.onload = initialize;