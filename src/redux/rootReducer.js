  import {combineReducers} from 'redux'
  import {postsReducer} from './reducers/postsReducer'
  import {authReducer} from './reducers/authReducer'
  import {signupReducer} from './reducers/signupReducer'
  
  export const rootReducer = combineReducers({
      posts:postsReducer,
      auth: authReducer,
      signUp: signupReducer
  })