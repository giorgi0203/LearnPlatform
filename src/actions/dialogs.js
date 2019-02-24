export const PREFIX = '[DIALOG]'
export const SHOW_DIALOG = `${PREFIX} SHOW_DIALOG`
export const HIDE_DIALOG = `${PREFIX} HIDE_DIALOG`
export const OK_DIALOG = `${PREFIX} OK_DIALOG`



export const openDialog = () => ({
    type: SHOW_DIALOG
});

export const closeDialog = () => ({
    type: HIDE_DIALOG
});


