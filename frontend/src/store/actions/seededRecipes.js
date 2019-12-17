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
    // .get('https://brewplans-production.herokuapp.com/seededRecipes/all')
    .get('https://brewplans-be.herokuapp.com/seededRecipes/all')
    //.get('https://backend-development-coffee.herokuapp.com/seededrecipes/all')
    .then(res => {
      // console.log('res', res);
      dispatch({ type: GET_SEEDED_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log('err', err);
      dispatch({ type: GET_SEEDED_RECIPES_FAIL, payload: err });
    });
};
