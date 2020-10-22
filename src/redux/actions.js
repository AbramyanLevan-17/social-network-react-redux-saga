import { CREATE_POST, REQUEST_POSTS, SIGN_IN } from "./types";

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