/**
 * Created on 08/03/2017.
 */
import React from 'react';
import LeftNav from 'components/Common/LeftNav/index';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div id="app-content">
    <LeftNav />
    <section className="container">
      {children}
    </section>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};


export default App;
