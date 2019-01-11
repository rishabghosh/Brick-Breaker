const createPaddle = function() {
  let playground = document.getElementById("playground");
  let paddle = document.createElement("div");
  paddle.className = "paddle";
  paddle.id = "paddle_1";
  //creates a new child, or div (as paddle) inside parent, or main (playground)
  playground.appendChild(paddle);
};


const initialize = function () {
  createPaddle();
  console.log("window loaded");
};

window.onload = initialize;