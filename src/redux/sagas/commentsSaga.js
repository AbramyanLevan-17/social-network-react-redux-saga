import {put,call,takeEvery} from 'redux-saga/effects'
import {REQUEST_COMMENTS,FETCH_COMMENTS} from '../types'

export function* commentsWatcher(){
  yield takeEvery(REQUEST_COMMENTS,commentsWorker)
}

function* commentsWorker(){
  const res = yield call(getComments)
  yield put({type:FETCH_COMMENTS,res})
}

async function getComments(){
  const headers = JSON.parse(localStorage.getItem('headers'))
  const response = await fetch(`https://postify-api.herokuapp.com/comments`,{
    method: "GET",
    headers: headers,
  })
 

  return await response.json()
}