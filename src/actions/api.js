export const PREFIX = '[API]'

export const SEND_QUERY = `${PREFIX} SEND_QUERY`

//მოთხოვნის გაგზავნა
export const sendQuery = (payload) =>({
    type: SEND_QUERY,
    payload: payload
})


