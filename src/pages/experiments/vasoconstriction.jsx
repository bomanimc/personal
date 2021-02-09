import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';
import VasoconstrictionSketch from '../../noc-sketches/vasoconstriction';

// import { loadableP5 as P5Wrapper } from '../../components/loadable';
const LoadableP5 = loadable(() => import('react-p5-wrapper'));

const Vasoconstriction = () => (
  <Layout showLinksBar={false}>
    <BaseAnimationPage title="Vasoconstriction">
      <Vasoconstriction.Container>
        <LoadableP5 sketch={VasoconstrictionSketch} />
      </Vasoconstriction.Container>
    </BaseAnimationPage>
  </Layout>
);

Vasoconstriction.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default Vasoconstriction;
