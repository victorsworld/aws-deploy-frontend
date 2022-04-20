import { AUTH_USER_SUCCESSFUL, 
         AUTH_USER_FAILURE, 
         AUTH_USER_SIGN_IN_SUCCESSFUL, 
         AUTH_USER_LOGOUT
        } from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';
import setAuthToken from '../../lib/setAuthToken';

export const signin = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/sign-in', userInfo);
        const { token } = success.data;
        setAuthToken(token);
        localStorage.setItem('jwtToken', token);
        dispatch(authUserSignin(token));
        return Promise.resolve('Signin successfully');

    } catch (error) {
        dispatch(handleErrorSignup(error.response.data.message))
        return Promise.reject(error);
    }
}

export const authUserSignin = (token) => dispatch => {
    dispatch({
        type: AUTH_USER_SIGN_IN_SUCCESSFUL,
        payload: token
    })
}

export const signup = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/sign-up', userInfo);
      
        dispatch(authUserSuccessful(success.data.message))
        return Promise.resolve(success.data.message);
    } catch (error) {
        dispatch(handleErrorSignup(error.response.data.message))
        return Promise.reject(error);
    }
}

export const authUserSuccessful = (message) => dispatch => {
    dispatch({
        type: AUTH_USER_SUCCESSFUL,
        payload: message
    })
}

export const handleErrorSignup = (message) => dispatch => {
    dispatch({
        type: AUTH_USER_FAILURE,
        payload: message
    })
}

export const handleLogout = () => dispatch => {

    localStorage.removeItem('jwtToken');
    dispatch({
        type: AUTH_USER_LOGOUT
    })

}
