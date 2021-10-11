class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 70;
    this.vx = 0;
    this.vy = 0;
    this.c = "green";

  }

  draw() {
    fill(this.c)
    this.x = mouseX;
    this.y = mouseY;
    rect(mouseX, mouseY, this.w, this.h);

    //console.log(ball_x, this.x, this.w);

    if(ball_x < this.x + this.w && ball_x + 20 > this.x){ 
      if(ball_y < this.y + this.h && ball_y + 70 > this.y)
       directionX = -directionX
       directionY = -directionY

      
     
      
    }
    


    // if (ball_y < paddle_height && ball_x > mouseX - this.w / 2 &&
    //   ball_x < mouseX + this.h / 2) {
    //   directionX = -directionX
    // }

    // this.y = this.y + this.vx


    // if (this.y < 0 || this.y > 350) {
    //   this.vx = this.vx * -1;
    // }

  }
}

let directionX = 1.5;
let directionY = 1;
let paddle_width = 20;
let paddle_height = 70;
let ball_x = 100;
let ball_y = 100;
let speed = 3;

var player1, player2;

function setup() {
  createCanvas(600, 400)
  rectMode(CENTER);

  player1 = new Player(20, 200);
  //player2 = new Player(550, 20);
}

function draw() {
  background(0);
  player1.draw();
  //player2.draw();

  // paddle();
  ballBounce();
}

function ballBounce() {

  rect(ball_x, ball_y, 20, 20);
  ball_x += directionX * speed;
  ball_y += directionY * speed;

  if (ball_x >= width || ball_x <= 0) {
    directionX = -directionX
  }

  if (ball_y >= height || ball_y <= 4) {
    directionY = -directionY
  }
}



function paddle() {
  if (ball_y < paddle_height &&
    ball_x > mouseX - paddle_width / 2 &&
    ball_x < mouseX + paddle_height / 2) {
    directionX = -directionX


  }


  rect(mouseX, paddle_height / 2, paddle_width, paddle_height);

}


