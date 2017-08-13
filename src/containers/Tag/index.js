/**
 * Created on 08/06/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Tag extends React.Component {

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>todo: {this.props.params.tag}</div>
    );
  }
}

Tag.propTypes = {
  params: PropTypes.object,
};

