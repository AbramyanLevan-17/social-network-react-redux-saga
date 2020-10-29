import { 
  REQUEST_POST_CREATE, 
  LOG_OUT, REQUEST_POSTS, 
  REQUEST_SIGN_IN, 
  FETCH_AUTH_USER,
  REQUEST_COMMENTS,
  REQUEST_CREATE_COMMENT
} from "./types";

export function createPost(post){
  return{
    type:REQUEST_POST_CREATE,
    payload:{title:post.title, 
    description:post.description,}
  }
}
export function fetchPosts(){
    return {
      type: REQUEST_POSTS
    }
}

export function signIn(loginData){
  return{
    type: REQUEST_SIGN_IN,
    email:loginData.email,
    password: loginData.password,
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

export function getComments(){
    return{
      type: REQUEST_COMMENTS,
    }
}
export function createComment(comment){
    return{
      type: REQUEST_CREATE_COMMENT,
      comment: comment,
    }
}