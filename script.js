

  var x, y, v ;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 0;
  v = 5;
 
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + v;
  y = y + x;

  

  if(x <= 0 || x > 400){
    v = v * -1;
  }

  


  
}
	
