import { FETCH_ALL_POSTS_OK } from "./constants";
const initState = {
  posts: []
};

/*
     მოქმედებების დაშლა და state ში გადატანა
  */
export function postsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS_OK:
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return state;
  }
}
