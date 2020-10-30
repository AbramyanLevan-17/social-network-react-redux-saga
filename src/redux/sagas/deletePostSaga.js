import {takeEvery,put,call} from 'redux-saga/effects'
import {REQUEST_DELETE_POST,DELETE_POST} from '../types'


export function* deleteWatcher(){
  yield takeEvery(REQUEST_DELETE_POST,deleteWorker)
}

function* deleteWorker(action){
  yield call(deletePost,action)
  yield put({type:DELETE_POST})
}

async function deletePost(action){
  const headers = JSON.parse(localStorage.getItem('headers'));
  await fetch(`https://postify-api.herokuapp.com/posts/${action.id}`, {
    method: "DELETE",
    headers: headers,
  })
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(function () {
      alert("Post was delete successfully");
    }).catch(function (error) {
      alert(error.message);
    });
}