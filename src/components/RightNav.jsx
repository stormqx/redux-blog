/**
 * Created on 26/04/2017.
 */

import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class RightNav extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <aside id="right-nav">
        <span className="title">stormQx</span>
        <ul className="buttons">
          <li><IndexLink to="/">首页</IndexLink></li>
          <li><Link to="/archive">归档</Link></li>
          <li><Link to="/tag">标签</Link></li>
          <li><Link to="/about">关于</Link></li>
        </ul>
      </aside>
    );
  }
}