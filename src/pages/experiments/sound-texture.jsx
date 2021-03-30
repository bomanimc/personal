import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import * as Tone from 'tone';
import Draggable from 'react-draggable';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

const textureAreas = {
  smooth: [
    {
      freq: 120,
      type: 'sine',
    },
    {
      freq: 120,
      type: 'sine',
    },
  ],
  vibrate: [
    {
      freq: 13,
      type: 'triangle',
    },
    {
      freq: 13,
      type: 'square',
    },
  ],
  bounce: [
    {
      freq: 5,
      type: 'sawtooth',
    },
    {
      freq: 2,
      type: 'square',
    },
  ],
};

const SoundTexture = () => {
  const baseChannel = useRef(null);
  const [areControlsExposed, setAreControlsExposed] = useState(true);
  const [audioContextStarted, setAudioContextStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [areAreasHidden, setAreAreasHidden] = useState(true);
  const [oscillators, setOscillators] = useState({});

  const initializeOscillator = (type, frequency, phase = 0) => {
    const oscillator = new Tone.Oscillator({
      type,
      frequency,
      phase,
    });
    oscillator.volume.value = -30;

    return oscillator;
  };

  const disposeOscillators = () => {
    Object.values(oscillators).flat().map((oscillator) => oscillator.stop().dispose());
  };

  useEffect(() => {
    Tone.Destination.mute = isMuted;
  }, [isMuted]);

  useEffect(() => {
    baseChannel.current = new Tone.Channel();

    return () => {
      disposeOscillators();
      if (baseChannel.current) {
        baseChannel.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    disposeOscillators();

    const areaOscillators = {};
    Object.entries(textureAreas).forEach((entry) => {
      const [areaLabel, areaData] = entry;
      const [osc1Data, osc2Data] = areaData;

      const oscillator1 = initializeOscillator(osc1Data.type, osc1Data.freq);
      oscillator1.connect(baseChannel.current);

      const oscillator2 = initializeOscillator(osc2Data.type, osc2Data.freq);
      oscillator2.connect(baseChannel.current);

      areaOscillators[areaLabel] = [oscillator1, oscillator2];
    });

    baseChannel.current.toDestination();

    setOscillators(areaOscillators);
  }, []);

  const onToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  const onToggleAreasHidden = () => {
    setAreAreasHidden(!areAreasHidden);
  };

  const onToggleControls = () => setAreControlsExposed(!areControlsExposed);

  const onStartAudioContext = () => {
    Tone.context.resume();
    setAudioContextStarted(true);
  };

  const onPlayTexture = (event) => {
    const areaLabel = event.target.dataset.area;
    oscillators[areaLabel].forEach((oscillator) => oscillator.start());
  };

  const onStopTexture = (event) => {
    const areaLabel = event.target.dataset.area;
    oscillators[areaLabel].forEach((oscillator) => oscillator.stop());
  };

  return (
    <Layout showLinksBar={false}>
      <BaseAnimationPage title="Sound Texture">
        <SoundTexture.Content>
          <Draggable>
            <SoundTexture.Area
              data-area="smooth"
              width={300}
              height={400}
              color="blue"
              isHidden={areAreasHidden}
              onMouseEnter={onPlayTexture}
              onMouseLeave={onStopTexture}
            />
          </Draggable>
          <Draggable>
            <SoundTexture.Area
              data-area="bounce"
              width={700}
              height={200}
              color="red"
              isHidden={areAreasHidden}
              onMouseEnter={onPlayTexture}
              onMouseLeave={onStopTexture}
            />
          </Draggable>
          <Draggable>
            <SoundTexture.Area
              data-area="vibrate"
              width={200}
              height={400}
              color="green"
              isHidden={areAreasHidden}
              onMouseEnter={onPlayTexture}
              onMouseLeave={onStopTexture}
            />
          </Draggable>
        </SoundTexture.Content>
        <SoundTexture.ControlsPanel>
          <SoundTexture.ControlsHeader>
            <span>Controls</span>
            <SoundTexture.ControlsHeaderButton onClick={onToggleControls}>
              {areControlsExposed ? '–' : '+'}
            </SoundTexture.ControlsHeaderButton>
          </SoundTexture.ControlsHeader>
          <SoundTexture.ControlsContent isExposed={areControlsExposed}>
            {!audioContextStarted && (
              <SoundTexture.ControlPanelSection>
                <SoundTexture.FlashingButton
                  isSelected={isMuted}
                  onClick={onStartAudioContext}
                >
                  Activate Audio Context
                </SoundTexture.FlashingButton>
              </SoundTexture.ControlPanelSection>
            )}
            <SoundTexture.ControlPanelSection>
              <SoundTexture.Button isSelected={isMuted} onClick={onToggleMuted}>{isMuted ? 'Unmute' : 'Mute'}</SoundTexture.Button>
            </SoundTexture.ControlPanelSection>
            <SoundTexture.ControlPanelSection>
              <SoundTexture.Button isSelected={areAreasHidden} onClick={onToggleAreasHidden}>{areAreasHidden ? 'Show Areas' : 'Hide Areas'}</SoundTexture.Button>
            </SoundTexture.ControlPanelSection>
          </SoundTexture.ControlsContent>
        </SoundTexture.ControlsPanel>
      </BaseAnimationPage>
    </Layout>
  );
};

SoundTexture.Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

SoundTexture.Area = styled.div`
  height: ${(p) => (p.height)}px;
  width:  ${(p) => (p.width)}px;
  border: 1px solid ${(p) => (p.color)};
  box-shadow: 3px 3px 3px ${(p) => p.color};
  margin: 1rem;
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
`;

SoundTexture.ControlsPanel = styled.div`
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

SoundTexture.ControlsHeader = styled.div`
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

SoundTexture.ControlsHeaderButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

SoundTexture.ControlsContent = styled.div`
  display: ${(p) => (p.isExposed ? 'block' : 'none')};
`;

SoundTexture.ControlPanelSection = styled.div`
  padding: 0.5rem;
`;

SoundTexture.ControlRow = styled.div`
  display: flex;
  font-size: 0.75rem;
  flex-direction: column;
  margin: 0.5rem 0;

  :last-child {
    margin-bottom: 0;
  }
`;

SoundTexture.ControlLabel = styled.div`
  margin-bottom: 0.5rem;
`;

SoundTexture.ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const flashingBorder = keyframes`    
  from, to {    
    border-color: white;
  }    
  50% {    
    border-color: yellow;   
  }    
`;

SoundTexture.Button = styled.button`
  background: ${(p) => (p.isSelected ? 'rgba(0, 0, 255, 0.37)' : 'none')};
  color: white;
  text-transform: capitalize;
  border: 1px solid white;
  padding: 0.5rem;
  width: 100%;

  &:disabled {
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

SoundTexture.FlashingButton = styled(SoundTexture.Button)`
  animation: 0.5s ${flashingBorder} ease-out infinite;
`;

SoundTexture.Input = styled.input`
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

SoundTexture.SectionTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export default SoundTexture;
