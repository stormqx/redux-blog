/**
 * Created on 09/03/2017.
 */

const initialState = {
  loading: true,
  error: false,
  articleList: [],
};

//constants
const LOAD_ARTICLE = 'LOAD_ARTICLE';
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR';


//action creator
export function loadArticles() {
  return {
    type: [LOAD_ARTICLE, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_ERROR],
    url: '/api/articles.json',
  }
}


//reducer
function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLE: {
     return {
       ...state,
       loading: true,
       error: false,
     }
    }

    case LOAD_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }

    case LOAD_ARTICLE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    default: return state;
  }
}

export default previewList;