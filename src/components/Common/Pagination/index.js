/**
 * Created on 29/04/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './index.less';

const Pagination = ({ totalPage, currentPage }) => {
  const hasPrevPage = currentPage !== 1;
  const hasNextPage = currentPage !== totalPage;
  const prevPage = hasPrevPage ? currentPage - 1 : null;
  const nextPage = hasNextPage ? currentPage + 1 : null;
  return (
    <nav className="pagination">
      {hasPrevPage ? (
        <Link
          id="prev"
          to={{ pathname: '/', query: { page: prevPage } }}
        >
          上一页
        </Link>
      ) : null}
      {hasNextPage ? (
        <Link
          id="next"
          to={{ pathname: '/', query: { page: nextPage } }}
        >
          下一页
        </Link>
      ) : null}
      <div className="center">
        <Link id="archive" to="/archive">查看归档</Link>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
};

export default Pagination;
