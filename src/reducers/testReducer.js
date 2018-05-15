
const testReducer = (state = [], action) => {
  switch (action.type) {
    case 'test':
      console.log("YAY the TEST CASE is actually working so action, and reducer are working to");
    default:
      return state;
  }
}

export default testReducer;