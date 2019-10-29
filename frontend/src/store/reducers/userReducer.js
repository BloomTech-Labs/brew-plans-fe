import {
  UPDATE_SIGNUP_INPUT,
  UPDATE_SIGNIN_INPUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
  USER_LOGOUT,
  SET_TOKEN,
  SET_USER
} from '../actions/actionTypes.js';

import { AsyncStorage } from 'react-native';

import {
storeLocalData
} from '../actions/asyncStorage.js';

const initialState = {
  newUser: {
    email: '',
    password: ''
  },
  signInCredentials: {
    email: '',
    password: ''
  },
  currentUser: {
    email: '',
    id: '',
    loggedIn: false,
    token: null
  },
  loadingError: '',
  allUsers: [],
};

// reducer performs actions on/with user state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNUP_INPUT:
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

    case UPDATE_SIGNIN_INPUT:
      // grab the type of input and the value of input from the payload
      const { inputType, inputValue } = action.payload;
      // return old state spread + new value entered from newUser
      // immutability ensures this only affects newUser state
      return {
        ...state,
        signInCredentials: {
          ...state.signInCredentials,
          [inputType]: inputValue
        }
      };

    // submit user credential data from state to register
    case USER_REGISTER_START:
      return {
        ...state,
        };

    case USER_REGISTER_SUCCESS:
      console.log('register_success action payload: ', action.payload)
      storeLocalData(
        'user', 
        { 
          id: action.payload.user.uid, 
          email: action.payload.user.email 
        })
      return {
        ...state,
        currentUser: {
          id: action.payload.user.uid,
          email: action.payload.user.email,
          loggedIn: true,
        }
      };

    case USER_REGISTER_FAIL:
      alert(action.payload)
      return {
        ...state,
      };

    case USER_SIGNIN_START:
      console.log(action)
      return {
        ...state,
        };

    case USER_SIGNIN_SUCCESS:
      console.log('user sign-in success: ', action.payload)
      storeLocalData(
        'user', 
        { 
          id: action.payload.user.uid, 
          email: action.payload.user.email
        })
      return {
        ...state,
        currentUser: {
          id: action.payload.user.uid,
          email: action.payload.user.email,
          loggedIn: true,
        }
      };

    case USER_SIGNIN_FAIL:
      console.log('user sign-in fail: ', action)
      alert(action.payload);
      return {
        ...state
      }

    case GOOGLE_SIGNIN_START:
      return {
        ...state,
      }

    case GOOGLE_SIGNIN_SUCCESS:
      console.log('google sign-in payload: ', action.payload);
      const { user, token } = action.payload;
      storeLocalData('token', token);
      storeLocalData('user', {
        id: user.id,
        email: user.email,
      })
      return {
        ...state,
        currentUser: {
          id: user.id,
          loggedIn: true,
          token: token
        }
      };
      
    case GOOGLE_SIGNIN_FAIL:
      console.log(action)
      return {
        ...state,
      }

    case USER_LOGOUT:
      AsyncStorage.clear();
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loggedIn: false,
          token: null
        },
      }

    case SET_TOKEN:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          token: action.payload
        }
      }

    case SET_USER:
      return {
        ...state,
        currentUser: {
          email: action.payload.email,
          id: action.payload.id,
          loggedIn: true
        }
      }

    default:
      return state;
  }
};

export default userReducer;
