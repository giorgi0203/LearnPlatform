import {START_LOADING,STOP_LOADING,OK_LOADING,stopLoading} from "../actions/api";
import {closeDialog} from "../actions/dialogs";

// this middleware care only for API calls
export const api = ({dispatch}) => next => action => {
 next(action)
  if(action.type == START_LOADING) {
      console.log(action,dispatch,next);
      dispatch(closeDialog());
      //setTimeout(function(){ alert("Hello"); }, 3000);
      setTimeout(()=>dispatch(stopLoading()),3000);
    //dispatch({ type: onSuccess, payload: data })
  }
  //return next(action)
};