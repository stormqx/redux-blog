/**
 * Created on 08/03/2017.
 */
import React from 'react';
import LeftNav from './components/LeftNav';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-content">
        <LeftNav/>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}