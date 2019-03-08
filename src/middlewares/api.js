
import {LOGIN} from "../actions/auth";
import {SHOW_SPINNER,HIDE_SPINNER,showSpinner} from "../actions/spinner";
import {closeDialog} from "../actions/dialogs";
import axios from "axios"

// თუ მოხდა მოქმედება რომელიც სერვერთან კავშირი სჭირდება მისი და მისი პასუხის დამუშავება ხდება აქ
export const api = ({dispatch}) => next => action => {
  if (action.type == LOGIN) {
    
  }
  return next(action)
};