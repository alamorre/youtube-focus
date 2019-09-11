import React, { Component } from 'react';
import { connect } from 'react-redux';

// URL & Browser History components
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Custom imported components
import HomeCover from './home-cover';
import WatchCover from './watch-cover';
import SearchCover from './search-cover';

class PageCovers extends Component {
  render(){
    const { route } = this.props

    return(
      <div>
        {/* Pick the cover depending on the Route */}
        { route === '/' && <HomeCover /> }
        { route === '/watch' && <WatchCover /> }
        { route === '/results' && <SearchCover /> }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    route: state.route
  };
};

export default connect(mapStateToProps)(PageCovers);
