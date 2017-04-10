/**
 * Created on 19/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { loadSlogan } from './SloganRedux';

@connect( state => ({
  slogan: state.Header.slogan,
}),{
  loadSlogan,
})
export default class Slogan extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadSlogan();
  }


  render() {
    return (
      <div className="slogan">
        {this.props.slogan}
      </div>
    );
  }
}