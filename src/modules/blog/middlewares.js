import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_OK,ADD_POST,ADD_POST_OK,EDIT_POST,EDIT_POST_OK } from "../actions/posts";
import { createQuery } from "../actions/api";

import axios from "axios";

let url = "http://localhost:30001/graphql/api";

export const postsCreate = ({ dispatch }) => next => action => {
  next(action);
  if (action.type == ADD_POST) {
    dispatch(createQuery(url, action.payload, { onSuccess: ADD_POST_OK }));
  }
  //next(action);
};

export const postsEdit = ({ dispatch }) => next => action => {
  next(action);
  if (action.type == EDIT_POST) {
    dispatch(createQuery(url, action.payload, { onSuccess: EDIT_POST_OK }));
  }
  //next(action);
};

export const posts = [postsCreate,postsEdit]
