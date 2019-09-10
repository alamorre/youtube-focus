import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(App);
