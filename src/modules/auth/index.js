import Auth from "./components/Auth";
import { authReducer } from "./reducers";
import { login, register } from "./actions";
import { authMiddleware } from "./middlewares";

export default Auth;

/**
    export extra module functionality 
 */
export { authReducer, login, register, authMiddleware };
