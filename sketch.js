// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var particles = [];
var width;
var height;
var numberOfParticles = 5;
var forces = [];

function setup() {
  width = 1000;
  height = 1000;
  createCanvas(width, height);
  forces = [
    createVector(0.5, 0.5),
    createVector(-0.5, 0.5),
    createVector(0.5, -0.5),
    createVector(-0.5, -0.5),
    createVector(0.5, 0.5),
  ]
  for (var i = 0; i < numberOfParticles; i++) {
    var particle = new Particle(width, height);
    particles.push(particle);
  }
  
  
  // for (var i = 0; i < numberOfParticles; i++) {
  //   var particle = new Particle(random(0, width), random(0, height));
  //   particles.push(particle);
  // }
}

// function mousePressed() {
//   var p = new Particle(mouseX, mouseY, random(2,4));
//   particles.push(p);
// }

// function keyPressed() {
//   if (key == ' ') {
//     particles.splice(0, 1);
//   }

// }

function draw() {
  background(0);

  for (var i = 0; i < particles.length; i++) {
    
    for (var j = i + 1; j < particles.length; j++) {
      var length = p5.Vector.sub(particles[j].pos, particles[i].pos);
      if (length.mag() < 40) {
        var normalizedLength = map(length.mag(), 0, max(width, height), 1 , 0);
        stroke(255);
        strokeWeight(normalizedLength);
        line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
      }      
    }

    if (frameCount === 1) {
      // var force = createVector(random(-1, 1), random(-1, 1));
      particles[i].applyForce(forces[i]);
    }

    particles[i].update(frameCount);
    particles[i].edges();
    particles[i].display();
  }
}

function onClicked() {
  console.log('here');
}
