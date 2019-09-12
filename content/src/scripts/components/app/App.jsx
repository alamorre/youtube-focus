import React, { Component } from 'react';
import { connect } from 'react-redux';

import BigButton from '../button';
import PageCovers from '../covers';

class App extends Component {
  /**
  * Update the current route three times a second
  */
  componentDidMount(){
    document.addEventListener('click', () => {
      // Prepare Theatre in fron of button
      this.props.dispatch({ type: 'PREP_THEATRE' });
    });

    // Keep updating the URL
    setInterval(function(){
      this.props.dispatch({
        type: 'SET_ROUTE',
        payload: window.location.pathname
      });
    }.bind(this), 333);
  }

  componentDidUpdate(){
    // Lower bar is Focusing and on Home
    if(this.props.focus && this.props.route === '/'){
      this.props.dispatch({ type: 'LOWER_SEARCH' });
    } else {
      this.props.dispatch({ type: 'RAISE_SEARCH' });
    }
  }

  render() {
    return (
      <div id='app-container'>
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
    focus: state.focus,
    route: state.route
  };
};

export default connect(mapStateToProps)(App);
