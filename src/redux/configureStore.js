/**
 * Created on 09/03/2017.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import DevTools from './DevTools';

const middleware = [ThunkMiddleware, routerMiddleware(browserHistory)];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
)(createStore);

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
