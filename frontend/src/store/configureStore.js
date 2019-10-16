import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/userReducer.js';
import seededRecipeReducer from './reducers/seededRecipeReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  seededRecipes: seededRecipeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;