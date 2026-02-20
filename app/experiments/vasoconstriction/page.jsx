'use client'

import styled from "styled-components";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { BaseAnimationPage } from "../../../components/CommonComponents";

class Walker {
  constructor(p5, x, y, xNoiseIncrement, yNoiseIncrement, color1, color2) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.xNoiseIncrement = xNoiseIncrement;
    this.yNoiseIncrement = yNoiseIncrement;
    this.color1 = color1;
    this.color2 = color2;
    this.xStep = 0;
    this.yStep = 0;
    this.millisScale = 0.0006;
  }

  move() {
    const { p5, xNoiseIncrement, yNoiseIncrement } = this;

    const xNoise = p5.noise(this.xStep);
    const yNoise = p5.noise(this.yStep);

    this.x = p5.map(xNoise, 0, 1, 0, window.innerWidth);
    this.y = p5.map(yNoise, 0, 1, 0, window.innerHeight);
    this.draw();

    this.xStep += xNoiseIncrement;
    this.yStep += yNoiseIncrement;
  }

  draw() {
    const { p5, x, y, millisScale, color1, color2 } = this;

    const sinRange = p5.sin(millisScale * p5.millis());
    const diameter = 200 * sinRange;
    const lerpedColor = p5.lerpColor(
      p5.color(...color1),
      p5.color(...color2),
      Math.abs(sinRange),
    );
    p5.stroke(lerpedColor);
    p5.ellipse(x, y, diameter, diameter);
  }
}

const sketch = (p5) => {
  let walker = null;

  p5.setup = (canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
    );
    walker = new Walker(
      p5,
      0,
      0,
      0.003,
      0.002,
      [255, 82, 82, 60],
      [44, 44, 83, 30],
    );
    p5.noFill();
    p5.blendMode(p5.ADD);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    p5.background(0, 0, 0, 255);
    walker.move();
  };
};

export default function Vasoconstriction() {
  return (
    <BaseAnimationPage title="Vasoconstriction">
        <Vasoconstriction.Container>
          <NextReactP5Wrapper sketch={sketch} />
        </Vasoconstriction.Container>
      </BaseAnimationPage>
  );
}

Vasoconstriction.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
