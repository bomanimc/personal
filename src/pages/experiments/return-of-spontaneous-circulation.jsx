import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Oscillator, Waveform, Destination } from 'tone';
import Sketch from '../../sketches/rosc';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

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
              <Sketch waveformX={waveforms.x} waveformY={waveforms.y} />
            </ROSC.SketchWrapper>
          </ROSC.SquareContainer>
        </ROSC.Content>
        <ROSC.ControlsPanel>
          <ROSC.ControlsContent>
            <ROSC.ControlPanelRow>
              <ROSC.Button isSelected={isMuted} onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</ROSC.Button>
            </ROSC.ControlPanelRow>
            <ROSC.ControlPanelRow>
              <ROSC.SectionTitle>X-Axis Waveform</ROSC.SectionTitle>
              <ROSC.ButtonGrid>
                {allOscillatorTypes.map((type) => (
                  <ROSC.Button
                    isSelected={type === selectedOscillatorTypes.x}
                    onClick={onChangeOscillatorXType}
                    value={type}
                  >
                    {type}
                  </ROSC.Button>
                ))}
              </ROSC.ButtonGrid>
            </ROSC.ControlPanelRow>
            <ROSC.ControlPanelRow>
              <ROSC.SectionTitle>Y-Axis Waveform</ROSC.SectionTitle>
              <ROSC.ButtonGrid>
                {allOscillatorTypes.map((type) => (
                  <ROSC.Button
                    isSelected={type === selectedOscillatorTypes.y}
                    onClick={onChangeOscillatorYType}
                    value={type}
                  >
                    {type}
                  </ROSC.Button>
                ))}
              </ROSC.ButtonGrid>
            </ROSC.ControlPanelRow>
          </ROSC.ControlsContent>
        </ROSC.ControlsPanel>
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
  border: 1px solid white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 15rem;
  background: black;
`;

ROSC.ControlsHeader = styled.div`
  display: flex;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1px solid white;
  flex: 1;
  background: rgba(0, 0, 255, .37);
`;

ROSC.ControlsContent = styled.div``;

ROSC.ControlPanelRow = styled.div`
  padding: 0.5rem;
`;

ROSC.ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

ROSC.Button = styled.button`
  background: ${(p) => (p.isSelected ? 'rgba(0, 0, 255, 0.37)' : 'none')};
  color: white;
  text-transform: capitalize;
  border: 1px solid white;
  padding: 0.5rem;
  width: 100%;
`;

ROSC.SectionTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export default ROSC;
