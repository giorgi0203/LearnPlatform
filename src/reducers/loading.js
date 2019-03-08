import {SHOW_SPINNER,HIDE_SPINNER} from '../actions/spinner'
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
    loading: false,
}

/*
    ლოდინის მოქმედებების დაშლა და state ში გადატანა
*/
export function loadingReducer (state = initState, action) {
    switch (action.type) {
        case SHOW_SPINNER:
            return {...state,  loading: true};
        case HIDE_SPINNER:
            return {...state,  loading: false}
        default:
            return state;
    }
}