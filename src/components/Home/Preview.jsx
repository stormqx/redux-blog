/**
 * Created on 09/03/2017.
 */

import React from 'react';

export default class Preview extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    push: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(id, e) {
    e.preventDefault();

    // 使用react-router-redux提供的跳转方法，更新store。
    this.props.push(`/detail/${id}`);
  }

  render() {
    return (
      <article className="article-preview-item">
        <a
          className="title"
          href={`/detail/${this.props.id}`}
          onClick={this.handleNavigate.bind(this, this.props.id)}
        >{this.props.title}</a>
        <span className="date">{this.props.date}</span>
        <p className="description">{this.props.description}</p>
      </article>
    );
  }
}