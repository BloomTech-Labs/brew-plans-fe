import axios from 'axios';
import {
  UPDATE_SIGNUP_INPUT,
  GET_USER_INFO,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../actions/actionTypes.js';

const initialState = {
  newUser: {
    username: '',
    password: '',
    email: ''
  },
  currentUser: {
    username: '',
    email: '',
    id: '',
    isLoading: false
  },
  isLoggedIn: true
};

// reducer performs actions on/with user state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // update state when new user enters username/password/email
    case UPDATE_SIGNUP_INPUT:
      console.log('state: ', state);
      console.log('update_user payload:', action.payload);
      // grab the type of input and the value of input from the payload
      const { type, value } = action.payload;
      // return old state spread + new value entered from newUser
      // immutability ensures this only affects newUser state
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [type]: value
        }
      };

    // submit user credential data from state to register
    case USER_REGISTER_START:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: true
        }
      };

    case USER_REGISTER_SUCCESS:
      const currentUser = action.payload;
      return {
        ...state,
        currentUser: currentUser
      };

    case USER_REGISTER_FAIL:
      console.log('error: ', action.payload);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: false
        }
      };

    case GET_USER_INFO:
      const { userId } = action.payload;
      axios
        .get(`https://brewplans-production.herokuapp.com/users/${userId}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });

    default:
      return state;
  }
};

export default userReducer;
