/**
 * Created on 09/03/2017.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => (
      Promise.resolve({
        action,
        result: data,
      })
    ));
  },
});

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(browserHistory)),
  DevTools.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  return store;
}
