/* eslint-disable react/forbid-prop-types */
/* eslint max-classes-per-file: 0 */

import React, { Component } from 'react';
import Loadable from '@loadable/component';
import PropTypes from 'prop-types';

export const LoadableSketch = Loadable(() => import('react-p5'));

class Sketch extends Component {
  angle = 0;

  curve = null;

  setup = (p5, canvasParentRef) => {
    const { width, height } = this.getCanvasSizing();
    const canvasContainer = document.getElementById('canvasContainer');
    new ResizeObserver(() => this.windowResized(p5)).observe(canvasContainer);

    p5.createCanvas(width, height).parent(canvasParentRef);

    p5.strokeWeight(1);
  };

  draw = (p5) => {
    p5.background(0, 0, 0, 255);

    const { waveformX, waveformY, isClockMode } = this.props;
    const waveformXValues = waveformX.getValue();
    const waveformYValues = waveformY.getValue();
    const curveSizingFactor = isClockMode ? 0.9 : 0.8;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.beginShape();
    const maxValue = Math.max.apply(null, waveformXValues);
    const minValue = Math.min.apply(null, waveformXValues);
    const widthHalf = (p5.width * curveSizingFactor) / 2;
    const heightHalf = (p5.width * curveSizingFactor) / 2;
    for (let i = 0; i < waveformXValues.length; i += 1) {
      const x = p5.map(waveformXValues[i], minValue, maxValue, -widthHalf, widthHalf);
      const y = p5.map(waveformYValues[i], minValue, maxValue, heightHalf, -heightHalf);
      p5.vertex(x, y);
    }
    p5.endShape();
    p5.pop();
  };

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
};

Sketch.defaultProps = {
  waveformX: {},
  waveformY: {},
  isClockMode: false,
};

export default Sketch;
