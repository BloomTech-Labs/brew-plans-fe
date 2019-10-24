import {
  GET_USER_RECIPES_START,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL
} from './actionTypes.js';

import axios from 'axios';

export const getUserRecipes = userId => dispatch => {
  dispatch({ type: GET_USER_RECIPES_START });
  if (userId) {
    axios
      .get(`https://brewplans-production.herokuapp.com/userrecipes/${userId}`)
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  } else {
    axios
      .get(`https://brewplans-production.herokuapp.com/userrecipes/all`)
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  }
};
