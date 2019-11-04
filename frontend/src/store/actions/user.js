import axios from 'axios';
import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';

import {
  UPDATE_SIGNUP_INPUT,
  UPDATE_SIGNIN_INPUT,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
  USER_LOGOUT,
  SET_USER,
  SET_CURRENT_RECIPE
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

export const setUserInState = user => dispatch => {
  dispatch({ type: SET_USER, payload: user });
};

export const googleSignIn = config => async dispatch => {
  dispatch({ type: GOOGLE_SIGNIN_START });
  try {
    const { type, accessToken, user } = await Google.logInAsync(config);
    // console.log('<-------------Google sign-in Handler------------>');
    // console.log('type: ', type);
    // console.log('accessToken: ', accessToken);
    // console.log('user: ', user);
    if (type === 'success') {
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      // console.log('type: ', type);
      // console.log('accessToken: ', accessToken);
      // console.log('user: ', user);
      // console.log('<-------------Google sign-in Handler------------>');
      dispatch({
        type: GOOGLE_SIGNIN_SUCCESS,
        payload: {
          user: user,
          token: accessToken
        }
      });
    }
  } catch ({ message }) {
    dispatch({ type: GOOGLE_SIGNIN_FAIL, payload: message });
  }
};

export const userLogout = () => dispatch => {
  firebase.auth().signOut();
  dispatch({ type: USER_LOGOUT });
};

export const setCurrentRecipe = recipe => dispatch => {
  dispatch({ type: SET_CURRENT_RECIPE, payload: recipe });
};
