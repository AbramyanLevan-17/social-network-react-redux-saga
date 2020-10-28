import {CREATE_POST, FETCH_POST} from '../types'

const initialState = {
  posts:[],
  post:{}
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type){
   case CREATE_POST:
     console.log('redux',action)
    return {...state, post:action}
    case FETCH_POST: 
    return  {...state, posts: action.payload}
    default: return state
  }
 
}