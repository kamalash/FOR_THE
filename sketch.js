var canvas;
var background
var database, gameState;
var form, player, playerCount;
var officer1,officer2,allplayers
var officers = []
var game

function preload() {
 backgroundImage = loadImage("./assets/road.png")
 backgroundImg = loadImage("./assets/road2.png")
 officerImage = loadImage("./assets/gun.png")
 buildImg = loadImage("./assets/building.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()
}

function draw() {
  background(backgroundImage);
  if(playerCount == 2){
    game.update(1)
  }
  if(gameState == 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
