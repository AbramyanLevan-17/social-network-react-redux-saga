import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore ,compose, applyMiddleware} from 'redux'
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas/sagaPosts' 
import sagasWatcherUserSignUp from './redux/sagas/signupSaga'
import {authWatcher} from './redux/sagas/authSaga'
import {createWathcer} from './redux/sagas/createPost'
import {commentsWatcher} from './redux/sagas/commentsSaga'
import {createCommentWathcer} from './redux/sagas/commenCreatComment'
import {putPostWatcher} from './redux/sagas/putPost'
import {deleteWatcher} from './redux/sagas/deletePostSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
sagaMiddleware.run(sagaWatcher) 
sagaMiddleware.run(sagasWatcherUserSignUp)
sagaMiddleware.run(authWatcher)
sagaMiddleware.run(createWathcer)
sagaMiddleware.run(commentsWatcher)
sagaMiddleware.run(createCommentWathcer)
sagaMiddleware.run(putPostWatcher)
sagaMiddleware.run(deleteWatcher)

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
