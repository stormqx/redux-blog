/**
 * Created on 08/03/2017.
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import  classNames from 'classnames';

@connect( state => ({
    navIsShow: state.pullView.navIsShow
  })
)

export default class Nav extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.navIsShow != this.props.navIsShow;
  }

  render() {

    let classes =  classNames({
      'nav': true,
      'nav-show': this.props.navIsShow
    });

    return (
      <nav className={ classes }>
        <Link id="logo" to="/">
          <img id="navicon" src="images/navicon.svg"/>
          stormQx
        </Link>
        <nav className="list">
          <li><Link to="/">Skill</Link></li>
          <li><Link to="/">Life</Link></li>
          <li><Link to="/">About</Link></li>
        </nav>
      </nav>
    );
  }
}