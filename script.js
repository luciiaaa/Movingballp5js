


let directionX = 1.5;
let directionY = 1;
let paddle_width = 100; 
let paddle_height = 35;
let ball_x = 100;
let ball_y = 100;
let speed = 3;
let rect1_height = 70;
let rect1_width = 20;

var cx, px, cy, py, cv, pv;


function setup() {
	createCanvas(600, 400)
  rectMode(CENTER)

  cx = 20;
  cy = 200;
  cv = 2;
  px = 560;
  py = 200;
  pv = 2;
}

function draw() {
	background(0);

  let a = color('green')
  rect(cx, cy, 20, 70);
  fill(a)
  cy = cy + cv
 

  if(cy < 0 || cy > 350) {
   cv = cv * -1;
  }


  rect(mouseX, mouseY, 20, 70);
  fill(a)
  py = py + pv

  if(py < 0 || py > 350) {
   pv = pv * -1;
  }
  
  paddle();
  ballBounce ();
  rect1();
  
  

  

}




function ballBounce() {

  ellipse(ball_x, ball_y, 20, 20);
  ball_x += directionX * speed ;
  ball_y += directionY * speed;

   if (ball_x >= width || ball_x <= 0) {
    directionX = -directionX
  }

  if(ball_y >= height || ball_y <= 0){
    directionY = -directionY
  }

  


  
 
  
}

  
function paddle() {
  if (ball_y < paddle_height &&
    ball_x > mouseX - paddle_width / 2 &&
    ball_x < mouseX + paddle_width / 2) {
    directionY = -directionY
    
  }

  
  rect(mouseX, paddle_height / 2, paddle_width, paddle_height);
 
}


function rect1(){
  if (px < rect1_height &&
    py > mouseX - rect1_width / 2 &&
    py < mouseX + rect1_width / 2) {
    directionX = -directionX
    
  }

  
  rect(mouseX, rect1_width / 2, rect1_height, rect1_width);
}