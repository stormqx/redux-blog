/**
 * Created on 08/03/2017.
 */

import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}