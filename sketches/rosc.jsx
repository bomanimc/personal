'use client'

import React from 'react';
import PropTypes from 'prop-types';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

class MathematicalCurve {
  constructor(p5) {
    this.p5 = p5;
    this.path = [];
  }

  addPoint(x, y) {
    const { p5 } = this;
    this.path.push(p5.createVector(x, y));
  }

  draw() {
    const { p5 } = this;

    p5.beginShape();
    for (let i = 0; i < this.path.length; i += 1) {
      const vertex = this.path[i];
      p5.vertex(vertex.x, vertex.y);
    }
    p5.endShape();
  }
}

const sketch = (p5) => {
  let mathematicalCurve = null;
  let saveButtonRef = null;
  let xFrequencyScaling;
  let yFrequencyScaling;
  let xOscillatorType;
  let yOscillatorType;
  let drawingMode;
  let waveformX;
  let waveformY;
  let isClockMode;

  const getCanvasSizing = () => {
    const canvasContainer = document.getElementById('canvasContainer');

    return {
      width: typeof window !== 'undefined' ? canvasContainer.offsetWidth : 0,
      height: typeof window !== 'undefined' ? canvasContainer.offsetHeight : 0,
    };
  }

  p5.updateWithProps = props => {
    mathematicalCurve = props.mathematicalCurve;
    saveButtonRef = props.saveButtonRef;
    xFrequencyScaling = props.xFrequencyScaling;
    yFrequencyScaling = props.yFrequencyScaling;
    xOscillatorType = props.xOscillatorType;
    yOscillatorType = props.yOscillatorType;
    drawingMode = props.drawingMode;
    waveformX = props.waveformX;
    waveformY = props.waveformY;
    isClockMode = props.isClockMode;
  };

  const generateFile = () => {
    const filename = `${xFrequencyScaling}@${xOscillatorType}-${yFrequencyScaling}@${yOscillatorType}`;
    p5.saveCanvas(filename, 'png');
  };

  const drawAudioBasedCurve = (waveformXValues, waveformYValues, widthHalf, heightHalf) => {
    p5.strokeWeight(1);

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.beginShape();
    const maxValue = Math.max.apply(null, waveformXValues);
    const minValue = Math.min.apply(null, waveformXValues);
    for (let i = 0; i < waveformXValues.length; i += 1) {
      const x = p5.map(waveformXValues[i], minValue, maxValue, -widthHalf, widthHalf);
      const y = p5.map(waveformYValues[i], minValue, maxValue, heightHalf, -heightHalf);
      p5.vertex(x, y);
    }
    p5.endShape();
    p5.pop();
  }

  const drawMathematicalCurve = (widthHalf, heightHalf) => {
    p5.strokeWeight(2);

    const mathematicalCurve = new MathematicalCurve(p5);
    let angle = p5.TWO_PI;

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    while (angle >= 0) {
      const x = p5.map(
        p5.sin(angle * xFrequencyScaling - p5.HALF_PI),
        -1,
        1,
        -widthHalf,
        widthHalf,
      );
      const y = p5.map(
        p5.cos(angle * yFrequencyScaling - p5.HALF_PI),
        -1,
        1,
        -heightHalf,
        heightHalf,
      );

      mathematicalCurve.addPoint(x, y);

      angle -= 0.001;
    }

    mathematicalCurve.draw();
    p5.pop();
  }

  p5.setup = (canvasParentRef) => {
    const { width, height } = getCanvasSizing();
    const canvasContainer = document.getElementById('canvasContainer');
    new ResizeObserver(() => p5.windowResized()).observe(canvasContainer);

    p5.createCanvas(width, height).parent(canvasParentRef);

    mathematicalCurve = new MathematicalCurve(p5);

    saveButtonRef.current.addEventListener('click', () => generateFile());
  };

  p5.draw = () => {
    p5.background(0, 0, 0, 255);

    const waveformXValues = waveformX.getValue();
    const waveformYValues = waveformY.getValue();
    const curveSizingFactor = isClockMode ? 0.9 : 0.8;
    const widthHalf = (p5.width * curveSizingFactor) / 2;
    const heightHalf = (p5.width * curveSizingFactor) / 2;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    if (drawingMode === 'audio') {
      drawAudioBasedCurve(waveformXValues, waveformYValues, widthHalf, heightHalf);
    } else {
      drawMathematicalCurve(widthHalf, heightHalf);
    }
  };

  p5.windowResized = () => {
    const { width, height } = getCanvasSizing();
    p5.resizeCanvas(width, height);
  }
}

export default function ROSC(props) {
  return (
    <NextReactP5Wrapper sketch={sketch} {...props} />
  );
}

// Sketch.propTypes = {
//   waveformX: PropTypes.shape(),
//   waveformY: PropTypes.shape(),
//   isClockMode: PropTypes.bool,
//   drawingMode: PropTypes.oneOf(['mathematical', 'audio']).isRequired,
//   xFrequencyScaling: PropTypes.number,
//   yFrequencyScaling: PropTypes.number,
//   xOscillatorType: PropTypes.string.isRequired,
//   yOscillatorType: PropTypes.string.isRequired,
//   saveButtonRef: PropTypes.any,
// };

// Sketch.defaultProps = {
//   waveformX: {},
//   waveformY: {},
//   isClockMode: false,
//   xFrequencyScaling: 1,
//   yFrequencyScaling: 1,
//   saveButtonRef: null,
// };
