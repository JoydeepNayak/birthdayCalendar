import { combineReducers } from 'redux';
import userDetails_reducer from './userDetails_reducer';

export default combineReducers({
    userDetails: userDetails_reducer
});