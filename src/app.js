/**
 * Created on 07/03/2017.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <div>
      {routes}
    </div>
  </Provider>
), document.getElementById('root'));