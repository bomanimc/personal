import React from 'react';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

const VasoconstrictionSketch = Loadable(() => import('../../noc-sketches/vasoconstriction'));

const Vasoconstriction = () => {
  // if (typeof window === 'undefined') return null;

  return (
    <VasoconstrictionSketch />
    // <Layout showLinksBar={false}>
    //   <BaseAnimationPage title="Vasoconstriction">
    //     <Vasoconstriction.Container>
    //       {/* <VasoconstrictionSketch /> */}
    //     </Vasoconstriction.Container>
    //   </BaseAnimationPage>
    // </Layout>
  );
};

Vasoconstriction.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default Vasoconstriction;
