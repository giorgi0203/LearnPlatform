import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_OK } from "../actions/posts";
import { createQuery } from "../actions/api";

import axios from "axios";

let url = "http://localhost:30001/graphql/api";

// მოთხოვნების დამუშავება რომელიც ეხება პოსტებს
export const posts = ({ dispatch }) => next => action => {
  next(action);
  if (action.type == FETCH_ALL_POSTS) {
    const payload = {
      query: `query {
                  posts {
                    title
                    description
                    content
                    creator{
                      name
                      email
                    }
                  }
                }
        `
    };
    dispatch(createQuery(url, payload, { onSuccess: FETCH_ALL_POSTS_OK }));
  }
  //next(action);
};
