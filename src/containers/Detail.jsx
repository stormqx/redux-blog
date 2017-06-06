/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { getPathname } from '../utils';

@connect((state, ownProps) => {
  const articleList = state.home.articleList;
  const pathName = getPathname(ownProps.location.pathname)[1];
  const article = articleList.filter((art) => art.pathName === pathName)[0];
  return article || {};
})
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.dir(this.props);
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
    );
  }
}