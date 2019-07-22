/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './partials/Layout';

class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        {children}
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
