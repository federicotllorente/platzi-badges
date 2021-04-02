import api from '../api';

export const fetchDataLoading = () => {
    return {
        type: 'fetchDataLoading'
    };
};

export const fetchDataSuccess = data => {
    return {
        type: 'fetchDataSuccess',
        payload: data
    };
};

export const fetchDataFailure = error => {
    return {
        type: 'fetchDataFailure',
        payload: error
    };
};

export const fetchData = () => {
    return dispatch => {
        // fetchDataLoading() changes the state with the action-type = 'fetchDataLoading'
        dispatch(fetchDataLoading);
        api.badges.list()
            // fetchUsersSuccess() changes the state with the action-type = 'fetchDataSuccess'
            .then(data => dispatch(fetchDataSuccess(data)))
            // fetchDataFailure() changes the state with the action-type = 'fetchDataFailure'
            .catch(error => dispatch(fetchDataFailure(error)));
    };
};