import { combineReducers } from 'redux'
import { dialogsReducer } from './dialogs'
export default combineReducers({
    dialog: dialogsReducer
})