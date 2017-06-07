/**
 * Created on 09/03/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';


export default class PreviewList extends React.Component {
  componentDidMount() {
    // respond to parameter change in scenario: '/' -> 'user/?page=1'
    const { page } = this.props.location.query;
    this.props.setCurrentPage(page);
    this.props.loadArticles(page);
  }

  componentDidUpdate(prevProps) {
    // respond to parameter change in scenario: 'user/page=1' -> '${url}?page=2'
    const oldPage = prevProps.location.query.page;
    const newPage = this.props.location.query.page;
    if (oldPage !== newPage) {
      this.props.setCurrentPage(newPage);
      this.props.loadArticles(newPage);
    }
  }

  render() {
    const { loading, error, articleList } = this.props;
    // if (loading) {
    //   return (<p>Loading...</p>);
    // }

    if (error) {
      return (<p>something is wrong.</p>);
    }

    return (
      <div className="article-preview-list">
        {articleList && articleList.map((item) => (
          <Preview {...item} push={this.props.push} key={item.id} />
        ))}
      </div>
    );
  }
}

PreviewList.propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.object),
  loadArticles: PropTypes.func,
  setCurrentPage: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};
