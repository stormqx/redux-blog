/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Detail from '../views/Detail';
import Home from '../views/Home';

 const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/detail/:id" component={Detail}/>
  </Router>
);

export default routes;