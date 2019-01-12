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
  const playground = document.getElementById("playground");
  const paddleDiv = createPaddleDiv();
  playground.appendChild(paddleDiv);

  const paddle = new Paddle(20, 100, 5, 430);
  drawPaddle(paddle);

  playground.focus(); //events focuses on playground
  playground.onkeydown = movePaddle.bind(null, paddle);
};

window.onload = initialize;