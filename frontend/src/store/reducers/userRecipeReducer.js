import {
  GET_USER_RECIPES_START,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL,
  DELETE_USER_RECIPE_START,
  DELETE_USER_RECIPE_SUCCESS,
  DELETE_USER_RECIPE_FAIL,
  UPDATE_USER_RECIPE_INPUT,
  UPDATE_USER_RECIPE_START,
  UPDATE_USER_RECIPE_SUCCESS,
  UPDATE_USER_RECIPE_FAIL,
  NEW_RECIPE_INPUT_UPDATE,
  CREATE_USER_RECIPE_START,
  CREATE_USER_RECIPE_SUCCESS,
  CREATE_USER_RECIPE_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  userRecipes: [],
  edittedRecipe: {},
  newRecipe: {
    water_temp: 150,
    coarseness: 'Fine',
    title: 'Createdd',
    user_id: 1
  },
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
      // console.log('user recipes payload: ', action.payload)
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

    case UPDATE_USER_RECIPE_INPUT:
      const { type, value } = action.payload;
      console.log(state.edittedRecipe)
      return {
        ...state,
        edittedRecipe: {
          ...state.edittedRecipe,
          [type]: value
        }
      }

    case DELETE_USER_RECIPE_START:
        console.log(action)
      return {
        ...state
      }  

    case DELETE_USER_RECIPE_SUCCESS:
      console.log('delete success payload: ', action.payload)
      return {
        ...state,
        userRecipes: state.userRecipes.filter(recipe => recipe.id !== action.payload)
      }

    case DELETE_USER_RECIPE_FAIL:
        console.log(action)
      return {
        ...state,
      }  

    case UPDATE_USER_RECIPE_START:
      console.log('update user recipe start: ', action)
      return {
        ...state,
      }

    case UPDATE_USER_RECIPE_SUCCESS:
      console.log('update user recipe success: ', action.payload.updated)
      return {
        ...state,
        userRecipes: state.userRecipes.filter(recipe => recipe.id !== action.payload.updated.id)
      }

    case UPDATE_USER_RECIPE_FAIL:
      console.log('update user recipe fail: ', action)
      return {
        ...state,
      }

    case NEW_RECIPE_INPUT_UPDATE:
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          [type]: value
        }
      }

    case CREATE_USER_RECIPE_START:
      console.log(action)
      return state;

    case CREATE_USER_RECIPE_SUCCESS:
      console.log(action)
      return state;

    case CREATE_USER_RECIPE_FAIL:
      console.log(action)
      return state;

    default:
      return state;
  }
}

export default userRecipeReducer;