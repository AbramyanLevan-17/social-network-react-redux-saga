import { LOG_OUT, SIGN_IN, USERS_ME } from "../types"

const initialState = {
  isAuthorized: false,
  data:{},
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
        if(action.res.ok === true){
          return {...state, data:action.res.res.data, isAuthorized:true, }
        }else{alert('Invalid login credentials. Please try again.')}
        case USERS_ME:
          return {...state, data:action.res.data}
        case LOG_OUT:
          localStorage.removeItem('headers')
          return {...state, isAuthorized: false, data:{}}
      default:
      return state;

    }    
  
}