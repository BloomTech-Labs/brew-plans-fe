import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  requiredIngredients = [],
};

const ingredientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_INGREDIENTS_START:
      console.log(action);

    case GET_INGREDIENTS_SUCCESS:
      console.log(action);

    case GET_INGREDIENTS_FAIL:
      console.log(action);

    default:
      return state;
  }
}