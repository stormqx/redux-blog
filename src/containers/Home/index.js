/**
 * Created on 07/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PreviewList from 'components/Home/PreviewList/index';
import Pagination from 'components/Common/Pagination';
import {
  loadPreviewList,
  setCurrentPage,
} from './actions';


@connect((state) => ({
  ...state.home,
}), {
  loadPreviewList,
  setCurrentPage,
})
export default class Home extends React.Component {

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const listProps = {
      ...this.props,
    };
    const paginationProps = {
      totalPage: this.props.totalPage,
      currentPage: this.props.currentPage,
    };
    return (
      <div className="home-content">
        <PreviewList {...listProps} />
        <Pagination {...paginationProps} />
      </div>
    );
  }
}

Home.propTypes = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
};
