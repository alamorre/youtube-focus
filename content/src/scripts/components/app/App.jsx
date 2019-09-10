import React, { Component } from 'react';

import BigButton from '../button';
import { HomeCover } from '../covers';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Render the Home Cover */}
        <HomeCover />

        {/* Render the Button */}
        <BigButton />
      </div>
    );
  }
}
