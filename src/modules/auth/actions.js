import { LOGIN_ACTION, REGISTRATION_ACTION, LOGOUT_ACTION } from "./constants";

/**
 * do login
 * @param {GraphqlQuery} payload
 */
export const login = payload => ({
  type: LOGIN_ACTION,
  payload: payload
});
/**
 * do register
 * @param {GraphqlQuery} payload
 */
export const register = payload => ({
  type: REGISTRATION_ACTION,
  payload: payload
});

/**
 * do register
 * @param {GraphqlQuery} payload
 */
export const logout = payload => ({
  type: LOGOUT_ACTION,
  payload: payload
});
