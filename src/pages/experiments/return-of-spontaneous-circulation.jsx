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

  curveSizingFactor = 0.8;

  curve = null;

  setup = (p5, canvasParentRef) => {
    const { width, height } = this.getCanvasSizing();
    p5.createCanvas(width, height).parent(canvasParentRef);

    p5.strokeWeight(1);

    this.curve = new Curve(p5);
  };

  draw = (p5) => {
    p5.background(0, 0, 0, 255);

    const { waveformX, waveformY } = this.props;
    const waveformXValues = waveformX.getValue();
    const waveformYValues = waveformY.getValue();

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.beginShape();
    const maxValue = Math.max.apply(null, waveformXValues);
    const minValue = Math.min.apply(null, waveformXValues);
    const widthHalf = (p5.width * this.curveSizingFactor) / 2;
    const heightHalf = (p5.width * this.curveSizingFactor) / 2;
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

const DropdownSelector = ({name, optionValues, onChange}) => (
  <select name={name} onChange={onChange}>
    {optionValues.map((type) => <ROSC.SelectorOption value={type}>{type}</ROSC.SelectorOption>)}
  </select>
);

const ROSC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedOscillatorTypes, setSelectedOscillatorTypes] = useState({ x: 'sine', y: 'sine' });
  const [oscillators, setOscillators] = useState({});
  const [waveforms, setWaveforms] = useState({});
  const [interval, setInterval] = useState(5 / 3);
  const allOscillatorTypes = ['sine', 'triangle', 'square', 'sawtooth'];
  const middleCFrequency = 261.6;
  const initializeOscillator = (type, frequency, phase = 0) => {
    const oscillator = new Oscillator({
      type,
      frequency,
      phase,
    });
    oscillator.volume.value = -30;

    return oscillator;
  };

  useEffect(() => {
    Destination.mute = isMuted;
  }, [isMuted]);

  useEffect(() => {
    Object.values(oscillators).map((oscillator) => oscillator.dispose());
    const { x: xType, y: yType } = selectedOscillatorTypes;

    const oscillatorX = initializeOscillator(xType, middleCFrequency);
    const waveformX = new Waveform(1024);
    oscillatorX.connect(waveformX);
    oscillatorX.toDestination().start();

    const oscillatorY = initializeOscillator(yType, middleCFrequency * interval, 90);
    const waveformY = new Waveform(1024);
    oscillatorY.connect(waveformY);
    oscillatorY.toDestination().start();

    setOscillators({
      x: oscillatorX,
      y: oscillatorY,
    });
    setWaveforms({
      x: waveformX,
      y: waveformY,
    });
  }, [selectedOscillatorTypes]);

  const onToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  const onChangeOscillatorXType = (event) => {
    const type = event.target.value;
    setSelectedOscillatorTypes({
      ...selectedOscillatorTypes,
      x: type,
    });
  };

  const onChangeOscillatorYType = (event) => {
    const type = event.target.value;
    setSelectedOscillatorTypes({
      ...selectedOscillatorTypes,
      y: type,
    });
  };

  return (
    <Layout showLinksBar={false}>
      <BaseAnimationPage title="Return of Spontaneous Circulation">
        <ROSC.Content>
          <ROSC.SquareContainer>
            <ROSC.SketchWrapper id="canvasContainer">
              <ROSCSketch waveformX={waveforms.x} waveformY={waveforms.y} />
            </ROSC.SketchWrapper>
          </ROSC.SquareContainer>
          {/* <div>
            <button onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</button>
            <DropdownSelector name="oscillatorXType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorXType} />
            <DropdownSelector name="oscillatorYType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorYType} />
          </div> */}
        </ROSC.Content>
      </BaseAnimationPage>
    </Layout>
  );
};

ROSC.Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

ROSC.SquareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .25rem;

  @media screen and (orientation:landscape) {
    height: 100vh;
    width: 100vh;
  }

  @media screen and (orientation:portrait) {
    height: 100vw;
    width: 100vw;
  }
`;

ROSC.SketchWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

ROSC.SelectorOption = styled.option`
  text-transform: capitalize;
`;

export default ROSC;
