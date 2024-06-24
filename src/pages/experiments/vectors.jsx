import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';
import Sketch from '../../sketches/vectors';

const Vectors = () => (
  <Layout showLinksBar={false}>
    <BaseAnimationPage title="Vectors">
      <Vectors.Container id="canvasContainer">
        <Sketch />
      </Vectors.Container>
    </BaseAnimationPage>
  </Layout>
);

Vectors.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default Vectors;
