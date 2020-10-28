import {FETCH_AUTH_USER, REQUEST_AUTH_USER} from "../types";
const initialState = {
   status:'',
   error:'',
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTH_USER:
            return {...state}
        case REQUEST_AUTH_USER:
            return {...state, status: action.payload.status, error: action.payload.errors ? action.payload.errors.full_messages : ''}
        default: return state
    }
}



