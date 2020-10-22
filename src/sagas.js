import {call, put, take, takeEvery} from 'redux-saga/effects'
import {FETCH_POST,REQUEST_POSTS} from './redux/types'


export function*  sagaWatcher(){
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}
function* sagaWorker(){
  const payload = yield call(fetchPosts)
  yield put({type:FETCH_POST, payload})
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}
