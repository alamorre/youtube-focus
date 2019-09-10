import React, { Component } from 'react';
import { connect } from 'react-redux';

class FocusButton extends Component {
  render(){
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
          Focus
        </div>
      </div>
    )
  }
}

export default FocusButton
