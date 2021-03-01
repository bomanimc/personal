/* eslint max-classes-per-file: 0 */

import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import { Oscillator, Waveform, Destination } from 'tone';
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

class ROSCSketch extends Component {
  angle = 0;

  curve = null;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.strokeWeight(1);

    this.curve = new Curve(p5);
  };

  draw = (p5) => {
    const { waveformX, waveformY } = this.props;
    const waveformXValues = waveformX.getValue();
    const waveformYValues = waveformY.getValue();

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    p5.beginShape();
    for (let i = 0; i < waveformXValues.length; i += 1) {
      const x = p5.map(waveformXValues[i], -1, 1, 0, p5.width / 2);
      const y = p5.map(waveformYValues[i], -1, 1, p5.height / 2, 0);
      // console.log(x, y);
      p5.vertex(x, y);
    }
    p5.endShape();
  };

  windowResized = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
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

const ROSC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const oscillatorX = new Oscillator(440, 'sine');
  oscillatorX.volume.value = -5;
  const waveformX = new Waveform(1024);
  oscillatorX.connect(waveformX);
  oscillatorX.toDestination().start();

  const oscillatorY = new Oscillator({
    type: 'sine',
    frequency: 440,
    phase: 90,
  });
  oscillatorY.volume.value = -5;
  const waveformY = new Waveform(1024);
  oscillatorY.connect(waveformY);
  oscillatorY.toDestination().start();

  useEffect(() => {
    Destination.mute = isMuted;
  }, [isMuted]);

  const onToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Layout showLinksBar={false}>
      <BaseAnimationPage title="Return of Spontaneous Circulation">
        <button onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <ROSC.Container>
          <ROSCSketch waveformX={waveformX} waveformY={waveformY} />
        </ROSC.Container>
      </BaseAnimationPage>
    </Layout>
  );
};

ROSC.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default ROSC;
