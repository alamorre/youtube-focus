import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
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
          background: 'green', 
          borderRadius: '80px',
          boxShadow: '4px 4px 4px grey' }}
        >
          {this.props.count}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
