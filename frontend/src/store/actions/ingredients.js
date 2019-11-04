import axios from 'axios';

import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL
} from './actionTypes.js';

export const getRequiredIngredients = () => dispatch => {
  dispatch({ type: GET_INGREDIENTS_START });
  axios.get();
};
