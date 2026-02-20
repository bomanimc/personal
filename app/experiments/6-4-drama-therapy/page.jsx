import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../../components/commonComponents';
import Sketch from '../../../sketches/forces';

const Forces = () => (
  <Layout showLinksBar={false}>
    <BaseAnimationPage title="Roles - Drama Therapy">
      <Forces.Container id="canvasContainer">
        <Sketch />
      </Forces.Container>
    </BaseAnimationPage>
  </Layout>
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
