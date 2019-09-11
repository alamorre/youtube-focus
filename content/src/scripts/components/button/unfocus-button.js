import React, { Component } from 'react';

import { styles } from './styles';
import { Icon } from 'antd';

class UnfocusButton extends Component {
  render(){
    return (
      <div style={ styles.button }>
        <div style={{
          width: '80px',
          height: '80px',
          cursor: 'pointer',
          background: '#fff',
          border: '2px solid #f5222d',
          borderRadius: '80px',
          boxShadow: '4px 4px 4px grey',
          textAlign: 'center',
        }}>
          <div style={{ position: 'relative', top: '8px' }}>
            {/* Icon to Focus */}
            <Icon
              type="rollback"
              style={{
                color: '#f5222d',
                fontSize: '26px',
                position: 'relative',
                top: '8px'
              }}
            />

            {/* Focus Text */}
            <div style={{ color: '#f5222d', fontSize: '14px', fontWeight: '400', position: 'relative', top: '3px' }}>
              Reset
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UnfocusButton;
