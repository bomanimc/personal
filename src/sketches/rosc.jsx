/* eslint-disable react/forbid-prop-types */
/* eslint max-classes-per-file: 0 */

import React, { Component } from 'react';
import Loadable from '@loadable/component';
import PropTypes from 'prop-types';

export const LoadableSketch = Loadable(() => import('react-p5'));

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

class Sketch extends Component {
  setup = (p5, canvasParentRef) => {
    const { saveButtonRef } = this.props;
    const { width, height } = this.getCanvasSizing();
    const canvasContainer = document.getElementById('canvasContainer');
    new ResizeObserver(() => this.windowResized(p5)).observe(canvasContainer);

    p5.createCanvas(width, height).parent(canvasParentRef);

    this.mathematicalCurve = new MathematicalCurve(p5);

    saveButtonRef.current.addEventListener('click', () => this.generateFile(p5));
  };

  generateFile = (p5) => {
    const {
      xFrequencyScaling,
      yFrequencyScaling,
      xOscillatorType,
      yOscillatorType,
    } = this.props;

    const filename = `${xFrequencyScaling}@${xOscillatorType}-${yFrequencyScaling}@${yOscillatorType}`;
    p5.saveCanvas(filename, 'png');
  };

  draw = (p5) => {
    p5.background(0, 0, 0, 255);

    const {
      drawingMode,
      waveformX,
      waveformY,
      isClockMode,
    } = this.props;
    const waveformXValues = waveformX.getValue();
    const waveformYValues = waveformY.getValue();
    const curveSizingFactor = isClockMode ? 0.9 : 0.8;
    const widthHalf = (p5.width * curveSizingFactor) / 2;
    const heightHalf = (p5.width * curveSizingFactor) / 2;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    if (drawingMode === 'audio') {
      this.drawAudioBasedCurve(p5, waveformXValues, waveformYValues, widthHalf, heightHalf);
    } else {
      this.drawMathematicalCurve(p5, widthHalf, heightHalf);
    }
  };

  drawAudioBasedCurve = (p5, waveformXValues, waveformYValues, widthHalf, heightHalf) => {
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

  drawMathematicalCurve = (p5, widthHalf, heightHalf) => {
    p5.strokeWeight(2);

    const { xFrequencyScaling, yFrequencyScaling } = this.props;
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

Sketch.propTypes = {
  waveformX: PropTypes.shape(),
  waveformY: PropTypes.shape(),
  isClockMode: PropTypes.bool,
  drawingMode: PropTypes.oneOf(['mathematical', 'audio']).isRequired,
  xFrequencyScaling: PropTypes.number,
  yFrequencyScaling: PropTypes.number,
  xOscillatorType: PropTypes.string.isRequired,
  yOscillatorType: PropTypes.string.isRequired,
  saveButtonRef: PropTypes.any,
};

Sketch.defaultProps = {
  waveformX: {},
  waveformY: {},
  isClockMode: false,
  xFrequencyScaling: 1,
  yFrequencyScaling: 1,
  saveButtonRef: null,
};

export default Sketch;
