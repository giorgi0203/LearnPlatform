import { SHOW_SPINNER, HIDE_SPINNER } from "../actions/ui";

const initState = {};

/*
      ლოდინის მოქმედებების დაშლა და state ში გადატანა
  */
export function uiReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, loading: true };
    case HIDE_SPINNER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
