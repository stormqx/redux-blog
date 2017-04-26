/**
 * Created on 08/03/2017.
 */
import React from 'react';
import RightNav from './components/RightNav';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-content">
        <RightNav/>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}