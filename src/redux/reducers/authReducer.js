import { LOG_OUT, SIGN_IN } from "../types"

const initialState = {
  isAuthorized: false,
  data:{},
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
        if(action.res.ok){
          return {...state, data:action.res.res.data, isAuthorized:true, }
        }
        case LOG_OUT:
          localStorage.removeItem('headers')
          return initialState
      default:
      return state;

    }    
  
}