/**
 * export Components
 */
import Navbar from "./menu/navbar";
import List from "./blog/index";
import Auth,{authReducer} from "./auth";
import FabMenu from "./menu/fab";
import { combineReducers } from "redux";

export{ Navbar, List, Auth ,FabMenu, };

/**
 * export reducers
 */

// import { uiReducer } from "./ui";
// import { apiReducer } from "./api";

export const reducers = combineReducers({
  auth: authReducer
  // app: apiReducer
})

/**
 * export actions
 */

/**
 * export middlewares
 */
