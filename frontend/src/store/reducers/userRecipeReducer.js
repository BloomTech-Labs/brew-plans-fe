import {
  GET_USER_RECIPES_START,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  userRecipes: [],
  isLoading: false
}

const userRecipeReducer = (state = initialState, action) => {
  switch(action.type) {
    // get user's recipes
    case GET_USER_RECIPES_START:
      return {
        ...state,
        isLoading: true
      }

    case GET_USER_RECIPES_SUCCESS:
      return {
        ...state,
        userRecipes: action.payload,
        isLoading: false
      };

    case GET_USER_RECIPES_FAIL:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
}

export default userRecipeReducer;