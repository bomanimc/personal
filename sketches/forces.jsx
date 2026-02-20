'use client'

import { NextReactP5Wrapper } from "@p5-wrapper/next";

class Mover {
  constructor(p5, x, y, m, color) {
    this.p5 = p5;
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(0.1), p5.random(0.1));
    this.acc = p5.createVector(0, 0);
    this.mass = m;
    this.color = color;
    this.r = p5.sqrt(this.mass) * 2;
  }

  applyForce(force) {
    const { p5 } = this;
    const f = p5.createVector(force.x / this.mass, force.y / this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    const { p5, color } = this;

    const sinRange = p5.sin(0.0006 * p5.millis());
    const diameter = 200 * sinRange;
    const lerpedColor = p5.lerpColor(
      p5.color(...[255, 82, 82, 5]),
      p5.color(...color),
      Math.abs(sinRange),
    );
    p5.stroke(lerpedColor);
    p5.ellipse(
      this.pos.x,
      this.pos.y,
      diameter,
      diameter,
    );
  }
}

class Attractor {
  constructor(p5, x, y, m) {
    this.p5 = p5;
    this.pos = p5.createVector(x, y);
    this.mass = m;
    this.r = p5.sqrt(this.mass) * 2;

    this.movers = [];
    this.initializeMovers();
  }

  initializeMovers() {
    const { p5 } = this;
    const color = [p5.random(255), p5.random(255), p5.random(255), 5];
    const distanceFromPoint = 50;

    for (let i = 0; i < 5; i += 1) {
      const x = p5.random(this.x - distanceFromPoint, this.x + distanceFromPoint);
      const y = p5.random(this.y - distanceFromPoint, this.y + distanceFromPoint);
      const m = p5.random(10, 50);
      this.movers.push(new Mover(p5, x, y, m, color));
    }
  }

  attract(mover) {
    const { p5 } = this;
    const force = p5.createVector(this.pos.x - mover.pos.x, this.pos.y - mover.pos.y);
    const distanceSq = p5.constrain(force.magSq(), 100, 1000);
    const G = 2;
    const strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  show() {
    const { p5 } = this;
    p5.noFill();
    p5.ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  updateMovers() {
    this.movers.forEach((mover) => {
      mover.update();
      mover.show();
      this.attract(mover);
    });
  }
}

const sketch = (p5) => {
  let attractors = [];

  p5.setup = (canvasParentRef) => {
    const { width, height } = getCanvasSizing();
    p5.createCanvas(width, height).parent(canvasParentRef);

    p5.push();
    p5.translate(width / 2, height / 2);
    const radius = 300;
    let angle = 0;
    const numAttractors = 12;
    for (let i = 0; i < numAttractors; i += 1) {
      const x = radius * p5.sin(angle);
      const y = radius * p5.cos(angle);
      attractors.push(new Attractor(p5, x, y, 10));
      angle += p5.TWO_PI / numAttractors;
    }
    p5.pop();

    p5.background(0);
    p5.noFill();
    p5.blendMode(p5.ADD);
  };

  p5.draw = () => {
    p5.background(0, 0, 0, 255);
    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);

    attractors.map((attractor) => {
      attractor.updateMovers();
      attractor.show();
    });

    p5.pop();
  };

  p5.windowResized = () => {
    const { width, height } = getCanvasSizing();
    p5.resizeCanvas(width, height);
  }

  const getCanvasSizing = () => {
    const canvasContainer = document.getElementById('canvasContainer');

    return {
      width: typeof window !== 'undefined' ? canvasContainer.offsetWidth : 0,
      height: typeof window !== 'undefined' ? canvasContainer.offsetHeight : 0,
    };
  }
}

export default function Forces() {
  return (
    <NextReactP5Wrapper sketch={sketch} />
  );
}
