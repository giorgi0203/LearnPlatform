import Auth from "./components/auth";
import { authReducer } from "./reducers";
import { login, openAuth, register } from "./actions";

export default Auth;

/**
    export extra module functionality 
 */
export { authReducer, login, openAuth, register };
