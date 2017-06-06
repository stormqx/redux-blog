/**
 * Created on 09/03/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class Preview extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }

  render() {
    return (
      <article className="article-preview-item">
        <Link className="title" to={`/detail/${this.props.pathName}`} >{this.props.title}</Link>
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
  pathName: PropTypes.string,
};