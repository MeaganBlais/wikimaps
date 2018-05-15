import { createStore, combineReducers } from 'redux';
import testReducer from '../reducers/testReducer';

export default  () => {
  const store = createStore(
    combineReducers({
      test: testReducer
    })
  );

  return store;
}