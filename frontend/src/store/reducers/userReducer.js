import {
  UPDATE_USER_INPUT,
  SUBMIT_USER_INPUT
} from '../actions/actionTypes.js'

const initialState = {
  user: {
    username: '',
    password: '',
    email: ''
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER_INPUT:
      const { type, value } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          [type]: value
        }
      }

    case SUBMIT_USER_INPUT:
      const userCredentials = action.payload;
      return {
        ...state,
        user: {
          username: userCredentials.username,
          password: userCredentials.password,
          email: userCredentials.email
        }
      }

    default:
      return state;
  }
};

export default userReducer;