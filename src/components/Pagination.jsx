/**
 * Created on 29/04/2017.
 */

import React from 'react';
import { Link } from 'react-router';


export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <nav className="pagination">
        <Link id="prev" to="/">上一页</Link>
        <Link id="next" to="/">下一页</Link>
        <div className="center">
        <Link id="archive" to="/archive">查看归档</Link>
        </div>

      </nav>
    );
  }
}