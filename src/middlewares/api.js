import {START_LOADING,STOP_LOADING,OK_LOADING,stopLoading} from "../actions/api";
import {closeDialog} from "../actions/dialogs";

// this middleware care only for API calls
export const api = ({dispatch}) => next => action => {
 next(action)
  if(action.type == START_LOADING) {
      console.log(action,dispatch,next);
      dispatch(closeDialog());
      setTimeout(()=>dispatch(stopLoading()),3000);
  }
  //return next(action)
};