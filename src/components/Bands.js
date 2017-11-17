import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {

    const mappedBands = this.props.store.getState().bands.map((band,idx) => <Band band={band} store={this.props.store}/>)

    return(
      <div>
        <ul>
          Bands Component
          {mappedBands}
        </ul>
      </div>
    );
  }
};

export default Bands;
