import {REGISTER,LOGIN} from '../actions/auth'
import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
    isLoggedIn: false,
    user: null
}

/*
    ავტორიზაციის მოქმედებების დაშლა და state ში გადატანა
*/
export function authReducer (state = initState, action) {
    switch (action.type) {
        case LOGIN:
            console.log('inside login reducer');
            
        default:
            return state;
    }
}