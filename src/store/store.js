import { createStore, combineReducers } from 'redux';
import testReducer from '../reducers/testReducer';
import userReducer from '../reducers/userReducer';

export default  () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      test: testReducer
    })
  );

  return store;
}