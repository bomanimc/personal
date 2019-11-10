import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.any.isRequired,
};

export default withRouter(ScrollToTop);
