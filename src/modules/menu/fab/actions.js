import { OPEN_AUTH_ACTION,CLOSE_AUTH_ACTION } from "./constants";

export const openAuth = authType => ({
  type: OPEN_AUTH_ACTION,
  authType: authType
});

export const closeAuth = authType => ({
  type: CLOSE_AUTH_ACTION,
  authType: authType
});
