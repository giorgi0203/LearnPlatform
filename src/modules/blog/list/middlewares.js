import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_OK } from "./constants";
import {
  closeAuth,
  openAuth,
  showSpinner,
  hideSpinner,
  createQuery
} from "../../../modules";

import axios from "axios";

let url = "http://localhost:30001/graphql/api";

// მოთხოვნების დამუშავება რომელიც ეხება პოსტებს
export const fetch = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == FETCH_ALL_POSTS) {
    console.log(action);
    let pl = {
      query: `
        query{
            posts{
                _id
                title
                description
                content
            }
        }
    `
    };
    dispatch(createQuery(pl, { onSuccess: FETCH_ALL_POSTS_OK, onError: "" }));
    dispatch(closeAuth());
  }
  //next(action);
};

export const fetched = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == FETCH_ALL_POSTS_OK) {
    console.log(action);
    //localStorage.setItem("token", action.payload.login.token);
  }
  //next(action);
};

export const blogMiddleware = [fetch, fetched];
