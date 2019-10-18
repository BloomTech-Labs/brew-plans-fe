import axios from 'axios';
import * as Google from 'expo-google-app-auth';

import {
  UPDATE_SIGNUP_INPUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_ALL_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL
} from './actionTypes.js';

export const handleUserSignup = userCredentials => dispatch => {
  dispatch({ type: USER_REGISTER_START });
  axios
    .post(
      'https://brewplans-production.herokuapp.com/users/register',
      userCredentials
    )
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_REGISTER_FAIL, payload: err });
    });
};

export const handleChange = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_SIGNUP_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
};

export const handleUserLogin = credentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios.post('', credentials);
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
    if (type === 'success') {
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      // console.log('type: ', type);
      // console.log('accessToken: ', accessToken);
      // console.log('user: ', user);
      await dispatch({ type: GOOGLE_SIGNIN_SUCCESS, payload: user });
    }
  } catch ({ message }) {
    dispatch({ type: GOOGLE_SIGNIN_FAIL, payload: message });
  }
};
