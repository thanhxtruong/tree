// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  stroke(255);
  translate(width/2, height);
  branch(100);  
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  rotate(PI / 4);
  if (len > 4) {
    branch(len * 0.67);
  }
  // line(0, 0, 0, -len * 0.67);
}
