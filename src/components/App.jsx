/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import Layout from './partials/Layout';
import Routes from '../Routes';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
