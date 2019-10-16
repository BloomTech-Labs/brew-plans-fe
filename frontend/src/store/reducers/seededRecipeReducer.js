import axios from 'axios';

import {
  GET_SEEDED_RECIPES
} from '../actions/actionTypes.js';

const initialState = {
  seededRecipes: [],
  isLoading: false
}

const seededRecipeReducer = (state = initialState, action) => {
  switch(action.type) {

    // make get request to backend to get seeded recipes
    case GET_SEEDED_RECIPES:
      axios.get('https://backend-development-coffee.herokuapp.com/seededrecipes/all')
        .then(res => {
          // update the seededRecipes state with the data from backend
          return {
            ...state,
            seededRecipes: res.data
          }
        })
        .catch(err => {
          console.log(err);
        })

    default:
      return state;
  }
}

export default seededRecipeReducer;