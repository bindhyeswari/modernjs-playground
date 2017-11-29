// External Modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Internal Modules

const {object} = PropTypes;

class MyApp extends Component {
  static displayName  = 'MyApp';
  static propTypes    = {};
  static defaultProps = {};

  render() {
    return (
      <div>Hello World from My App!</div>
    );
  }
}

export default MyApp;
