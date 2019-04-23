import { LOGIN_ACTION, LOGIN_ACTION_OK } from "./constants";
import { closeAuth,openAuth,showSpinner,hideSpinner } from "../../modules";

import axios from "axios";

let url = "http://localhost:30001/graphql/api";


// მოთხოვნების დამუშავება რომელიც ეხება პოსტებს
export const login = ({ dispatch }) => next => action => {
  next(action);

  if (action.type == LOGIN_ACTION) {
    console.log(action);
    
    // dispatch(openAuth());
    // dispatch(hideSpinner());
    // dispatch(showSpinner());
    // dispatch(closeAuth());

    //dispatch(createQuery(url, action.payload, { onSuccess: LOGIN_ACTION_OK }));
  }
  //next(action);
};

// export const posts = [postsFetch,postsCreate,postsEdit]
