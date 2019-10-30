import axios from 'axios';
import * as Google from 'expo-google-app-auth';


import {
  UPDATE_SIGNUP_INPUT,
  UPDATE_SIGNIN_INPUT,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_ALL_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
  USER_LOGOUT
} from './actionTypes.js';

export const handleChange = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_SIGNUP_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
};

export const handleSignInChange = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_SIGNIN_INPUT,
    payload: {
      inputType: inputField,
      inputValue: inputValue
    }
  });
};

export const getUserInfo = userId => dispatch => {
  dispatch({ type: GET_USER_INFO_START });
  // get specific user if an id is given
  if (userId) {
    axios
      .get(`https://brewplans-production.herokuapp.com/users/${userId}`)
      .then(res => {
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_INFO_FAIL, payload: err });
      });
    // if no id is given, get all users
  } else {
    axios
      .get(`https://brewplans-production.herokuapp.com/users/allusers`)
      .then(res => {
        dispatch({ type: GET_ALL_USER_INFO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_INFO_FAIL, payload: err });
      });
  }
};

export const googleSignIn = config => async dispatch => {
  dispatch({ type: GOOGLE_SIGNIN_START });
  try {
    const { type, accessToken, user } = await Google.logInAsync(config);
    console.log('<-------------Google sign-in Handler------------>');
    console.log('type: ', type);
    console.log('accessToken: ', accessToken);
    console.log('user: ', user);
    if (type === 'success') {
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      // console.log('type: ', type);
      // console.log('accessToken: ', accessToken);
      // console.log('user: ', user);
      console.log('<-------------Google sign-in Handler------------>');
      dispatch({ 
        type: GOOGLE_SIGNIN_SUCCESS, 
        payload: {
          user: user,
          token: accessToken
        }
      })
    }
  } catch ({ message }) {
    dispatch({ type: GOOGLE_SIGNIN_FAIL, payload: message });
  }
};

export const userLogout = () => dispatch => {
  dispatch({ type: USER_LOGOUT });
}