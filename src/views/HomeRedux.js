/**
 * Created on 09/03/2017.
 */
import { combineReducers } from 'redux';


//引入reducer和actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux';

//reducer
export default combineReducers({
  list,
});

//actionCreator
export const actions = {
  loadArticles,
};

