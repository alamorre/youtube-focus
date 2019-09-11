import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchCover extends Component {
  render(){
    {/* Cover Nothing if Unfocused */}
    if(!this.props.focus){
      return <div id='not-focused-no-search-cover' />
    }

    {/* Cover Everything if Focused */}
    return(
      <div />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus
  };
};

export default connect(mapStateToProps)(SearchCover);
