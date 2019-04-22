import { createStore, applyMiddleware, compose } from "redux";
import { reducers,loginMiddlewares } from "./modules";
// import { api } from "./middlewares/api";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(loginMiddlewares)));

export default store;
