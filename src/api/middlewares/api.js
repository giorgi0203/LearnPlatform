import { CREATE_QUERY,SEND_QUERY,OK_QUERY,sendQuery,okQuery } from "../actions/api";
import {  showSpinner,hideSpinner } from "../actions/ui";
import axios from "axios";
let headers = {

    "Content-Type": "application/json"

};
let url = "http://localhost:30001/graphql/api";
// თუ მოხდა მოქმედება რომელიც სერვერთან კავშირი სჭირდება მისი და მისი პასუხის დამუშავება ხდება აქ
export const apiCreate = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === CREATE_QUERY) {
    dispatch(sendQuery(url,action.payload,action.meta));
  }
};

export const apiSend = ({ dispatch }) => next => action => {
  if (action.type === SEND_QUERY) {
    dispatch(showSpinner());
    axios({
      method: 'post',
      url:action.meta.url, 
      data:JSON.stringify(action.payload),
      headers
      })
    .then(function (response) {
      dispatch(okQuery(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    // dispatch(sendQuery());
  }
  return next(action);
};

export const apiOk = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === OK_QUERY) {
    
    dispatch(hideSpinner());
    //dispatch({type:action.meta.onSuccess,data:action.payload});
  }
};


export const api = [apiCreate,apiSend,apiOk]
