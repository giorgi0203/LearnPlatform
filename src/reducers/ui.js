import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_DIALOG,
  HIDE_DIALOG
} from "../actions/ui";

const initState = {
  loading: false,
  dialogVisible: false
};

/*
    ლოდინის მოქმედებების დაშლა და state ში გადატანა
*/
export function uiReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, loading: true };
    case HIDE_SPINNER:
      return { ...state, loading: false };

    case SHOW_DIALOG:
      return { ...state, dialogVisible: true };
    case HIDE_DIALOG:
      return { ...state, dialogVisible: false };
    default:
      return state;
  }
}
