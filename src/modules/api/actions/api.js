export const PREFIX = "[API]";

export const CREATE_QUERY = `${PREFIX} CREATE_QUERY`;
export const SEND_QUERY = `${PREFIX} SEND_QUERY`;
export const OK_QUERY = `${PREFIX} OK_QUERY`;

/**
 *
 * @param {String|Json} payload
 * @param {Object<any>} meta action to dispatch on after success
 */
export const createQuery = (payload, meta) => ({
  type: CREATE_QUERY,
  payload: payload,
  meta: meta
});

/**
 *
 * @param {String|Json} payload
 * @param {Object<any>} meta action to dispatch on after success
 */
export const sendQuery = (payload, meta) => ({
  type: SEND_QUERY,
  payload: payload,
  meta: meta
});

/**
 * recive response from server it will handle it acording to the parameters
 * trigger error or trigger success
 * @param {String|Json} payload
 * @param {Object<any>} meta action to dispatch on after end of the request
 */
export const okQuery = (payload, meta) => ({
  type: OK_QUERY,
  payload: payload,
  meta: meta
});
