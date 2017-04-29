/**
 * Created on 29/04/2017.
 */

import React from 'react';


export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <nav className="pagination">
        <a id="prev" href="/">上一页</a>
        <div className="archive">
          <a id="archive" href="/archive">查看归档</a>
        </div>
        <a id="next" href="/">下一页</a>
      </nav>
    );
  }
}