/**
 * export Components
 */
import Navbar from "./menu/navbar";
import List from "./post/index";

export { Navbar, List };

/**
 * export reducers
 */
import { combineReducers } from "redux";
// import { uiReducer } from "./ui";
// import { apiReducer } from "./api";

export default combineReducers({
  ui: uiReducer,
  app: apiReducer
});

/**
 * export actions
 */

/**
 * export middlewares
 */
