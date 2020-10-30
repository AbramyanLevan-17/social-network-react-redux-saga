import { CREATE_POST, FETCH_COMMENTS } from "../types"

const initialState = {
  comments: [],
  comment:{},
}

export const commentsReducer = (state = initialState, action)=>{
    switch(action.type){
      case FETCH_COMMENTS:
        return {...state, comments: action.res}
        case CREATE_POST:{
          return{...state, comment: action.res}
        }
        default:
      return state;
}
    }
    