const initState = {
  user: {},
  authData:{
    isLogged:false
  }
};

/*
     მოქმედებების დაშლა და state ში გადატანა
  */
export function authReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
