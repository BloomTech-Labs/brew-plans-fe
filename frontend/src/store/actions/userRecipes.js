import {
  GET_USER_RECIPES
} from './actionTypes.js';

export const getUserRecipes = (userId) => {
  return {
    type: GET_USER_RECIPES,
    payload: userId
  }
}