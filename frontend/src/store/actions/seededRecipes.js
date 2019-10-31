import axios from 'axios';

import {
  GET_SEEDED_RECIPES_START,
  GET_SEEDED_RECIPES_SUCCESS,
  GET_SEEDED_RECIPES_FAIL
} from './actionTypes.js';

export const getSeededRecipes = () => (dispatch, getState) => {
  // Grabs current token from state...
  const token = getState().user.currentUser.token;

  dispatch({ type: GET_SEEDED_RECIPES_START });
  
  axios
    .get('https://backend-development-coffee.herokuapp.com/seededrecipes/all')
    .then(res => {
      dispatch({ type: GET_SEEDED_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SEEDED_RECIPES_FAIL, payload: err });
    });
};
