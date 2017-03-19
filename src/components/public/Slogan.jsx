/**
 * Created on 19/03/2017.
 */

import React from 'react';

export default class Slogan extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadSlogan();
  }


  render() {
    return (
      <h1 className="slogan">
        {this.props.slogan}
      </h1>
    );
  }
}