import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';
// import useWindowSize from '../../hooks/useWindowSize';

// Essentially, the number of cols
const NUM_WARPS = 20;

// The number of rows
const NUM_WEFTS = 15;

const WEAVE_PATTERN = [false, false, true, true];

const WEAVE_CARD = [...new Array(WEAVE_PATTERN.length - 1)].reduce((acc) => {
  const lastStepArray = [...acc[acc.length - 1]];
  const newPattern = [lastStepArray.pop(), ...lastStepArray];
  return [...acc, newPattern];
}, [WEAVE_PATTERN]);

const COLORS = { warp: 'brown', weft: 'darkgreen' };

const numNotes = NUM_WARPS * NUM_WEFTS;

const WovenNotes = () => {
  // const windowSize = useWindowSize();
  const notes = 1;

  // const numRows = 0;
  // const noteSize = 0;

  // useEffect(() => {
  //   windowSize.width / NUM_WARPS
  // }, [windowSize]);

  return (
    <Layout showLinksBar={false} showTitleNav={false}>
      <BaseAnimationPage title="Woven Notes">
        <WovenNotes.Container>
          <WovenNotes.NotesGridContainer numWarps={NUM_WARPS} numWefts={NUM_WEFTS}>
            {[...new Array(numNotes)].map((_, index) => {
              const row = Math.floor(index / NUM_WARPS);
              const col = index % NUM_WARPS;
              const isWarpThread = WEAVE_CARD[(NUM_WEFTS - row) % WEAVE_PATTERN.length][col % WEAVE_PATTERN.length];

              return (
                <WovenNotes.Note color={isWarpThread ? COLORS.warp : COLORS.weft} />
              );
            })}
          </WovenNotes.NotesGridContainer>
        </WovenNotes.Container>
      </BaseAnimationPage>
    </Layout>
  );
};

WovenNotes.Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

WovenNotes.NotesGridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(p) => p.numWarps}, 1fr);
  grid-template-rows: repeat(${(p) => p.numWefts}, 1fr);
  `;

WovenNotes.Note = styled.div`
  background: ${(p) => p.color};
`;

export default WovenNotes;
