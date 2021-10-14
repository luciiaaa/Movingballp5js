data = 0
var instructions = [
  'Text like you mean it',
  'Rely heavily on humor',
  'Use your words',
  'Take photos of the fun, unique activities you do',
  'Limit the selfies',
  'Watch your mouth',
  'Don’t be creepy',
  'Keep a firm grasp on reality',
  'Say goodnight',
  'Act on mutual interest',
  'Reaffirm your admiration after an enjoyable date',
  'Follow up sensual encounters'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  fill('brown');
  textAlign(CENTER);
}

function draw() {
  background(255, 255, 245, 5);
}

// draw instruct, place in draw
function drawInstruct() { } // random location

// set interval
setInterval(drawInstruct, 1000);

// get random instruct
function drawInstruct() {
  var instruct = getRandom();
  text(instruct, random(width), random(height));
}

function getRandom() {
  var n = floor(random(0, instructions.length));
  return instructions[n];
}

// take out interval, add mousePressed
function mousePressed() {
  background(255, 255, 245, 50);
  var instruct = getRandom();
  text(instruct, mouseX, mouseY);
}


/////////////////////////////////////////////////////////////////////////////////
///// RANDOM WORDNIK: SCORE (20 mins)

// wordnik base. file > duplicate

// random score
function setup() {
  createCanvas(windowWidth, windowHeight);

  print(data);

  textSize(30);
  stroke(255);
  fill(255);
  textAlign(CENTER);
  background(0);

  // handle data
  for (var i in data) {
    var word = data[i].word;
    console.log(word);
    text(word, random(width, random(height)));
  }
}

// draw line
var x = 0;
var y = 0;
for (var i in data) {
  var word = data[i].word;
  console.log(word);
  var newX = random(width);
  var newY = random(height);
  text(word, newX, newY);
  line(x, y, newX, newY);
  x = newX;
  y = newY;
}

var x = 0;
var y = 0;

/////////////////////////////////////////////////////////////////////////////////
///// RANDOM WORDNIK: CLICK 

function mousePressed() {
  loadJSON(getVerbsURL, handleResult);
}

function handleResult(data) {
  background('cyan');
  var word = data[0].word;
  text(word, width / 2, height / 2);
}


