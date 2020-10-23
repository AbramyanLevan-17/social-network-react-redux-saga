import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_POST,REQUEST_POSTS} from './types'


export function*  sagaWatcher(){
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}
function* sagaWorker(){
  const payload = yield call(fetchPosts)
  yield put({type:FETCH_POST, payload})
}

async function fetchPosts() {
  const headers = JSON.parse(localStorage.getItem('headers'));
  const response = await fetch('https://postify-api.herokuapp.com/posts',{
      headers:headers
  })
  return await response.json()
}
