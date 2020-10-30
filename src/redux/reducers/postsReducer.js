import {CREATE_POST, FETCH_POST, PUT_POST} from '../types'

const initialState = {
  posts:[],
  post:{},
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POST: 
    return  {...state, posts: action.payload.reverse()}
    case CREATE_POST:
      return {...state, post: action.res}
      case PUT_POST:
        return {...state,post:action.res}
    default: return state
  }
 
}