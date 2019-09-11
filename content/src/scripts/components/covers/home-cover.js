import React, { Component } from 'react'
import { connect } from 'react-redux';

class HomeCover extends Component {
  render(){
    {/* Cover Nothing if Unfocused */}
    if(!this.props.focus){
      return <div id='not-focused-no-cover' />
    }

    {/* Cover Everything if Focused */}
    return(
      <div
        id='home-cover'
        style={{
          position: 'fixed',
          top: '0px',
          height: '100vh',
          width: '100vw',
          background: 'white',
          zIndex: 99
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(HomeCover);
