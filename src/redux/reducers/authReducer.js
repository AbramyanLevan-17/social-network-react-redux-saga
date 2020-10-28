import { LOG_OUT, REQUEST_SIGN_IN, SIGN_IN } from "../types"

const initialState = {
  isAuthorized: false,
  id:'',
  headers:{},
  
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
        console.log(action)
        return {...state, id:action.res.res.data.id, isAuthorized:true, headers: action.res.headers}
        case LOG_OUT:
          return initialState
      default:
      return state;

    }    
  
}