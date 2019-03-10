import { GET_ALL_POSTS, GET_ALL_POSTS_OK } from "../actions/posts";

import axios from "axios";

// თუ მოხდა მოქმედება რომელიც სერვერთან კავშირი სჭირდება მისი და მისი პასუხის დამუშავება ხდება აქ
export const posts = ({ dispatch }) => next => action => {
  if (action.type == GET_ALL_POSTS) {
    //dispatch(showSpinner());
    const reqBody = {
      query: `query {
                  posts {
                    title
                  }
                }
        `
    };
    axios
      .post("http://localhost:30001/graphql/api", JSON.stringify(reqBody), {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response =>
        dispatch({ type: GET_ALL_POSTS_OK, data: response.data })
      )
      .catch(error => console.log(error));
  }
  return next(action);
};
