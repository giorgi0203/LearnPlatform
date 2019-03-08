export const PREFIX = '[DIALOG]'
export const SHOW_DIALOG = `${PREFIX} SHOW_DIALOG`
export const HIDE_DIALOG = `${PREFIX} HIDE_DIALOG`
export const OK_DIALOG = `${PREFIX} OK_DIALOG`


//დიალოგის გახსნის მოქმედება
export const openDialog = () => ({
    type: SHOW_DIALOG
});
//დიალოგის დახურვის მოქმედება
export const closeDialog = () => ({
    type: HIDE_DIALOG
});


