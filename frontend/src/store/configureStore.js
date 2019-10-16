import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/userReducer.js';
import seededRecipeReducer from './reducers/seededRecipeReducer.js';
import userRecipeReducer from './reducers/userRecipeReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  seededRecipes: seededRecipeReducer,
  userRecipes: userRecipeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;