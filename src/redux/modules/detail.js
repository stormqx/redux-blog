/**
 * Created on 10/06/2017.
 */
import config from '../../../config';

// ------- constants --------
const SET_ARTICLE = 'SET_ARTICLES';
const SET_ARTICLE_SUCCESS = 'SET_ARTICLE_SUCCESS';
const SET_ARTICLE_ERROR = 'SET_ARTICLE_ERROR';


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

// ------- action creator -------

// pathName: 文章对应的pathName,具有唯一性。
// 这里没有使用id查询是因为：当访客直接访问某篇具体文章是只能拿到pathname。
const loadArticle = (pathName) => ({
  types: [SET_ARTICLE, SET_ARTICLE_SUCCESS, SET_ARTICLE_ERROR],
  promise: (client) => client.get(config.api.SET_ARTICLE, {
    params: { pathName },
  }),
});

export const detailAction = { loadArticle };
