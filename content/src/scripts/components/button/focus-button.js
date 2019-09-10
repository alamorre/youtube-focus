import React, { Component } from 'react';

import { styles } from './styles';

import { styles } from './styles';

class FocusButton extends Component {
  constructor(props) {
    super(props);
  }

  onButtonClick(){
    this.props.dispatch({
      type: 'TOGGLE_FOCUS'
    });
  }

  render(){
    return (
<<<<<<< HEAD
      <div style={ styles.button }>
        <div style={{
          width: '80px',
          height: '80px',
          cursor: 'pointer',
          background: 'green',
          borderRadius: '80px',
          boxShadow: '4px 4px 4px grey'
        }}>

=======
      <div style={ styles.buttonLocation } onClick={ this.onButtonClick.bind(this) }>
        <div style={ styles.button }>
          <div style={ styles.buttonText }>
            Focus
          </div>
>>>>>>> origin/master
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(FocusButton);
