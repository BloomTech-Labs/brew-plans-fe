import axios from 'axios';
import {
  UPDATE_USER_INPUT,
  SUBMIT_USER_INPUT
} from '../actions/actionTypes.js'

const initialState = {
  newUser: {
    username: '',
    password: '',
    email: ''
  }
}

// reducer performs actions on/with user state
const userReducer = (state = initialState, action) => {
  switch(action.type) {

    // update state when new user enters username/password/email
    case UPDATE_USER_INPUT:
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
      }

    // submit user credential data from state to register
    case SUBMIT_USER_INPUT:
      // get the newUser object from state
      const userCredentials = state.newUser;
      // post request to register endpoint with newUser credentials
      axios.post(
        'https://backend-development-coffee.herokuapp.com/users/register', 
        userCredentials
        )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })

    default:
      return state;
  }
};

export default userReducer;