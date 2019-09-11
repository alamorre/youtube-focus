import React, { Component } from 'react'
import { connect } from 'react-redux';

class WatchCover extends Component {
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
          right: '0px',
          height: '100vh',
          width: '35vw',
          background: 'white',
          zIndex: 999
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

export default connect(mapStateToProps)(WatchCover);
