/**
 * Created on 09/03/2017.
 */

import React from 'react';
import Preview from './Preview';

export default class PreviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func,
    loading: React.PropTypes.bool,
    error: React.PropTypes.bool,
  };

  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articleList } = this.props;

    if(loading) {
      return <p>Loading...</p>
    }

    if(error) {
      return <p>something is wrong.</p>
    }

    return (
      <div className="article-preview-list">
        {articleList.map( item => (
          <Preview {...item} key = {item.id}/>
        ))}
      </div>
    );
  }
}