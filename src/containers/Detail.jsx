/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailAction } from '../redux/modules/detail';
import Article from '../components/Detail/Article';
import { getPathname } from '../utils';

@connect((state, ownProps) => {
  // get article pathName
  const pathName = getPathname(ownProps.location.pathname)[1];

  // get article content
  const article = state.detail.article;
  return { pathName, ...article } || {};
}, detailAction)
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
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

Detail.propTypes = {
};
