/**
 * Created on 29/04/2017.
 */
import {
  SET_PREVIEW_LIST,
  SET_PREVIEW_LIST_SUCCESS,
  SET_PREVIEW_LIST_ERROR,
  SET_CURRENT_PAGE,
} from './constants';

const initialState = {
  previewList: [],
  totalPage: -1,
  currentPage: -1,
};

// -------- reducer --------
export default function home(state = initialState, action) {
  switch (action.type) {
    case SET_PREVIEW_LIST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case SET_PREVIEW_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        previewList: [...action.data],
        totalPage: +action.header['x-total-count'],
      };
    }

    case SET_PREVIEW_LIST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        totalPage: -1,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: +action.currentPage,
      };
    }

    default:
      return state;
  }
}
