/**
 * Created on 07/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { homeAction } from '../redux/modules/home';
import PreviewList from '../components/PreviewList';
import Pagination from '../components/Pagination';

@connect((state) => ({
  ...state.home,
}), {
  ...homeAction,
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listProps = {
      ...this.props,
    }
    const paginationProps = {
      totalPage: this.props.totalPage,
      currentPage: this.props.currentPage,
    }
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
