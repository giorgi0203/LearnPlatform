import { SHOW_SPINNER, HIDE_SPINNER } from "./constants";

const initState = {
  loading: false
};

/*
  ლოდინის მოქმედებების დაშლა და state ში გადატანა
  */
export function spinerReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
    console.log(action);
    
      return { ...state, loading: true };
    case HIDE_SPINNER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
