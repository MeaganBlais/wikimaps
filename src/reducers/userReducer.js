const defaultUserState = {
  loggedIn: false,
  maps: [],
  email: '',
}

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      console.log("USER LOGGED IN REDUCER ACTIVATED");
      // return {...state, loggedIn: true }
    case 'REGISTER_COMPLETE':
      console.log(action.email);
      return {...state, email: action.email, loggedIn: true}
    case 'RETURNING_USER':
      return {...state, email: action.email, loggedIn: true}
    case 'LOG_OUT':
      return defaultUserState;
    default:
      return state;
  }
}

export default userReducer;