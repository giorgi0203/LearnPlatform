import {FETCH_ALL_POSTS} from './constants'

export const fetchPosts = (payload) => ({
    type: FETCH_ALL_POSTS,
    payload: payload
  });