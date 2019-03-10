export const PREFIX = '[UI]'
export const SHOW_DIALOG = `${PREFIX} SHOW_DIALOG`
export const HIDE_DIALOG = `${PREFIX} HIDE_DIALOG`

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




//დიალოგის გახსნის მოქმედება
export const openDialog = () => ({
    type: SHOW_DIALOG
});
//დიალოგის დახურვის მოქმედება
export const closeDialog = () => ({
    type: HIDE_DIALOG
});


