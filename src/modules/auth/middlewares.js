import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  LOGIN_ACTION_OK,
  LOGOUT_ACTION_OK
} from "./constants";
import {
  closeAuth,
  openAuth,
  showSpinner,
  hideSpinner,
  createQuery
} from "../../modules";

import axios from "axios";

let url = "http://localhost:30001/graphql/api";

// მოთხოვნების დამუშავება რომელიც ეხება პოსტებს
export const login = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == LOGIN_ACTION) {
    console.log(action);

    //transform form data to graphql string

    let pl = {
      query: `
        query{
          login(email:"giorgi1997arabuli@gmail.com",password:"123"){
            token
          }
        }
    `
    };

    // dispatch(openAuth());
    // dispatch(hideSpinner());
    // dispatch(showSpinner());
    //

    dispatch(createQuery(pl, { onSuccess: LOGIN_ACTION_OK, onError: "" }));
    dispatch(closeAuth());
  }
  //next(action);
};

export const logedUser = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == LOGIN_ACTION_OK) {
    console.log(action);
    localStorage.setItem("token", action.payload.login.token);
  }
  //next(action);
};

export const logout = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == LOGOUT_ACTION) {
    console.log(action);
    localStorage.setItem("token", "");
    dispatch({ type: LOGOUT_ACTION_OK });
  }
  //next(action);
};

export const authMiddleware = [login, logedUser, logout];
