/**
 * Created on 09/03/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Label from './Label';
import config from '../../config';

export default class Preview extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }

  render() {
    const { tags } = this.props;
    return (
      <article className="article-preview-item">
        <span className="date">
          {this.props.updatedAt}
        </span>
        <Link className="title" to={`/detail/${this.props.pathName}`}>
          {this.props.title}
        </Link>
        {tags && tags.map((tag) => <Label key={tag} tag={tag} />)}
        <p className="description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
        <Link style={{ color: config.themeColor }} to={`/detail/${this.props.pathName}`}>阅读更多 »</Link>
      </article>
    );
  }
}

Preview.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  pathName: PropTypes.string,
  updatedAt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};