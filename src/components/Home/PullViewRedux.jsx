/**
 * Created on 10/04/2017.
 */
const LOAD_ARTICLES_API = '/getArticle';

// constants
const GET_ARTICLES = 'GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'GET_ARTICLE_SUCCESS';
const GET_ARTICLES_ERROR = 'GET_ARTICLE_ERROR';

// action creator

function onScrollToBottom() {

  return dispatch => {
    dispatch({type: GET_ARTICLES});
    // 开始下载
    fetch(LOAD_ARTICLES_API)
      .then(res => {
        return res.json();
      })
      .then( data => {
        // 暂时的hack, 延时0.5秒显示加载动画
        window.setTimeout(null, 500);
        dispatch({type: GET_ARTICLES_SUCCESS, payload: data})
      })
      .catch(err => {
        dispatch({type: GET_ARTICLES_ERROR, payload: err});
      })
  };
}

function onScrollUp() {

}

function onScrollDown() {
}


const initialState = {
  loading: true,
  error: false,
  articleList: [],
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
      const articleList = state.articleList;
      const newArticleList = [...articleList, action.payload];
      return {
        ...state,
        loading: false,
        error:false,
        articleList: newArticleList,
      };
    }

    case GET_ARTICLES_ERROR: {
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




export const pullViewActions = {onScrollToBottom};