/**
 * Created on 09/03/2017.
 */

import React from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';

export default class PreviewList extends React.Component {
  static propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object),
    loadArticles: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  };

  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articleList } = this.props;
    if (loading) {
      return (<p>Loading...</p>);
    }

    if (error) {
      return (<p>something is wrong.</p>);
    }

    return (
      <div className="article-preview-list">
        {articleList && articleList.map( item => (
          <Preview {...item} push={this.props.push} key={item.id}/>
        ))}
      </div>
    );
  }
}