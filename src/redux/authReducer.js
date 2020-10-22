import { SIGN_IN } from "./types"

const initialState = {
  isAuthorized: false,
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
      case SIGN_IN:
        localStorage.setItem('headers',JSON.stringify(action.payload));
        break;
      default:
      return state;

    }    
  
}