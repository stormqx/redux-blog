/**
 * Created on 13/08/2017.
 */
import config from '../../../config';

import {
  SET_ARTICLE,
  SET_ARTICLE_SUCCESS,
  SET_ARTICLE_ERROR,
} from './constants';

// ------- action creator -------

// pathName: 文章对应的pathName,具有唯一性。
// 这里没有使用id查询是因为：当访客直接访问某篇具体文章是只能拿到pathname。
export const loadArticle = (pathName) => ({
  types: [SET_ARTICLE, SET_ARTICLE_SUCCESS, SET_ARTICLE_ERROR],
  promise: (client) => client.get(config.api.SET_ARTICLE, {
    params: { pathName },
  }),
});
