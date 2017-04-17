/**
 * Created on 08/03/2017.
 */
import React from 'react';
import Nav from '../views/Nav';
import Slogan from '../views/Slogan';


export default class Frame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Frame">
        <Nav/>
        <Slogan/>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}