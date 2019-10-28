import {
  UPDATE_SIGNUP_INPUT,
  UPDATE_SIGNIN_INPUT,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_ALL_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
  USER_LOGOUT
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
      // console.log('register_success action: ', action)
      storeLocalData('token', action.payload.idToken)
      return {
        ...state,
        currentUser: {
          id: action.payload.localId,
          loggedIn: true,
          token: action.payload.idToken
        }
      };

    case USER_REGISTER_FAIL:
      // console.log('error: ', action.payload);
      // console.log(action.type)
      alert('Authorization failed.')
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: false
        },
        loadingError: action.payload
      };

    case USER_SIGNIN_START:
      console.log(action)
      return {
        ...state,
        };

    case USER_SIGNIN_SUCCESS:
      console.log('user sign-in success: ', action)
      storeLocalData('token', action.payload.idToken)
      return {
        ...state,
        currentUser: {
          id: action.payload.localId,
          loggedIn: true,
          token: action.payload.idToken
        }
      };

    case USER_SIGNIN_FAIL:
      console.log('user sign-in fail: ', action)
      return {
        ...state
      }

    case GET_USER_INFO_START:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
        }
      };

    case GET_USER_INFO_SUCCESS:
      const searchedUser = action.payload;
      return {
        ...state,
        currentUser: {
          email: searchedUser.email,
          username: searchedUser.username,
          id: searchedUser.id
        }
      };

    case GET_ALL_USER_INFO_SUCCESS:
      return {
        ...state,
        allUsers: action.payload
      };

    case GET_USER_INFO_FAIL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
        },
        loadingError: action.payload
      };

    case GOOGLE_SIGNIN_START:
      return {
        ...state,
      }

    case GOOGLE_SIGNIN_SUCCESS:
      const { user, token } = action.payload;
      storeLocalData('token', token);
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

    default:
      return state;
  }
};

export default userReducer;
