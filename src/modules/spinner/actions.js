import { HIDE_SPINNER, SHOW_SPINNER } from "./constants";

//დაიწყე მოცდა
export const showSpinner = () => ({
  type: SHOW_SPINNER
});

//შეაჩერე მოცდა
export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
