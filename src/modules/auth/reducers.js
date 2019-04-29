import { LOGIN_ACTION_OK } from "./constants";
import JwtDecode from "jwt-decode";
/**
 * retrive initial state from localstorage
 */
let token = localStorage.getItem("token");
let userData = {}
if (token) {
  userData = JwtDecode(token); 
  console.log(userData);
  
}
const initState = {
  user: {
    name: userData.name
  },
  authData: {
    isLogged: localStorage.getItem("token") ? true : false
  }
};

/*
     მოქმედებების დაშლა და state ში გადატანა
  */
export function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_ACTION_OK:
      return {
        ...state,
        authData: {
          ...state.authData,
          isLogged: true
        }
      };
    default:
      return state;
  }
}
