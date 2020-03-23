// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Particle(width, height) {
  this.pos = createVector(random(0, width), random(0, height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.bounces = 0;
  this.history = [];

  this.applyForce = function(force) {
    // this.acc.set(0,0);
    this.acc.add(force);
    this.acc.mult(1);
  }

  this.update = function(frameCount) {
    // if (this.history.length > 1000) {
    //   this.history.splice(0, 1);
    // }
    if (frameCount % 10 === 0) {
      let currentPos = createVector(this.pos.x, this.pos.y);
      this.history.push(currentPos);      
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255, 150);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 5, 5);

    // for (let i = 0; i < this.history.length; i++) {
    //   fill(255, 150);
    //   ellipse(this.history[i].x, this.history[i].y, 2, 2);
    // }
  }

  this.edges = function() {
    // if (this.bounces === 4) {
    //   this.pos.x += width / 10;
    //   this.pos.y += height / 10;
    //   this.bounces = 0;
    // }

    // if (this.pos.y > height && this.bounces < 4) {
    //   this.vel.y *= -1;
    //   this.pos.y = height;
    //   this.bounces += 1;
    // }

    // if (this.pos.x > width && this.bounces < 4) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    //   this.bounces += 1;
    // }

    // if (this.pos.y < 0 && this.bounces < 4) {
    //   this.vel.y *= -1;
    //   this.pos.y = 0;
    //   this.bounces += 1;
    // }

    // if (this.pos.x < 0 && this.bounces < 4) {
    //   this.vel.x *= -1;
    //   this.pos.x = 0;
    //   this.bounces += 1;
    // }

    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

    if (this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }

    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
    
  }
}
