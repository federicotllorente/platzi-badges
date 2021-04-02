const reducer = (state, action) => {
    switch (action.type) {
        case 'fetchDataLoading':
            return {
                ...state,
                loading: true
            };
        case 'fetchDataSuccess':
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case 'fetchDataFailure':
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