import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_OK } from "../actions/posts";
import { SHOW_EDITOR } from "../actions/ui";
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
  loading: false,
  posts: [],
  currentPost:{}
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
    case SHOW_EDITOR:
      return { ...state, currentPost:action.payload };
    
    default:
      return state;
  }
}
