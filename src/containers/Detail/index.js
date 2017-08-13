/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { getPathname } from 'utils';
import Article from 'components/Detail/Article/index';
import { loadArticle } from './actions';


@connect((state, ownProps) => {
  // get article pathName
  const pathName = getPathname(ownProps.location.pathname)[1];

  // get article content
  const article = state.detail.article;
  return { pathName, ...article } || {};
}, { loadArticle })
export default class Detail extends React.Component {

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const articleProps = {
      ...this.props,
    };
    return (
      <div className="detail-content">
        <Article {...articleProps} />
      </div>
    );
  }
}

