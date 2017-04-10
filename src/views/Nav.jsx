/**
 * Created on 08/03/2017.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

  render() {
    return (
      <nav>
        <Link to="/">Skill</Link>
        <Link to="/">Life</Link>
        <Link to="/">About</Link>
      </nav>
    );
  }
}