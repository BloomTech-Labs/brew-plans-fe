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
  CREATE_USER_RECIPE_FAIL,
  SET_RECIPE_TO_EDIT_SUCCESS,
  SET_RECIPE_TO_EDIT_START,
  SET_RECIPE_TO_EDIT_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  userRecipes: [],
  edittedRecipe: {},
  newRecipe: {
    water_temp: null,
    coarseness: '',
    title: '',
    brew_type: '',
    ingredients: [],
    instructions: [{ order: 1, text: '', duration: null }]
  },
  recipeToEdit: {
    water_temp: null,
    coarseness: '',
    title: '',
    brew_type: '',
    id: null,
    ingredients: [],
    instructions: []
  },
  isLoading: false
};

const userRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    // get user's recipes
    case GET_USER_RECIPES_START:
      return {
        ...state,
        isLoading: true
      };

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
      };

    case UPDATE_USER_RECIPE_INPUT:
      const { type, value } = action.payload;
      instructionTypes= "text" || "order"|| "duration"
      // console.log(state.recipeToEdit)
      if(type=== instructionTypes) {
        return{
          ...state,
          recipeToEdit: {
            ...state.recipeToEdit,
            instructions: {
              ...state.recipeToEdit.instructions,
            [type]: value
            }
          }
        }
      }
      return {
        ...state,
        recipeToEdit: {
          ...state.recipeToEdit,
          [type]: value
        }
      };

    case DELETE_USER_RECIPE_START:
      console.log(action);

      return {
        ...state,
        isLading: true
      };

    case DELETE_USER_RECIPE_SUCCESS:
      console.log('delete success payload: ', action.payload);
      return {
        ...state,
        isLoading: false,
        userRecipes: state.userRecipes.filter(
          recipe => recipe.id !== action.payload
        )
      };

    case DELETE_USER_RECIPE_FAIL:
      console.log(action);

      return {
        ...state,
        isLoading: false
      };

    case UPDATE_USER_RECIPE_START:
      console.log('update user recipe start: ', action);

      return {
        ...state,
        isLoading: true
      };

    case UPDATE_USER_RECIPE_SUCCESS:
      console.log('update user recipe success: ', action.payload);
      // state.userRecipes = state.userRecipes.filter(
      //   recipe => recipe.id !== action.payload.updated.id
      // );
      // state.userRecipes.unshift(action.payload.updated);

      return {
        ...state,
        isLoading: false
      };

    case UPDATE_USER_RECIPE_FAIL:
      console.log('update user recipe fail: ', action);
      return {
        ...state,
        isLoading: false
      };
    case SET_RECIPE_TO_EDIT_START:
      return {
        ...state,
        isLoading: true
      };
      console.log('update user recipe success: ', action.payload.updated);
    case SET_RECIPE_TO_EDIT_SUCCESS:
      console.log('2. recipe to edit in Reducer: ', action.payload);
      console.log(
        '3. instructions on payload in reducer',
        action.payload.instructions
      );
      return {
        ...state,
        isLoading: false,
        recipeToEdit: {
          water_temp: action.payload.water_temp.toString(),
          coarseness: action.payload.coarseness,
          title: action.payload.title,
          brew_type: action.payload.brew_type,
          id: action.payload.id,
          instructions: action.payload.instructions
        }
      };
    case SET_RECIPE_TO_EDIT_FAIL:
      return {
        ...state,
        isLoading: false
      };

    case NEW_RECIPE_INPUT_UPDATE:
      console.log(action.payload);
      const { inputType, inputValue } = action.payload;
      return {
        ...state,
        newRecipe: {
          ...state.newRecipe,
          [inputType]: inputValue
        }
      };

    case CREATE_USER_RECIPE_START:
      console.log(action);
      return { ...state, isLoading: true };

    case CREATE_USER_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newRecipe: {
          water_temp: null,
          coarseness: '',
          title: '',
          brew_type: '',
          instructions: [],
          ingredients: []
        }
      };

    case CREATE_USER_RECIPE_FAIL:
      console.log(action);

      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default userRecipeReducer;
