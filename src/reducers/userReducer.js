const defaultUserState = {
  loggedIn: false,
  maps: [],
  name: '',
  email: '',
}

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      console.log("USER LOGGED IN REDUCER ACTIVATED");
      // return {...state, loggedIn: true }
    default:
      return state;
  }
}

export default userReducer;