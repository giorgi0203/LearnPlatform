import {LOGIN} from "../actions/auth";
import {SHOW_SPINNER,HIDE_SPINNER,showSpinner} from "../actions/spinner";
import {closeDialog} from "../actions/dialogs";
import axios from "axios"

// თუ მოხდა ავტორიზაციის მოთხოვნა ან რეგისტრაციის უნდა გავუშვათ მიმდევრობითი მოქმედებები
// დავხუროდ მიმდინარე დიალოგი ჩავრთოთ ლოდინის რეჟიმი
export const auth = ({dispatch}) => next => action => {
 
  if(action.type == LOGIN) {
      console.log('inside login middleware');
      const reqBody = {
        query:`query {
                  posts {
                    title
                  }
                }
        `
      }
      
      dispatch(closeDialog());
      axios.post('http://localhost:30001/graphql/api',
      JSON.stringify(reqBody),
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }
      ).then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
      dispatch(showSpinner());
      
  }
  return next(action);
};