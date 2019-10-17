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
      console.log(action)

    case GET_USER_RECIPES_SUCCESS:
      console.log(action)

    case GET_USER_RECIPES_FAIL:
      console.log(action)

    default:
      return state;
  }
}

export default userRecipeReducer;