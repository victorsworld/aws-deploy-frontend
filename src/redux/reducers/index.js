import { combineReducers } from 'redux';
import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer';
import talkReducer from './talkReducer';

export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    talk: talkReducer
});