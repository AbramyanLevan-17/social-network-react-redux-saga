import {put,call,takeEvery} from 'redux-saga/effects'
import {REQUEST_CREATE_COMMENT,CREATE_COMMENT} from '../types'

export function* createCommentWathcer(){
  yield takeEvery(REQUEST_CREATE_COMMENT,createWorker)
}

function* createWorker(action){
  const res = yield call (createComment,action)
  yield put({type:CREATE_COMMENT,res})
}

async function createComment(action){
  const headers = JSON.parse(localStorage.getItem('headers'))
  const response = await fetch('https://postify-api.herokuapp.com/comments',{
    method:'POST',
    headers: headers,
    body: JSON.stringify(action.comment)
  })
    return await response.json()
}