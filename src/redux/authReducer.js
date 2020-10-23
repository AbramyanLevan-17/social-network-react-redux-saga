import { LOG_OUT, SIGN_IN } from "./types"

const initialState = {
  isAuthorized: false,
  
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
          action.payload.then((res)=>{
          localStorage.setItem('headers', JSON.stringify(res));
          return res
        })
        return {isAuthorized : true}
     case LOG_OUT:
          localStorage.clear();
          return {isAuthorized: false}
      default:
      return state;

    }    
  
}