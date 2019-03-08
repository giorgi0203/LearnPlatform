import {GET_ALL_POSTS,GET_ALL_POSTS_OK} from '../actions/posts'
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {
    loading: false,
    posts: []
}

/*
    ლოდინის მოქმედებების დაშლა და state ში გადატანა
*/
export function postsReducer (state = initState, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {...state,  loading: true};
        case GET_ALL_POSTS_OK:
            return {...state,  posts: action.data}
        default:
            return state;
    }
}