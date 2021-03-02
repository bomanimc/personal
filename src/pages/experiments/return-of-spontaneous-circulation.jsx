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
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    p5.strokeWeight(1);

    this.curve = new Curve(p5);
  };

  draw = (p5) => {
    p5.background(0);

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
    oscillator.volume.value = -10;

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
        <button onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <DropdownSelector name="oscillatorXType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorXType} />
        <DropdownSelector name="oscillatorYType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorYType} />
        <ROSC.Container>
          <ROSCSketch waveformX={waveforms.x} waveformY={waveforms.y} />
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

ROSC.SelectorOption = styled.option`
  text-transform: capitalize;
`;

export default ROSC;
