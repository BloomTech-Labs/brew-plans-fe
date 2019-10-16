import {
  GET_SEEDED_RECIPES
} from '../actions/actionTypes.js';

export const getSeededRecipes = () => {
  return {
    type: GET_SEEDED_RECIPES
  }
}