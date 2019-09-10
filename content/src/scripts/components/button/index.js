import React, { Component } from 'react';
import { connect } from 'react-redux';

import FocusButton from './focus-button'
import UnfocusButton from './unfocus-button'

class BigButton extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'TOGGLE_FOCUS'
      });
    });
  }

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

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(BigButton);
