/**
 * Created on 08/06/2017.
 */

import React from 'react';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>todo: {this.props.params.tag}</div>
    );
  }
}

