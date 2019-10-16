import axios from 'axios';

import {
  GET_USER_RECIPES
} from '../actions/actionTypes.js';

const initialState = {
  userRecipes: [],
  isLoading: false
}

const userRecipeReducer = (state = initialState, action) => {
  switch(action.type) {
    // get user's recipes
    case GET_USER_RECIPES:
      const { userId } = action.payload;
      axios.get(
        `https://backend-development-coffee.herokuapp.com/userrecipes/${userId}`
        )
        .then(res => {
          return {
            ...state,
            userRecipes: res.data
          }
        })
        .catch(err => {

        })

    default:
      return state;
  }
}

export default userRecipeReducer;