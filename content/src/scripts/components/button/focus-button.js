import React, { Component } from 'react';

import { styles } from './styles';
import { Icon } from 'antd';

class FocusButton extends Component {
  render(){
    return (
      <div style={ styles.button }>
        <div
          id='focus-button'
          style={{
            width: '80px',
            height: '80px',
            cursor: 'pointer',
            background: '#f5222d',
            borderRadius: '80px',
            boxShadow: '4px 4px 4px grey',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'relative', top: '8px' }}>
            {/* Icon to Focus */}
            <Icon
              type="coffee"
              style={{
                color: '#fff',
                fontSize: '26px',
                position: 'relative',
                top: '8px'
              }}
            />

            {/* Focus Text */}
            <div style={{ color: '#fff', fontSize: '14px', fontWeight: '400', position: 'relative', top: '3px' }}>
              Focus
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FocusButton;
