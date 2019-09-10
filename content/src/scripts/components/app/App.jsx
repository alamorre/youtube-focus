import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'TOGGLE_FOCUS'
      });
    });
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        zIndex: 1000,
        bottom: '35px',
        right: '35px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          cursor: 'pointer',
          background: 'green',
          borderRadius: '80px',
          boxShadow: '4px 4px 4px grey'
      }}>
          { this.props.focus ? '1' : '0' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(App);
