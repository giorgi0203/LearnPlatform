export const PREFIX = '[UI]'
export const SHOW_SPINNER  = `${PREFIX} SHOW_SPINNER`;
export const HIDE_SPINNER  = `${PREFIX} HIDE_SPINNER`;


//დაიწყე მოცდა
export const showSpinner = () => ({
  type: SHOW_SPINNER
});

//შეაჩერე მოცდა
export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

