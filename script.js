

var cx, px, cy, py, cv, pv ;


class Ball {
  constructor(x, y, h, w, vx, vy) {
    this.x = x
    this.y = y
    this.h = h
    this.w = w
    this.vx = vx
    this.vy = vy
  }

  drawBall() {
    ellipse(this.x, this.y, this.h, this.w);
    this.x = this.x + this.vx
    this.y = this.y + this.vy


    if (this.x < 0 || this.x > 600) {
      this.vx = this.vx * -1;
    }

    if (this.y < 0 || this.y > 400) {
      this.vy = this.vy * -1;
    }
  }
}

function setup() {
	createCanvas(600, 400)

  cx = 20;
  cy = 200;
  cv = 2;
  px = 560;
  py = 200;
  pv = 2;

  ball1 = new Ball(0, 200, 10, 10, 5, 5)
  
}




function draw() {

 
  background(0);

  
  fill('#ffffff');
  rect(mouseX, 375, 90, 15);

  
  move();
  display();
  bounce();
  
  paddle();

  
  fill('#d9c3f7');
  textSize(24);
  text("Score: " + score, 10, 25);
  
  ball1.drawBall();
}

function move() {
  this.x += this.vx;
  this.y += this.vy;
}


function bounce() {

  if (this.x < 10 || this.x > 400 - 10) {
    this.vx*= -1;
  }
  if (this.y < 10 || this.y > 400 - 10) {
    this.vy *= -1;
  }
}



function display() {
  fill('#d9c3f7');
  
}


function paddle() {
  if ((this.x > mouseX && this.x < mouseX + 90) &&
    (this.y + 10 >= 375)) {
    this.vx *= -1;
    this.vy *= -1;
    score++;
  }
}