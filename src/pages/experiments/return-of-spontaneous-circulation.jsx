/* eslint max-classes-per-file: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

export const LoadableSketch = Loadable(() => import('react-p5'));

class Curve {
  constructor(p5) {
    this.p5 = p5;
    this.path = [];
    this.currentPoint = p5.createVector();
  }

  addPoint() {
    this.path.push(this.currentPoint);
  }

  setX(x) {
    this.currentPoint.x = x;
  }

  setY(y) {
    this.currentPoint.y = y;
  }

  draw() {
    const { p5 } = this;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    p5.beginShape();
    for (const v of this.path) {
      p5.vertex(v.x, v.y);
    }
    p5.endShape();

    p5.strokeWeight(8);
    p5.point(this.currentPoint.x, this.currentPoint.y);

    this.currentPoint = p5.createVector();
  }
}

class ROSC extends Component {
  angle = 0;

  curve = null;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.strokeWeight(1);

    this.curve = new Curve(p5);
  };

  draw = (p5) => {
    p5.background(0);

    // Circle 1
    const centerX = p5.width / 2;
    const centerY = p5.height / 2;
    const x = 100 * p5.cos(this.angle - p5.HALF_PI);
    const y = 100 * p5.sin(this.angle - p5.HALF_PI);
    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.ellipse(centerX + x, centerY + y, 10, 10);

    // Circle 2
    const centerX2 = (p5.width / 2);
    const centerY2 = (p5.height / 2);
    const x2 = 100 * p5.cos(this.angle * 5 - p5.HALF_PI);
    const y2 = 100 * p5.sin(this.angle * 5 - p5.HALF_PI);
    p5.fill(0, 255, 0);
    p5.noStroke();
    p5.ellipse(centerX2 + x2, centerY2 + y2, 10, 10);

    this.curve.setX(centerX + x);
    this.curve.setY(centerY2 + y2);
    this.curve.addPoint();
    this.curve.draw();

    this.angle -= 0.01;
  };

  windowResized = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <Layout showLinksBar={false}>
        <BaseAnimationPage title="Return of Spontaneous Circulation">
          <ROSC.Container>
            <LoadableSketch
              setup={this.setup}
              draw={this.draw}
              windowResized={this.windowResized}
            />
          </ROSC.Container>
        </BaseAnimationPage>
      </Layout>
    );
  }
}

ROSC.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default ROSC;
