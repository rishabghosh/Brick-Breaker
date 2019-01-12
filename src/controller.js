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

  //creates a new div named paddle inside playground
  const playground = document.getElementById(PLAYGROUND);
  const paddleDiv = createPaddleDiv();
  playground.appendChild(paddleDiv);


  const paddle = new Paddle(height, width, bottom, left);
  //changes each spec of paddle div with the same spec of paddle object
  drawPaddle(paddle);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
};

window.onload = initialize;