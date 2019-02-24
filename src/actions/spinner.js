export const PREFIX = '[UI]'
export const SHOW_SPINNER  = `${PREFIX} SHOW-SPINNER`;
export const HIDE_SPINNER  = `${PREFIX} HIDE-SPINNER`;

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
