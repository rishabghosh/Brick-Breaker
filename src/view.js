const createDiv = () => document.createElement(DIV);
const getPaddleId1 = () => document.getElementById(PADDLE_ID1);

const createPaddleDiv = function () {
  const div = createDiv();
  div.className = PADDLE;
  div.id = PADDLE_ID1;
  return div;
};

const drawPaddle = function (paddle) {
  const paddleDiv = getPaddleId1();
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};