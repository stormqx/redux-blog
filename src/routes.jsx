/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Tag from './containers/Tag';
import Archive from './containers/Archive';
import About from './containers/About';
import Detail from './containers/Detail';


const routes = (browserHistory) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tag" component={Tag} />
      <Route path="archive" component={Archive} />
      <Route path="about" component={About} />
    </Route>
    <Route path="/detail/:id" component={Detail} />
  </Router>
);

export default routes;