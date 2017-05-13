/**
 * Created on 29/04/2017.
 */

import React from 'react';
import { Link } from 'react-router';

const Pagination = () => {
  const prevPage = '1';
  const nextPage = '3';
  return (
    <nav className="pagination">
      <Link
        id="prev"
        to={{ pathname: '/', query: { page: prevPage } }}
      >
        上一页
      </Link>
      <Link
        id="next"
        to={{ pathname: '/', query: { page: nextPage } }}
      >
        下一页
      </Link>
      <div className="center">
        <Link id="archive" to="/archive">查看归档</Link>
      </div>
    </nav>
  );
};

export default Pagination;
