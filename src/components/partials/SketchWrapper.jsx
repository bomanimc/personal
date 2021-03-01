import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

const SketchWrapper = (props) => {
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
