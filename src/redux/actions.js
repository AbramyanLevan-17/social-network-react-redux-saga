import { CREATE_POST, LOG_OUT, REQUEST_POSTS, SIGN_IN, FETCH_AUTH_USER} from "./types";

export function createPost(post){
  return{
    type:CREATE_POST,
    payload: post, 
  }
}
export function fetchPosts(){
    return {
      type: REQUEST_POSTS
    }
}
export function fetchUser(headers){
  return{
    type: SIGN_IN,
    payload: headers
  }
}
export function logOut(){
  return{
    type: LOG_OUT
  }
}

export function fetchSignUp(dataUser) {
  return {
    email: dataUser.email,
    password: dataUser.password,
    confirm: dataUser.confirm,
    type: FETCH_AUTH_USER,
  };
}