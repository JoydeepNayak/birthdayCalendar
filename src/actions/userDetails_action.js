import { BASE_URL } from '../utilities/constants';
export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const USER_DETAILS_ERROR = "USER_DETAILS_ERROR";



const fetchUserDetails = () => ({ type: FETCH_USER_DETAILS });
const receiveUserDetails = (users) => ({ type: RECEIVE_USER_DETAILS, users });
const receiveUserDetailsError = () => ({ type: USER_DETAILS_ERROR });

export const getUserData = (year) => {
    return async (dispatch) => {
        dispatch(fetchUserDetails());
        try {
            const response = await fetch(`${BASE_URL}/getUserDetails?year=${year}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            dispatch(receiveUserDetails(json));
        }
        catch (error) {
            if (!error.response) {
                // network error
                alert('Please check your network connectivity.')
            } else {
                dispatch(receiveUserDetailsError(error));
            }
        }
    }
}