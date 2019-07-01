import Auth from "./components/Auth";
import { authReducer } from "./reducers";
import { login, register, logout } from "./actions";
import { authMiddleware } from "./middlewares";

export default Auth;

/**
    export extra module functionality 
 */
export { authReducer, login, register, logout, authMiddleware };
