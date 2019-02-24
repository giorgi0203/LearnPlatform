import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/dialogs'
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
    dialogVisible: false,
}

/*
    control all dialog states
    opening,closing, isopen,isclosed
*/
export function dialogsReducer (state = initState, action) {
    switch (action.type) {
        case SHOW_DIALOG:
            return {...state,  dialogVisible: true};
        case HIDE_DIALOG:
            return {...state,  dialogVisible: false}
        default:
            return state;
    }
}