var spritesheet;

function preload() {
  spritesheet = loadImage('assets/frogger.png');

}

function setup() {
  createCanvas(spritesheet.width * 2, spritesheet.height);
}

function draw() {
  background(0);
  image(spritesheet, spritesheet.width, 0);
}
