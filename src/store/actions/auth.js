import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};


export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};

export const auth =(email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0';
        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/verifyPassword?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0'
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response.data);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                dispatch(authFailed(err));
            })

    };
};
