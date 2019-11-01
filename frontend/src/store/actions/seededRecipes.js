import axios from 'axios';

import {
  GET_SEEDED_RECIPES_START,
  GET_SEEDED_RECIPES_SUCCESS,
  GET_SEEDED_RECIPES_FAIL
} from './actionTypes.js';

export const getSeededRecipes = () => (dispatch, getState) => {
  // Grabs current token from state...
  const token = getState().user.currentUser.token;
  console.log('token: ', token);
  dispatch({ type: GET_SEEDED_RECIPES_START });
  
  axios
    .get('https://brewplans-production.herokuapp.com/seededRecipes/all')
    .then(res => {
      dispatch({ type: GET_SEEDED_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SEEDED_RECIPES_FAIL, payload: err });
    });
};
