  import {combineReducers} from 'redux'
  import {postsReducer} from './reducers/postsReducer'
  import {authReducer} from './reducers/authReducer'
  import {signupReducer} from './reducers/signupReducer'
  import {commentsReducer} from './reducers/commentsReducer'
  
  export const rootReducer = combineReducers({
      posts:postsReducer,
      auth: authReducer,
      signUp: signupReducer,
      comments: commentsReducer
  })