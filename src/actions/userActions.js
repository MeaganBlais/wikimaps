export const logIn = (params) => {
  console.log("IM A FIRING MY LOGIN IN ACTION FOR USER");
  return {
    type: 'LOGGED_IN'

  }
}

export const register = (params) => {
  console.log("REGISTER ACTION HAS BEEN TRIGGERED");
  return {
    type: 'REGISTER_COMPLETE'
  }
}