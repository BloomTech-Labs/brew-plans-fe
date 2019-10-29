import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  SET_TOKEN
} from './actionTypes.js';

import * as firebase from 'firebase';

export const setTokenInState = token => dispatch => {
  dispatch({ type: SET_TOKEN, payload: token })
}

export const authSignup = authData => dispatch => {
  dispatch({ type: USER_REGISTER_START })

  firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: USER_REGISTER_FAIL, payload: err })
    })
}

export const authSignIn = authData => dispatch => {
  dispatch({ type: USER_SIGNIN_START })
  firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
    .then(res => {
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: USER_SIGNIN_FAIL, payload: err })
    })
}