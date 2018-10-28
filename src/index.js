import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './Reducers'
const store = createStore( reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
