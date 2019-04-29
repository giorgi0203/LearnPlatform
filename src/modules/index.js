/**
 * imports
 */
import Navbar from "./menu/navbar";
import List from "./blog/index";
import Auth, { authReducer } from "./auth";
import FabMenu, { fabMenuReducer } from "./menu/fab";
import { combineReducers } from "redux";

import { openAuth, closeAuth } from "./menu/fab";

import {} from "./menu/navbar";
import { apiMiddleware, createQuery } from "./api";
import { login, register, authMiddleware } from "./auth";
import { blogMiddleware,blogReducer } from "./blog";
import Spinner, { showSpinner, hideSpinner, spinerReducer } from "./spinner";

/**
 *
 */

export { Navbar, List, Auth, FabMenu, Spinner };

/**
 * export reducers
 */

// import { uiReducer } from "./ui";
// import { apiReducer } from "./api";

/**
 * group reducers by type and export
 */
export const reducers = combineReducers({
  auth: authReducer,
  blog:blogReducer,
  ui: combineReducers({
    auth: fabMenuReducer,
    spinner: spinerReducer
  })
});

/**
 * export actions
 */
export { openAuth, closeAuth, showSpinner, hideSpinner, createQuery };

/**
 * export middlewares
 *
 */
export { authMiddleware, apiMiddleware, blogMiddleware };
