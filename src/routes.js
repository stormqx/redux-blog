/**
 * Created on 07/03/2017.
 */

import React from 'react';
import { Router, Route, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './App';
import Home from './containers/Home/index';
import Tags from './containers/Tags/index';
import Tag from './containers/Tag/index';
import Archive from './containers/Archive/index';
import About from './containers/About/index';
import Detail from './containers/Detail/index';

const routes = (browserHistory) => (
  <Router
    history={browserHistory}
    render={
      // Scroll to top when going to a new page, imitating default browser
      // behaviour
      applyRouterMiddleware(useScroll())
    }
  >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tags" component={Tags} />
      <Route path="tag/:tag" component={Tag} />
      <Route path="archive" component={Archive} />
      <Route path="about" component={About} />
      <Route path="/detail/:id" component={Detail} />
    </Route>

  </Router>
);

export default routes;
