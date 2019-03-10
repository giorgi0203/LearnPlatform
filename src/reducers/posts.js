import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_OK } from "../actions/posts";
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
  loading: false,
  posts: []
};

/*
    ლოდინის მოქმედებების დაშლა და state ში გადატანა
*/
export function postsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return { ...state };
    case FETCH_ALL_POSTS_OK:
      return { ...state, posts: action.data };
    default:
      return state;
  }
}
