/**
 * Created on 09/03/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Preview extends React.Component {

  constructor(props) {
    super(props);

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
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
          onClick={() => this.handleNavigate(this.props.id)}
        >{this.props.title}</a>
        <span className="date">
          <i className="post-date fa fa-calendar" aria-hidden="true"></i>
          {this.props.date}
        </span>
        <p className="description">{this.props.description}</p>
      </article>
    );
  }
}

Preview.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  push: PropTypes.func,
};