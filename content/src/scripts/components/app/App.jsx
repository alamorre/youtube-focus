import React, { Component } from 'react';

import BigButton from '../button';
import PageCovers from '../covers';

export default class App extends Component {
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
