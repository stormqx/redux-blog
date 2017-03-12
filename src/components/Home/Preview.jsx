/**
 * Created on 09/03/2017.
 */

import React from 'react';

export default class Preview extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">{this.props.title}</h1>
        <span className="date">{this.props.date}</span>
        <p className="description">{this.props.description}</p>
      </article>
    );
  }
}