/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Frame from '../layouts/Frame';
import Detail from '../views/Detail';
import Home from '../views/Home';

 const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
    </Route>
  </Router>
);

export default routes;