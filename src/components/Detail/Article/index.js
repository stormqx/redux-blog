/**
 * Created on 10/06/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Article extends React.Component {
  componentDidMount() {
    this.props.loadArticle(this.props.pathName);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pathName !== this.props.pathName) {
      this.props.loadArticle(this.props.pathName);
    }
  }

  render() {
    return (
      <div className="article">
        <span className="date">
          {this.props.updatedAt}
        </span>
        <h1 className="title">{this.props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} ></div>
      </div>
    );
  }
}

Article.propTypes = {
  loadArticle: PropTypes.func,
  pathName: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  updatedAt: PropTypes.string,
};
