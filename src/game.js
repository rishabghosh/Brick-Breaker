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
  constructor(radius, top, left) {
    this.radius = radius;
    this.top = top;
    this.left = left;
  }

  moveTop() {
    this.top -= 10;
  }

  moveBottom() {
    this.top += 10;
  }

  moveLeft() {
    this.left -= 10;
  }
    
  moveRight() {
    this.left += 10;

  }

}

