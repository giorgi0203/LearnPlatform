import { OK_QUERY, CREATE_QUERY } from "../actions/api";
// import {SHOW_DIALOG,HIDE_DIALOG} from '../actions/spinner'

const initState = {

};

/*
    ლოდინის მოქმედებების დაშლა და state ში გადატანა
*/
export function apiReducer(state = initState, action) {
  switch (action.type) {
    case OK_QUERY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
