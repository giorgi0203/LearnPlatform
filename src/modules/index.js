/**
 * export Components
 */
import Navbar from "./menu/navbar";
import List from "./blog/index";
import Auth, { authReducer } from "./auth";
import FabMenu, { fabMenuReducer } from "./menu/fab";
import { combineReducers } from "redux";

/**
 * import actions
 */
import { openAuth, closeAuth } from "./menu/fab";
import {} from "./menu/navbar";
import { login, register, loginMiddlewares } from "./auth";

/**
 *
 */

export { Navbar, List, Auth, FabMenu };

/**
 * export reducers
 */

// import { uiReducer } from "./ui";
// import { apiReducer } from "./api";

export const reducers = combineReducers({
  auth: authReducer,
  ui: fabMenuReducer
});

/**
 * export actions
 */
export { openAuth, closeAuth };

/**
 * export middlewares
 */
export { loginMiddlewares };
