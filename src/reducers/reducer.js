export default (type) => (state = { loading: true,data: [] },action) =>{
    switch (action.type) {
        case `REQUEST/${type}`:
          return {
            ...state,
            loading:true,
        };
        case `SUCCESS/${type}`:
          return {
            ...state,
            loading: false,
            data: action.payload,
            error: false,
        };
        case `ERROR/${type}`:
          return {
            ...state,
            error: action.error || true,
            loading: false,
        };
        default:
          return state
    }
}