import { createStore, applyMiddleware, compose } from "redux";
import {
  reducers,
  authMiddleware,
  apiMiddleware,
  blogMiddleware
} from "./modules";
// import { api } from "./middlewares/api";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...authMiddleware, ...apiMiddleware, ...blogMiddleware)
  )
);

export default store;
