

  var x, y, v, z, w, k ;
  

function setup() {
	createCanvas(500, 400);

  x = 55;
  y = 200;
  v = 5;
  z= 5;
  w = 5;
  k = 5;
  xk =55;
  yk =100;




 
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + v;
  y = y + z;

  

  if(x <= 0 || x > 500){
    v = v * -1;
  }

 if(y <= 0 || y > 400){
    z = z * -1;
 }
  
  ellipse(xk,yk,50,50);
  xk = xk + w;
  yk = yk + k;

  

  if(xk <= 0 || xk > 500){
    w = w * -1;
  }

 if(yk <= 0 || yk > 400){
    k = k * -1;
 }

  


  
}
	

