export const PREFIX = "[API]";

export const CREATE_QUERY = `${PREFIX} CREATE_QUERY`;
export const SEND_QUERY = `${PREFIX} SEND_QUERY`;
export const OK_QUERY = `${PREFIX} OK_QUERY`;

/**
 * creates query
 * @param {String} url 
 * @param {String} payload 
 * @param {String|Number} meta 
 */
export const createQuery = (url, payload, meta) => ({
  type: CREATE_QUERY,
  payload: payload,
  meta: { ...meta, url }
});

/**
 * send query to database
 * @param {String} url endpoint url
 * @param {String} payload query body
 * @param {String|Number}meta onSuccess action
 */
export const sendQuery = (url, payload, meta) => ({
  type: SEND_QUERY,
  payload: payload,
  meta: { ...meta, url }
});

/**
 * recive response from server
 * @param {String} payload 
 * @param {String} 
 */
export const okQuery = (payload,meta) => ({
  type: OK_QUERY,
  payload: payload,
  meta:meta
});
