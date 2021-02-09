import React from 'react';
import loadable from '@loadable/component';
import VasoconstrictionSketch from '../noc-sketches/vasoconstriction';

// import { loadableP5 as P5Wrapper } from '../../components/loadable';
const LoadableP5 = loadable(() => import('react-p5-wrapper'));

const VasoconstrictionComponent = () => (
  <LoadableP5 sketch={VasoconstrictionSketch} />
);

export default VasoconstrictionComponent;
