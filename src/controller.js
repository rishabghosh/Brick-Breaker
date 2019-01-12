const createPaddleDiv = function(){
  const div = document.createElement("div");
  div.className = "paddle";
  div.id = "paddle_1";
  return div;
};


const initialize = function () {
  const playground = document.getElementById("playground");
  const paddleDiv = createPaddleDiv();
  playground.appendChild(paddleDiv);
  
  console.log(paddleDiv);
  console.log("window loaded");
};

window.onload = initialize;