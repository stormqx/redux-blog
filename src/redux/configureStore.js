/**
 * Created on 09/03/2017.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import clientMiddleware from './middlewares/clientMiddleware';
import ApiClient from '../helpers/ApiClient';

const client = new ApiClient();
const middleware = [
  clientMiddleware(client),
  ThunkMiddleware,
  routerMiddleware(browserHistory),
];


const devCreateStore = compose(
  applyMiddleware(...middleware),
)(createStore);

const prodCreateStore = compose(
  applyMiddleware(...middleware),
)(createStore);

const finalCreateStore = __DEVTOOLS__ ? devCreateStore : prodCreateStore; // eslint-disable-line no-undef


const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  return finalCreateStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
  );
}
