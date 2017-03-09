/**
 * Created on 08/03/2017.
 */
import React from 'react';
import Nav from './Nav';


export default class Frame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Frame">
        <section className="header">
          <Nav/>
        </section>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}