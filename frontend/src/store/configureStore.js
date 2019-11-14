import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer.js';
import seededRecipeReducer from './reducers/seededRecipeReducer.js';
import userRecipeReducer from './reducers/userRecipeReducer.js';
import logReducer from "./reducers/logReducer.js"

const rootReducer = combineReducers({
  user: userReducer,
  seededRecipes: seededRecipeReducer,
  userRecipes: userRecipeReducer,
  logs: logReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;