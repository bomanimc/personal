import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  Channel,
  Oscillator,
  Waveform,
  Destination,
} from 'tone';
import Sketch from '../../sketches/rosc';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

const ROSC = () => {
  const baseChannel = useRef(null);
  const [areControlsExposed, setAreControlsExposed] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedOscillatorTypes, setSelectedOscillatorTypes] = useState({ x: 'sine', y: 'sine' });
  const [oscillators, setOscillators] = useState({});
  const [waveforms, setWaveforms] = useState({});
  const [xFrequencyScaling, setXFrequencyScaling] = useState(1);
  const [yFrequencyScaling, setYFrequencyScaling] = useState(1);
  const allOscillatorTypes = ['sine', 'triangle', 'square', 'sawtooth'];
  const middleCFrequency = 261.6;
  const initializeOscillator = (type, frequency, phase = 0) => {
    const oscillator = new Oscillator({
      type,
      frequency: frequency || middleCFrequency,
      phase,
    });
    oscillator.volume.value = -30;

    return oscillator;
  };

  useEffect(() => {
    Destination.mute = isMuted;
  }, [isMuted]);

  useEffect(() => {
    baseChannel.current = new Channel();

    return () => {
      Object.values(oscillators).map((oscillator) => oscillator.stop().dispose());
      if (baseChannel.current) {
        baseChannel.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    Object.values(oscillators).map((oscillator) => oscillator.dispose());
    const { x: xType, y: yType } = selectedOscillatorTypes;

    const oscillatorX = initializeOscillator(xType, middleCFrequency * xFrequencyScaling);
    const waveformX = new Waveform(1024);
    oscillatorX.connect(waveformX);
    oscillatorX.start().connect(baseChannel.current);

    const oscillatorY = initializeOscillator(yType, middleCFrequency * yFrequencyScaling, 90);
    const waveformY = new Waveform(1024);
    oscillatorY.connect(waveformY);
    oscillatorY.start().connect(baseChannel.current);

    baseChannel.current.toDestination();

    setOscillators({
      x: oscillatorX,
      y: oscillatorY,
    });
    setWaveforms({
      x: waveformX,
      y: waveformY,
    });
  }, [selectedOscillatorTypes, xFrequencyScaling, yFrequencyScaling]);

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

  const onChangeXFrequencyScaling = (event) => setXFrequencyScaling(event.target.value || 1);

  const onChangeYFrequencyScaling = (event) => setYFrequencyScaling(event.target.value || 1);

  const onToggleControls = () => setAreControlsExposed(!areControlsExposed);

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
          <ROSC.ControlsHeader>
            <span>Controls</span>
            <ROSC.ControlsHeaderButton onClick={onToggleControls}>
              {areControlsExposed ? '–' : '+'}
            </ROSC.ControlsHeaderButton>
          </ROSC.ControlsHeader>
          <ROSC.ControlsContent isExposed={areControlsExposed}>
            <ROSC.ControlPanelSection>
              <ROSC.Button isSelected={isMuted} onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</ROSC.Button>
            </ROSC.ControlPanelSection>
            <ROSC.ControlPanelSection>
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
            </ROSC.ControlPanelSection>
            <ROSC.ControlPanelSection>
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
            </ROSC.ControlPanelSection>
            <ROSC.ControlPanelSection>
              <ROSC.SectionTitle>Custom Tuning Ratio</ROSC.SectionTitle>
              <ROSC.ControlRow>
                <ROSC.ControlLabel>X Tone Multiple of 440Hz</ROSC.ControlLabel>
                <ROSC.Input
                  type="text"
                  autoComplete="off"
                  placeholder="Enter here"
                  defaultValue={1}
                  onChange={onChangeXFrequencyScaling}
                />
              </ROSC.ControlRow>
              <ROSC.ControlRow>
                <ROSC.ControlLabel>Y Tone Multiple of 440Hz</ROSC.ControlLabel>
                <ROSC.Input
                  type="text"
                  autoComplete="off"
                  placeholder="Enter here"
                  defaultValue={1}
                  onChange={onChangeYFrequencyScaling}
                />
              </ROSC.ControlRow>
            </ROSC.ControlPanelSection>
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

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    width: unset;
    left: 1rem;
  }
`;

ROSC.ControlsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid white;
  flex: 1;
  background: rgba(0, 0, 255, .37);
`;

ROSC.ControlsHeaderButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

ROSC.ControlsContent = styled.div`
  display: ${(p) => (p.isExposed ? 'block' : 'none')};
`;

ROSC.ControlPanelSection = styled.div`
  padding: 0.5rem;
`;

ROSC.ControlRow = styled.div`
  display: flex;
  font-size: 0.75rem;
  flex-direction: column;
  margin: 0.5rem 0;

  :last-child {
    margin-bottom: 0;
  }
`;

ROSC.ControlLabel = styled.div`
  margin-bottom: 0.5rem;
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

ROSC.Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: transparent;
  outline: none;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid white;
`;

ROSC.SectionTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export default ROSC;
