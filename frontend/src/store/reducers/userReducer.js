const initialState = {
  user: {
    username: '',
    password: '',
    email: ''
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default userReducer;