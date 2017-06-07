/**
 * Created on 29/04/2017.
 */
const LOAD_ARTICLES_API = '/articles';

// constants
const SET_ARTICLES = 'SET_ARTICLES';
const SET_ARTICLES_SUCCESS = 'SET_ARTICLE_SUCCESS';
const SET_ARTICLES_ERROR = 'SET_ARTICLE_ERROR';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  articleList: [],
  totalPage: -1,
};

// reducer
export default function home(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case SET_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: [...action.data],
        totalPage: action.header['x-total-count'],
      };
    }

    case SET_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        totalPage: -1,
      };
    }

    default:
      return state;
  }
}

// action creator
const loadArticles = (params = { page: 1 }) => ({
  types: [SET_ARTICLES, SET_ARTICLES_SUCCESS, SET_ARTICLES_ERROR],
  promise: (client) => client.get(LOAD_ARTICLES_API, {
    params,
  }),
});


const setCurrentPage = (page = 1) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const homeAction = {
  loadArticles,
  setCurrentPage,
};
