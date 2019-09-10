import React, { Component } from 'react';

import { styles } from './styles';

class UnfocusButton extends Component {
  render(){
    return (
      <div style={ styles.button }>
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