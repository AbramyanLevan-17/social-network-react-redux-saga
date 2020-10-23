import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore ,compose, applyMiddleware} from 'redux'
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas' 

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
sagaMiddleware.run(sagaWatcher) 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
