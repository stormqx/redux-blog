/**
 * Created on 29/04/2017.
 */

// constants
const GET_ARTICLES = 'GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'GET_ARTICLE_SUCCESS';
const GET_ARTICLES_ERROR = 'GET_ARTICLE_ERROR';
const GET_TOTAL_PAGE = 'GET_TOTAL_PAGE';

const initialState = {
  loading: true,
  error: false,
  articleList: [],
  totalPage: -1,
  currentPage: -1,
};


// reducer
export default function home(state=initialState, action) {
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

    case GET_TOTAL_PAGE: {
      return {
        ...state,
        totalPage: action.payload,
      }
    }

    default:
      return state;
  }
}