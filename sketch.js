let pageNum = 0;
let square = new Mover();
let floatingSquares = [];

function setup() {
  createCanvas(400, 400);
  //tells the program the max amount of squares it can draw
  for (let totalSquares = 0; totalSquares < 400; totalSquares++) {
    floatingSquares[totalSquares] = new Mover();
  }
}

function draw() {
  //when you click it changes scenes
  mouseClicked = function() {
    pageNum++;
  }
  //title page and main page
  if (pageNum == 0) {
    background(132, 227, 170);
    fill(200, 0, 255);
    textSize(34);
    text("Floating Snowflake art", 26, 40);
    textSize(30);
    fill(78, 60, 232);
    text("☃ click to start ☃", 80, 140);
    textSize(200);
    fill(0,0,0);
    text("☃",120,350);
  } else if (pageNum == 1) {
    background(100, 70, 100);
  
    //makes the squares move and have color 
    for (let i = 0; i < 400; i++) {
      floatingSquares[i].update();
      floatingSquares[i].show();
    }
    //end page
  } else if (pageNum == 2) {
    background(240, 240, 141);
    textSize(28);  
    fill(138, 42, 222);
    text("thanks for watching remember \nto like comment and subscribe", 10, 150);
    
    text("☃  ☺  ☃",100,300);
  
  }
  }
  //the end