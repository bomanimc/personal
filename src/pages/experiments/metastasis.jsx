import React from 'react';
import styled from 'styled-components';
import Sketch from 'react-p5';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

const Metastasis = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.ellipse(400, 400, 400, 400);
  };

  return (
    <Layout showLinksBar={false}>
      <BaseAnimationPage title="Metastasis">
        <Metastasis.Container>
          <Sketch setup={setup} draw={draw} />
        </Metastasis.Container>
      </BaseAnimationPage>
    </Layout>
  );
};

Metastasis.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Metastasis;
