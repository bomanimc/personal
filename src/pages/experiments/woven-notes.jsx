import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';
// import useWindowSize from '../../hooks/useWindowSize';

// Essentially, the number of cols
const NUM_WARPS = 100;

// The number of rows
const NUM_WEFTS = 75;

const WEAVE_PATTERN = [true, true, false, true];

const WEAVE_CARD = [...new Array(WEAVE_PATTERN.length - 1)].reduce((acc) => {
  const lastStepArray = [...acc[acc.length - 1]];
  const newPattern = [lastStepArray.pop(), ...lastStepArray];
  return [...acc, newPattern];
}, [WEAVE_PATTERN]);

const COLORS = { warp: 'pink', weft: 'red' };

const numNotes = NUM_WARPS * NUM_WEFTS;

const WovenNotes = () => (
  <Layout showLinksBar={false} showTitleNav={false}>
    <BaseAnimationPage title="Woven Notes">
      <WovenNotes.Container>
        <WovenNotes.NotesGridContainer numWarps={NUM_WARPS} numWefts={NUM_WEFTS}>
          {[...new Array(numNotes)].map((_, index) => {
            const row = Math.floor(index / NUM_WARPS);
            const col = index % NUM_WARPS;
            const weaveCardRowIndex = (NUM_WEFTS - row) % WEAVE_PATTERN.length;
            const weaveCardColIndex = col % WEAVE_PATTERN.length;
            const isWarpThread = WEAVE_CARD[weaveCardRowIndex][weaveCardColIndex];
            const shouldFoldUnder = (() => {
              if (row === 0 || row === NUM_WEFTS - 1 || col === 0 || col === NUM_WARPS - 1) {
                return false;
              }

              const positionBelowIsWarp = WEAVE_CARD[(weaveCardRowIndex + 1) % WEAVE_CARD.length][weaveCardColIndex] === true;
              const positionBesideIsWeft = WEAVE_CARD[weaveCardRowIndex][weaveCardColIndex % WEAVE_PATTERN.length] === true;

              return isWarpThread ? positionBelowIsWarp : positionBesideIsWeft;
            })();

            return (
              <WovenNotes.Note>
                <WovenNotes.NoteContent
                  isWarp={isWarpThread}
                  color={isWarpThread ? COLORS.warp : COLORS.weft}
                  shouldFoldUnder={shouldFoldUnder}
                />
              </WovenNotes.Note>
            );
          })}
        </WovenNotes.NotesGridContainer>
      </WovenNotes.Container>
    </BaseAnimationPage>
  </Layout>
);

WovenNotes.Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  /* background: white; */
`;

WovenNotes.NotesGridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(p) => p.numWarps}, 1fr);
  grid-template-rows: repeat(${(p) => p.numWefts}, 1fr);
`;

WovenNotes.Note = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

WovenNotes.NoteContent = styled.div`
  background: ${(p) => p.color};
  height: ${(p) => (p.isWarp ? '90%' : '100%')};
  width: ${(p) => (p.isWarp ? '100%' : '90%')};
`;

export default WovenNotes;
