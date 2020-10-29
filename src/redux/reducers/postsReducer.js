import {CREATE_POST, FETCH_POST} from '../types'

const initialState = {
  posts:[],
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type){
   case CREATE_POST:
     if(action.res === 'Created'){
       alert("The Post was successfull created")
     }
    return state
    case FETCH_POST: 
    return  {...state, posts: action.payload}
    default: return state
  }
 
}