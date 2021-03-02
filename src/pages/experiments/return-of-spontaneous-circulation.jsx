import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Oscillator, Waveform, Destination } from 'tone';
import Sketch from '../../sketches/rosc';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

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
    console.log('TOGGLED');
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
              <Sketch waveformX={waveforms.x} waveformY={waveforms.y} />
            </ROSC.SketchWrapper>
          </ROSC.SquareContainer>
          <ROSC.ControlsPanel>
            <button onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</button>
            <DropdownSelector name="oscillatorXType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorXType} />
            <DropdownSelector name="oscillatorYType" optionValues={allOscillatorTypes} onChange={onChangeOscillatorYType} />
          </ROSC.ControlsPanel>
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

ROSC.ControlsPanel = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: 1px solid blue;
  z-index: 1;
`;

ROSC.SelectorOption = styled.option`
  text-transform: capitalize;
`;

export default ROSC;
