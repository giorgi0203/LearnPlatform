export const PREFIX = "[API]";

export const CREATE_QUERY = `${PREFIX} CREATE_QUERY`;
export const SEND_QUERY = `${PREFIX} SEND_QUERY`;
export const OK_QUERY = `${PREFIX} OK_QUERY`;

//მოთხოვნის შექმნა
export const createQuery = (url, payload, meta) => ({
  type: CREATE_QUERY,
  payload: payload,
  meta: { ...meta, url }
});

//მოთხოვნის გაგზავნა
export const sendQuery = (url, payload, meta) => ({
  type: SEND_QUERY,
  payload: payload,
  meta: { ...meta, url }
});

//პასუხის მიღება
export const okQuery = (payload,meta) => ({
  type: OK_QUERY,
  payload: payload,
  meta:meta
});
