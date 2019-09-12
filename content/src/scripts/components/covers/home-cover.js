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
          zIndex: 99,
          textAlign: 'center'
        }}
      >
        <img
          alt='youtube-focus-logo'
          src='https://houseprojectuploads.s3.ca-central-1.amazonaws.com/public/youtube-focus-logo.png'
          style={{ width: '400px', position: 'relative', top: '22vh' }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(HomeCover);
