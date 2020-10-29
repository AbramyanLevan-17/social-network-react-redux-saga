import { LOG_OUT, SIGN_IN } from "../types"

const initialState = {
  isAuthorized: false,
  data:{},
  headers:{},
  
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
        return {...state, data:action.res.res.data, isAuthorized:true, headers: action.res.headers}
        case LOG_OUT:
          localStorage.removeItem('headers')
          return initialState
      default:
      return state;

    }    
  
}