import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
// main app
import AppRouter from './routes/AppRouter';
import { testPrint } from './actions/testAction';

const store = configureStore();

store.dispatch(testPrint());
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));