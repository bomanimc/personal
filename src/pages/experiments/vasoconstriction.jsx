import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

import { loadableP5 as P5Wrapper } from '../../components/loadable';
import VasoconstrictionSketch from '../../noc-sketches/vasoconstriction';

const Vasoconstriction = () => (
  <Layout showLinksBar={false}>
    <BaseAnimationPage title="Vasoconstriction">
      <Vasoconstriction.Container>
        <P5Wrapper sketch={VasoconstrictionSketch} />
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
