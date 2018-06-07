export const logIn = (params) => {
  console.log("IM A FIRING MY LOGIN IN ACTION FOR USER");
  return {
    type: 'LOG_IN',
    email: params.user
  }
}

export const register = (params) => {
  console.log("REGISTER ACTION HAS BEEN TRIGGERED");
  return {
    type: 'REGISTER_COMPLETE',
    email: params.user,
  }
}

export const returningUser = (params) => {
  return {
    type: 'RETURNING_USER',
    email: params.user,
  }
}

export const logOut = (params) => {
  return {
    type: 'LOG_OUT',
  }
}