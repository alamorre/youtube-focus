import React, { Component } from 'react';

import FocusButton from './focus-button'
import UnfocusButton from './unfocus-button'

class BigButton extends Component {
  render(){
    return(
      <div>
        {/* If not focused render Focus Button else render Unfocus Button */}
        {
          !this.props.focus ?
          <FocusButton /> :
          <UnfocusButton />
        }
      </div>
    )
  }
}

export default BigButton;
