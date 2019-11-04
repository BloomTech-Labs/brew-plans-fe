import {
  GET_SEEDED_RECIPES_START,
  GET_SEEDED_RECIPES_SUCCESS,
  GET_SEEDED_RECIPES_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  seededRecipes: [],
  isLoading: false
}

const seededRecipeReducer = (state = initialState, action) => {
  switch(action.type) {
// make get request to backend to get seeded recipes
    case GET_SEEDED_RECIPES_START:
      return {
        ...state,
        isLoading: true
      }

    case GET_SEEDED_RECIPES_SUCCESS: 
    const recipes = action.payload;
    //recipes.instructions.split("////")
      return {
        ...state,
        seededRecipes: recipes,
        isLoading: false
      }

    case GET_SEEDED_RECIPES_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
}

export default seededRecipeReducer;