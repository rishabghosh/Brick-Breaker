class Paddle {
  constructor(height, width, bottom, left){
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }

  moveLeft(){
    this.left -= 10;
  }

  moveRight() {
    this.left += 10;
  }
}

class Ball {
  constructor(radius, ballPosition, velocity) {
    this.radius = radius;
    this.position = ballPosition;
    this.velocity = velocity;
  }
  move() {
    this.position.left += this.velocity.left;
    this.position.top += this.velocity.top;
  }

  setVelocity(left, top) {
    this.velocity.left = left;
    this.velocity.top = top;
  } 
}

