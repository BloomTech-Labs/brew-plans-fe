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
  SET_RECIPE_TO_EDIT
} from './actionTypes.js';

import axios from 'axios';

export const getUserRecipes = userId => dispatch => {
  dispatch({ type: GET_USER_RECIPES_START });
  if (userId) {
    axios
      .get(
        `https://backend-development-coffee.herokuapp.com/userrecipes/user/${userId}`
      )
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  } else {
    axios
      .get(`https://backend-development-coffee.herokuapp.com/userrecipes/all`)
      .then(res => {
        dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
      });
  }
};

export const deleteUserRecipe = recipeId => dispatch => {
  dispatch({ type: DELETE_USER_RECIPE_START });
  axios
    .delete(
      `https://backend-development-coffee.herokuapp.com/userrecipes/${recipeId}`
    )
    .then(res => {
      dispatch({ type: DELETE_USER_RECIPE_SUCCESS, payload: recipeId });
    })
    .catch(err => [dispatch({ type: DELETE_USER_RECIPE_FAIL, payload: err })]);
};

export const handleRecipeEdit = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_USER_RECIPE_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
};

export const setRecipeToEdit = recipe => dispatch => {
  dispatch({ type: SET_RECIPE_TO_EDIT, payload: recipe });
};

export const handleRecipeUpdate = (updatedRecipe, recipeId) => dispatch => {
  dispatch({ type: UPDATE_USER_RECIPE_START });
  axios
    .put(
      `https://backend-development-coffee.herokuapp.com/userrecipes/${recipeId}`,
      updatedRecipe
    )
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_USER_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_RECIPE_FAIL, payload: err });
      console.log(err);
    });
};

export const handleNewRecipeInput = (inputField, inputValue) => dispatch => {
  dispatch({
    type: NEW_RECIPE_INPUT_UPDATE,
    payload: {
      inputType: inputField,
      inputValue: inputValue
    }
  });
};

export const createUserRecipe = (newRecipe, userId) => dispatch => {
  dispatch({ type: CREATE_USER_RECIPE_START });
  newRecipe.user_id = userId;
  console.log('new recipe: ', newRecipe);
  axios
    .post(
      `https://backend-development-coffee.herokuapp.com/userrecipes/newrecipe`,
      newRecipe
    )
    .then(res => {
      dispatch({ type: CREATE_USER_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_USER_RECIPE_FAIL, payload: err });
    });
};
