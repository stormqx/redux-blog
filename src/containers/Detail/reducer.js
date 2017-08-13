/**
 * Created on 10/06/2017.
 */
import {
  SET_ARTICLE,
  SET_ARTICLE_SUCCESS,
  SET_ARTICLE_ERROR,
} from './constants';

// ------- reducer ---------
export default function detail(state = {}, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case SET_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        article: action.data,
      };
    }

    case SET_ARTICLE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
