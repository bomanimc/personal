/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
