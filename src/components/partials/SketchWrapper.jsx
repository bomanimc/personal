/* eslint-disable global-require */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const SketchWrapper = (props) => {
  const p5 = typeof window !== 'undefined' ? require('p5') : null;
  if (!p5) return null;

  const sketchRef = useRef();
  useEffect(() => {
    // eslint-disable-next-line no-new
    new p5(props.sketch, sketchRef.current);
  }, []);

  return <div ref={sketchRef} />;
};

SketchWrapper.propTypes = {
  sketch: PropTypes.func.isRequired,
};

export default SketchWrapper;
