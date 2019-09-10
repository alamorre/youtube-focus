import React, { Component } from 'react';

import FocusButton from './focus-button'
import UnfocusButton from './unfocus-button'

class BigButton extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
  }

  onButtonClick(){
    this.props.dispatch({
      type: 'TOGGLE_FOCUS'
    });
  }

=======
>>>>>>> origin/master
  render(){
    return(
      <div id='button-toggler' onClick={this.onButtonClick.bind(this)}>
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
