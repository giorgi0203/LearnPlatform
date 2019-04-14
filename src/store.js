import { createStore, applyMiddleware, compose } from "redux";
// import reducers from "./reducers";
// import { api } from "./middlewares/api";
const reducers = function (params) {
    
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
