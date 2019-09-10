import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnfocusButton extends Component {
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
          background: 'grey',
          borderRadius: '80px',
          boxShadow: '4px 4px 4px grey',
        }}>
          
        </div>
      </div>
    )
  }
}

export default UnfocusButton
