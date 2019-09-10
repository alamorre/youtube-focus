import React, { Component } from 'react'

// URL & Browser History components
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

// Custom imported components
import HomeCover from './home-cover';
import WatchCover from './watch-cover';
import SearchCover from './search-cover';

class PageCovers extends Component {
  render(){
    return(
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path='/results' component={SearchCover} />
          <Route path='/watch' component={WatchCover} />
          <Route path='/' component={HomeCover} />
        </Switch>
      </Router>
    )
  }
};

export default PageCovers;
