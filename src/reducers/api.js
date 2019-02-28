import {START_LOADING,STOP_LOADING} from '../actions/api'
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
    loading: false,
}

/*
    control all dialog states
    opening,closing, isopen,isclosed
*/
export function apiReducer (state = initState, action) {
    switch (action.type) {
        case START_LOADING:
            return {...state,  loading: true};
        case STOP_LOADING:
            return {...state,  loading: false}
        default:
            return state;
    }
}