/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Layout from './partials/Layout';
import Routes from '../Routes';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const { location } = this.props;
    const { hash } = location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        hash.replace('#', '');
        // eslint-disable-next-line no-restricted-globals
        window.history.replaceState(
          '',
          document.title,
          window.location.origin + window.location.pathname + window.location.search,
        );
      }, 0);
    }
  }

  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};


export default withRouter(App);
