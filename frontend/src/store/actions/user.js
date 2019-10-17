import axios from 'axios';

import {
  UPDATE_SIGNUP_INPUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USER_INFO
} from './actionTypes.js';

export const handleUserSignup = (userCredentials) => dispatch => {
  dispatch({ type: USER_REGISTER_START });
  axios.post(
    'https://brewplans-production.herokuapp.com/users/register',
    userCredentials
    )
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: USER_REGISTER_FAIL, payload: err })
    })
}

export const handleChange = (inputField, inputValue) => dispatch => {
  dispatch({ 
    type: UPDATE_SIGNUP_INPUT, 
    payload: {
      type: inputField,
      value: inputValue
    }
  })
};

export const handleUserLogin = (credentials) => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios.post('', credentials)
}