export const PREFIX = '[POSTS]'
export const GET_ALL_POSTS  = `${PREFIX} GET_ALL_POSTS`;
export const GET_ALL_POSTS_OK  = `${PREFIX} GET_ALL_POSTS_OK`;


//
export const fetchPosts = () => ({
  type: GET_ALL_POSTS
});
