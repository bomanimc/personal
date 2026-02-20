import React from 'react';
import styled from 'styled-components';
import { BaseAnimationPage } from '../../../components/CommonComponents';
import Sketch from '../../../sketches/forces';

const Forces = () => (
  <BaseAnimationPage title="Forces">
    <Forces.Container id="canvasContainer">
      <Sketch />
    </Forces.Container>
  </BaseAnimationPage>
);

Forces.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default Forces;
