import { OPEN_AUTH_ACTION,LOGIN_ACTION,REGISTRATION_ACTION } from "./constants";

export const openAuth = authType => ({
  type: OPEN_AUTH_ACTION,
  authType: authType
});

export const login = payload => ({
  type: LOGIN_ACTION,
  payload: payload
});

export const register = payload => ({
  type: REGISTRATION_ACTION,
  payload: payload
});
