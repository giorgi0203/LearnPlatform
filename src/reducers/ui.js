import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_DIALOG,
  HIDE_DIALOG,
  HIDE_EDITOR,
  SHOW_EDITOR
} from "../actions/ui";

const initState = {
  loading: false,
  dialogVisible: false,
  editorVisible: false
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

    case SHOW_EDITOR:
      return { ...state, editorVisible: true };
    case HIDE_EDITOR:
      return { ...state, editorVisible: false };
    default:
      return state;
  }
}
