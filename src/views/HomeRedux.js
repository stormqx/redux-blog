/**
 * Created on 09/03/2017.
 */
import { combineReducers } from 'redux';


// 引入reducer和actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux';
import title, { loadSlogan } from '../components/public/PublicRedux';

// reducer
export default combineReducers({
  list,
  title,
});

// actionCreator
export const actions = {
  loadArticles,
  loadSlogan,
};

