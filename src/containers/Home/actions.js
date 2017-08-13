/**
 * Created on 13/08/2017.
 */

import config from '../../../config';
import {
  SET_PREVIEW_LIST,
  SET_PREVIEW_LIST_SUCCESS,
  SET_PREVIEW_LIST_ERROR,
  SET_CURRENT_PAGE,
} from './constants';

// -------- action creator -------
export const loadPreviewList = (page = 1) => ({
  types: [SET_PREVIEW_LIST, SET_PREVIEW_LIST_SUCCESS, SET_PREVIEW_LIST_ERROR],
  promise: (client) => client.get(config.api.SET_PREVIEW_LIST, {
    params: { page },
  }),
});


export const setCurrentPage = (currentPage = 1) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
