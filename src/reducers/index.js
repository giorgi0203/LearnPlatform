import { combineReducers } from 'redux'
import { dialogsReducer } from './dialogs'
import { loadingReducer } from './loading'
import { authReducer } from './auth'
import { postsReducer } from './posts'
export default combineReducers({
    dialog: dialogsReducer,
    loading:loadingReducer,
    auth:authReducer,
    posts:postsReducer
})