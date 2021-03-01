
import React, { useState } from 'react';
import Layout from '../../components/layout';
import SketchWrapper from '../../components/partials/SketchWrapper';

const Vasoconstriction = () => {
  const [sketch, setSketch] = useState();
  import(`../../../scripts/sketches/test.js`).then((result) => setSketch(result));

  return sketch
    ? <Layout><SketchWrapper sketch={sketch.default} /></Layout>
    : <Layout><div>Loading</div></Layout>;
};

export default Vasoconstriction;
