import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST_PUT_POST, PUT_POST } from '../types'

export function* putPostWatcher() {
  yield takeEvery(REQUEST_PUT_POST, putPostWorker)
}

function* putPostWorker(action) {
  const res = yield call(putPost, action)
  yield put({ type: PUT_POST,res })
}

async function putPost(action) {
  const headers = JSON.parse(localStorage.getItem('headers'));
  const response = await fetch(`https://postify-api.herokuapp.com/posts/${action.id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(action)
  }).then(function (response) {
      alert("Post was updated successfully");
      return response
    }).catch(function () {
      alert("You are not owner of the post");
    });
    return await response.json()
}