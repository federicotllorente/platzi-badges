const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case 'FETCH_DATA_FAILURE':
            return {
                loading: false,
                data: undefined,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;