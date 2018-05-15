import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
// main app
import App from './components/App';
import { testPrint } from './actions/testAction';

const store = configureStore();

store.dispatch(testPrint());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));