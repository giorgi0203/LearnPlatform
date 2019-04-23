export const PREFIX = "[API]";

export const CREATE_QUERY = `${PREFIX} CREATE_QUERY`;
export const SEND_QUERY = `${PREFIX} SEND_QUERY`;
export const OK_QUERY = `${PREFIX} OK_QUERY`;

/**
 * creates query
 * @param {String} url 
 * @param {String} payload 
 */
export const createQuery = (payload) => ({
  type: CREATE_QUERY,
  payload: payload
});

/**
 * send query to database
 * @param {String} url endpoint url
 * @param {String} payload query body
 */
export const sendQuery = (payload) => ({
  type: SEND_QUERY,
  payload: payload,
});

/**
 * recive response from server it will handle it acording to the parameters
 * trigger error or trigger success
 * @param {String} payload 
 * @param {Action} onSuccess action to dispatch on after success
 * @param {Action} onError action to dispatch on after errorr
 */
export const okQuery = (payload,onSuccess,onError) => ({
  type: OK_QUERY,
  payload: payload,
  onSuccess: onSuccess,
  onError:onError
});
