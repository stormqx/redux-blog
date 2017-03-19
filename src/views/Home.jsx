/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import  Slogan  from '../components/public/Slogan';

@connect( state => ({
  articleList: state.Home.list.articleList,
  slogan: state.Home.title.slogan,
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
    <div className="home">
      <Slogan loadSlogan = { this.props.loadSlogan }  {...this.props.slogan} />
      <PreviewList { ...this.props }/>
    </div>
    );
  }
}

