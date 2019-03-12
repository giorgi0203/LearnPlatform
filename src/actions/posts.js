export const PREFIX = '[POSTS]'
export const FETCH_ALL_POSTS  = `${PREFIX} FETCH_ALL_POSTS`;
export const FETCH_ALL_POSTS_OK  = `${PREFIX} FETCH_ALL_POSTS_OK`;

export const ADD_POST  = `${PREFIX} ADD_POST`;
export const ADD_POST_OK  = `${PREFIX} ADD_POST_OK`;
export const EDIT_POST  = `${PREFIX} EDIT_POST`;
export const EDIT_POST_OK  = `${PREFIX} EDIT_POST_OK`;


//
export const fetchPosts = (payload) => ({
  type: FETCH_ALL_POSTS,
  payload: payload
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload: payload,
});

export const editPost = (id, payload, meta) => ({
  type: EDIT_POST,
  payload: payload,
  meta: { ...meta, id }
});
