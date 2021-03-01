/* eslint-disable global-require */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SketchWrapper = (props) => {
  const [isSSR, setIsSSR] = useState(true);
  const sketchRef = useRef();

  useEffect(() => {
    // Run! Like go get some data from an API.
    const p5 = require('p5');
    new p5(props.sketch, sketchRef.current);
    console.log('USE EFFECT RAN');
    setIsSSR(false);
  });

  return isSSR ? null : <div ref={sketchRef} />;
};

SketchWrapper.propTypes = {
  sketch: PropTypes.func.isRequired,
};

export default SketchWrapper;
