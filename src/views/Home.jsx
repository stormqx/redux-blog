/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { actions } from './HomeRedux';
import PullView from '../components/Home/PullView';


@connect( state => ({
  articleList: state.pullView.articleList
}),{
  push,
  ...actions,
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <PullView { ...this.props }/>
    );
  }
}

