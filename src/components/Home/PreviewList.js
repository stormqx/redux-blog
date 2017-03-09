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
  };

  componentDidMount() {
    // this.props.loadArticle();
  }

  render() {

    return (
      <div className="article-preview-list">
        {this.props.articleList.map( item => (
          <Preview {...item} key = {item.id}/>
        ))}
      </div>
    );
  }
}