const createPaddleDiv = function () {
  const div = document.createElement("div");
  div.className = "paddle";
  div.id = "paddle_1";
  return div;
};

const applyPixel = (count) => count + "px";

const drawPaddle = function (paddle) {
  const paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};

const movePaddle = function (paddle) {
  if (event.key === "ArrowRight") { paddle.moveRight(); }
  if (event.key === "ArrowLeft") { paddle.moveLeft(); }
  drawPaddle(paddle);
};

const initialize = function () {
  const height = 20;
  const width = 100;
  const bottom = 5;
  const left = 430;

  //creates a new div named paddle inside playground
  const playground = document.getElementById("playground");
  const paddleDiv = createPaddleDiv();
  playground.appendChild(paddleDiv);


  const paddle = new Paddle(height, width, bottom, left);
  //changes each spec of paddle div with the same spec of paddle object
  drawPaddle(paddle);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
};

window.onload = initialize;