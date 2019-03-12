import { createStore,applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import {api} from './middlewares/api'
import {posts} from './middlewares/posts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
    composeEnhancers(
            applyMiddleware(
                ...api,
                ...posts
            )
        )
    );

export default store;