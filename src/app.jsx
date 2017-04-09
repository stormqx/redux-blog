/**
 * Created on 07/03/2017.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './redux/configureStore';
import DevTools from './redux/DevTools';
require('font-awesome-webpack');



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div>
      {routes(history)}
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));