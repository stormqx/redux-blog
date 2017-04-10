/**
 * Created on 09/03/2017.
 */

// 引入reducer和actionCreator
import pullView, { pullViewActions } from '../components/Home/PullViewRedux';


// reducer
export default pullView;

// actionCreator
export const actions = {
  ...pullViewActions,
};

