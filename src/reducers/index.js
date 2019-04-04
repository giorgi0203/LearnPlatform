import { combineReducers } from 'redux'
import { uiReducer } from './ui'
import { apiReducer } from './api'
export default combineReducers({
    ui: uiReducer,
    app: apiReducer
})