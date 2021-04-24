/* eslint-disable react/forbid-prop-types */
/* eslint max-classes-per-file: 0 */

import React, { Component } from 'react';
import Loadable from '@loadable/component';

export const LoadableSketch = Loadable(() => import('react-p5'));

class Particle {
  constructor(p5, pos, index) {
    this.p5 = p5;
    this.pos = pos;
    this.vel = 0;
    this.velocityMagnitude = 0.01 * 0.05;
    this.index = index;
    this.toIndex = null;
    this.isPrimary = index === 0;
  }

  update(particlePosToFollow, toIndex) {
    const { p5, velocityMagnitude } = this;
    this.vel = p5.createVector(particlePosToFollow.x, particlePosToFollow.y);
    this.pos = p5.createVector(
      this.pos.x + this.vel.x * velocityMagnitude,
      this.pos.y + this.vel.y * velocityMagnitude,
    );
    if (this.pos.x > p5.width || this.pos.x < 0 || this.pos.y > p5.height || this.pos.y < 0) {
      this.vel = p5.createVector(-this.vel.x, -this.vel.y);
    }
    this.toIndex = toIndex;
  }

  draw() {
    const { p5 } = this;

    p5.stroke(255);
    p5.fill(255);
    p5.ellipse(this.pos.x, this.pos.y, 5);
    p5.text(`(${this.pos.x.toFixed(2)}, ${this.pos.y.toFixed(2)}) - (${this.vel.x.toFixed(2)}, ${this.vel.y.toFixed(2)})`, this.pos.x, this.pos.y);
    // p5.line(this.pos.x, this.pos.y, this.vel.x, this.vel.y);
    const distanceFromPointToFollow = this.vel.dist(this.pos);
    this.drawArrow(this.pos, this.vel, distanceFromPointToFollow);
  }

  drawArrow(base, vec, thickness) {
    const { p5 } = this;

    p5.push();

    p5.strokeWeight(p5.map(p5.constrain(thickness, 0, 700), 0, 700, 5, 1));
    p5.translate(base.x, base.y);
    p5.line(0, 0, vec.x, vec.y);
    p5.rotate(vec.heading());
    const arrowSize = 3;
    p5.translate(vec.mag() - arrowSize, 0);
    p5.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);

    p5.pop();
  }
}

class Sketch extends Component {
  angle = 0;

  curveSizingFactor = 0.5;

  curve = null;

  coordinates = [];

  particles = [];

  setup = (p5, canvasParentRef) => {
    const { width, height } = this.getCanvasSizing();
    p5.createCanvas(width, height).parent(canvasParentRef);

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);

    const widthHalf = (p5.width * this.curveSizingFactor) / 2;
    const heightHalf = (p5.width * this.curveSizingFactor) / 2;
    for (let i = 0; i < 50; i += 1) {
      const x = p5.map(p5.random(), 0, 1, -widthHalf, widthHalf);
      const y = p5.map(p5.random(), 0, 1, heightHalf, -heightHalf);
      this.coordinates.push(p5.createVector(x, y));
    }

    p5.pop();

    p5.strokeWeight(1);
  };

  draw = (p5) => {
    p5.background(0, 0, 0, 255);

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);

    this.drawParticleShape(p5, this.coordinates);

    p5.pop();
  };

  drawParticleShape = (p5, coordinates) => {
    if (this.particles.length === 0) {
      this.particles = coordinates.map((coordinate, idx) => new Particle(p5, coordinate, idx));
    }

    this.particles.forEach((particle, idx) => {
      const particleToFollow = this.particles[(idx + 1) % this.particles.length];
      particle.update(particleToFollow.pos, particleToFollow.index);
      particle.draw();
    });
  }

  windowResized = (p5) => {
    const { width, height } = this.getCanvasSizing();
    p5.resizeCanvas(width, height);
  }

  getCanvasSizing = () => {
    const canvasContainer = document.getElementById('canvasContainer');

    return {
      width: typeof window !== 'undefined' ? canvasContainer.offsetWidth : 0,
      height: typeof window !== 'undefined' ? canvasContainer.offsetHeight : 0,
    };
  }

  render() {
    return (
      <LoadableSketch
        setup={this.setup}
        draw={this.draw}
        windowResized={this.windowResized}
      />
    );
  }
}

export default Sketch;
