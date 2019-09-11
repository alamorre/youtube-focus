import React, { Component } from 'react';
import { connect } from 'react-redux';

import BigButton from '../button';
import PageCovers from '../covers';

class App extends Component {
  /**
  * Update the current route three times a second
  */
  componentDidMount(){
    setInterval(function(){
      console.log(this.props.route)

      this.props.dispatch({
        type: 'SET_ROUTE',
        payload: window.location.pathname
      });
    }.bind(this), 333);
  }

  render() {
    return (
      <div>
        {/* Render the Home Cover */}
        <PageCovers />

        {/* Render the Button */}
        <BigButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  };
};

export default connect(mapStateToProps)(App);
