import { combineReducers } from 'redux'
import { dialogsReducer } from './dialogs'
import { apiReducer } from './api'
export default combineReducers({
    dialog: dialogsReducer,
    api:apiReducer
})