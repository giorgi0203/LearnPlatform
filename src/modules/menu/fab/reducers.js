import { OPEN_AUTH_ACTION,CLOSE_AUTH_ACTION } from "./constants";
const initState = {
  isAuthDialogOpen: false
};

/*
       მოქმედებების დაშლა და state ში გადატანა
    */
export function fabMenuReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_AUTH_ACTION:
      return { ...state, isAuthDialogOpen: true };
    case CLOSE_AUTH_ACTION:
      return { ...state, isAuthDialogOpen: false };
    default:
      return state;
  }
}
