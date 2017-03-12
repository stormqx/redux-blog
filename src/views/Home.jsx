/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';

@connect( state => ({
  articleList: state.Home.list.articleList,
}),actions)
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="home">
      <h1> Home adas</h1>
      <PreviewList { ...this.props }/>
    </div>
    );
  }
}

