import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL
} from './actionTypes.js';

import axios from 'axios';

export const authSignup = authData => dispatch => {
  dispatch({ type: USER_REGISTER_START })

  console.log('authData: ', authData)

  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPkTN3fUIuclil3Z3Y6EOx4ek5B816KkI',
    JSON.stringify({
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
    )
    .then(res => {
      console.log('parsedRes: ', res.data)
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: USER_REGISTER_FAIL, payload: err })
    })
}

export const authSignIn = authData => dispatch => {
  dispatch({ type: USER_SIGNIN_START })
  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPkTN3fUIuclil3Z3Y6EOx4ek5B816KkI',
    JSON.stringify({
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
    )
    .then(res => {
      console.log('sign-in res: ', res)
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: USER_SIGNIN_FAIL, payload: err })
    })
}