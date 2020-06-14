import {
    FETCH_USER_DETAILS,
    RECEIVE_USER_DETAILS,
    USER_DETAILS_ERROR,
} from '../actions/userDetails_action';

const INITIAL_STATE = {
    users: [],
    fetchingUserDetails: false,
    fetchingError: false
};

const userDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_DETAILS: {
            return {
                ...state,
                fetchingUserDetails: true
            }
        }
        case RECEIVE_USER_DETAILS: {
            return {
                ...state,
                users: action.users,
                fetchingUserDetails: false
            }
        }
        case USER_DETAILS_ERROR: {
            return {
                ...state,
                fetchingError: true
            }
        }
        default: return {
            state
        }
    }
}

export default userDetails;