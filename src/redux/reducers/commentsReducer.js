import { CREATE_COMMENT, FETCH_COMMENTS } from "../types"

const initialState = {
  comments: [],
  comment:{}
}

export const commentsReducer = (state = initialState, action)=>{
    switch(action.type){
      case FETCH_COMMENTS:
        return {...state, comments: action.res}
        default:
      return state;
}
    }
    