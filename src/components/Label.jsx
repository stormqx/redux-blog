/**
 * Created on 08/06/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import config from '../../config';

const Label = ({ tag }) => (
  <div className="label">
    <span className="icon" style={{ background: config.themeColor }}> <i className="fa fa-tag"></i></span>
    <Link className="content" to={`/tag/${tag}`} >{tag}</Link>
  </div>
);

Label.propTypes = {
  tag: PropTypes.string,
};

export default Label;
