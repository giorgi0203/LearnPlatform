/**
 * export Components
 */
import Navbar from "./menu/navbar";
import List from "./blog/index";
import Auth from "./auth";
import Main from "./menu/fab";
import { combineReducers } from "redux";

export { Navbar, List, Auth ,Main };

/**
 * export reducers
 */

// import { uiReducer } from "./ui";
// import { apiReducer } from "./api";

export default {
  Reducers: combineReducers({
    // ui: uiReducer,
    // app: apiReducer
  })
};

/**
 * export actions
 */

/**
 * export middlewares
 */
