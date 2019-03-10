import { combineReducers } from 'redux'
import { uiReducer } from './ui'
import { postsReducer } from './posts'
import { apiReducer } from './api'
export default combineReducers({
    ui: uiReducer,
    posts:postsReducer
})