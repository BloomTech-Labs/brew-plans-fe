import {
  UPDATE_SIGNUP_INPUT,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_ALL_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL
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
    photoUrl: '',
    firstName: '',
    lastName: '',
    isLoading: false
  },
  loadingError: '',
  allUsers: [],
  isLoggedIn: false
};

// reducer performs actions on/with user state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // update state when new user enters username/password/email
    case UPDATE_SIGNUP_INPUT:
      // console.log('state: ', state);
      // console.log('update_user payload:', action.payload);
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
        },
        loadingError: action.payload
      }

    case GET_USER_INFO_START:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: true
        }
      }

    case GET_USER_INFO_SUCCESS:
      const searchedUser = action.payload;
      return {
        ...state,
        currentUser: {
          email: searchedUser.email,
          username: searchedUser.username,
          isLoading: false,
          id: searchedUser.id
        }
      };

    case GET_ALL_USER_INFO_SUCCESS:
      return {
        ...state,
        allUsers: action.payload
      }

    case GET_USER_INFO_FAIL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoading: false
        },
        loadingError: action.payload
      };

    case GOOGLE_SIGNIN_START:
      console.log(action)
    case GOOGLE_SIGNIN_SUCCESS:
      console.log('success payload: ', action.payload)
      
    case GOOGLE_SIGNIN_FAIL:
      console.log(action)

    default:
      return state;
  }
};

export default userReducer;
