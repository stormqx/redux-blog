/**
 * Created on 07/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
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
    return (
      <div className="home-content">
        <PreviewList {...this.props} />
        <Pagination />
      </div>
    );
  }
}

