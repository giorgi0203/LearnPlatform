export const PREFIX = '[API]'
export const START_LOADING = `${PREFIX} START_LOADING`
export const STOP_LOADING = `${PREFIX} STOP_LOADING`
export const OK_LOADING = `${PREFIX} OK_LOADING`



export const startLoading = () => ({
    type: START_LOADING
});

export const stopLoading = () => ({
    type: STOP_LOADING
});


