/**
 * Created on 10/04/2017.
 */
const LOAD_ARTICLES_API = '/articles';

// constants
const GET_ARTICLES = 'GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'GET_ARTICLE_SUCCESS';
const GET_ARTICLES_ERROR = 'GET_ARTICLE_ERROR';
const NAV_IS_SHOW = 'NAV_IS_SHOW';
const NAV_IS_HIDDEN = 'NAV_IS_HIDDEN';

// action creator

function onScrollToBottom() {
  return {
    types: [GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR],
    promise: (client) => client.get(LOAD_ARTICLES_API),
  };
}

function onScrollUp() {
  return { type: NAV_IS_SHOW, payload: true };
}

function onScrollDown() {
  return { type: NAV_IS_HIDDEN, payload: false };
}


const initialState = {
  loading: true,
  error: false,
  articleList: [],
  navIsShow: true,
};

// reducer
export default function pullView(state=initialState, action) {
  switch (action.type) {
    case GET_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error:false,
        articleList: [...state.articleList, action.payload]
      };
    }

    case GET_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case NAV_IS_SHOW:
    case NAV_IS_HIDDEN: {
      return {
        ...state,
        navIsShow: action.payload
      };
    }

    default:
      return state;
  }
}




export const pullViewActions = {onScrollToBottom, onScrollUp, onScrollDown};
