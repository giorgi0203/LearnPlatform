

import {GET_ALL_POSTS,GET_ALL_POSTS_OK} from "../actions/posts";
import {showSpinner,hideSpinner} from "../actions/spinner"

import axios from "axios"

// თუ მოხდა მოქმედება რომელიც სერვერთან კავშირი სჭირდება მისი და მისი პასუხის დამუშავება ხდება აქ
export const posts = ({dispatch}) => next => action => {
  if (action.type == GET_ALL_POSTS) {
    dispatch(showSpinner());
    const reqBody = {
        query:`query {
                  posts {
                    title
                    description
                    content
                    creator{
                      name
                      email
                    }
                  }
                }
        `
      }
      axios.post('http://localhost:30001/graphql/api',
      JSON.stringify(reqBody),
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }
      ).then(response => {setTimeout(function(){ console.log("posts middleware",response.data);dispatch({type:GET_ALL_POSTS_OK,data:response.data.data.posts}); }, 1000);})
      .catch(error => dispatch(hideSpinner()));
      
  }
  if (action.type == GET_ALL_POSTS_OK) {
    dispatch(hideSpinner())
  }
  return next(action)
};