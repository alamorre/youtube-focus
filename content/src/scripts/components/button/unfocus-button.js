import React, { Component } from 'react';
import { connect } from 'react-redux';

import { styles } from './styles';

class UnfocusButton extends Component {
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
      <div style={ styles.buttonLocation } onClick={ this.onButtonClick.bind(this) }>
        <div style={ styles.button }>
          <div style={ styles.buttonText }>
            Unfocus
          </div>
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

export default connect(mapStateToProps)(UnfocusButton);
