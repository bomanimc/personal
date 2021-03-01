
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import SketchWrapper from '../../components/partials/SketchWrapper';

const Vasoconstriction = () => {
  const [sketch, setSketch] = useState();

  // import('../../../scripts/sketches/test.js').then((result) => setSketch(result));
  useEffect(() => {
    console.log('Sketch Wrapper USE EFFECT RAN');
    // const p5Sketch = require('../../../scripts/sketches/test.js');
    // console.log(p5Sketch);
    // setSketch(p5Sketch);
  }, []);

  return sketch
    ? <Layout><SketchWrapper sketch={sketch.default} /></Layout>
    : <Layout><div>Loading</div></Layout>;
};

export default Vasoconstriction;
