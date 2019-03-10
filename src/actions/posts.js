export const PREFIX = '[POSTS]'
export const FETCH_ALL_POSTS  = `${PREFIX} FETCH_ALL_POSTS`;
export const FETCH_ALL_POSTS_OK  = `${PREFIX} FETCH_ALL_POSTS_OK`;


//
export const fetchPosts = () => ({
  type: FETCH_ALL_POSTS
});
