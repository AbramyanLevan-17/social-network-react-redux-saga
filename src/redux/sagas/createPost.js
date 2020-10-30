import {takeEvery,put,call} from 'redux-saga/effects'
import {REQUEST_POST_CREATE,CREATE_POST} from '../types'

export function* createWathcer(){
   yield takeEvery(REQUEST_POST_CREATE,createWorker)

}

function* createWorker(action){
    const res = yield call(createPost,action)
    yield put({type:CREATE_POST,res})
}
async function createPost(action){
    const headers = JSON.parse(localStorage.getItem('headers'));
   const response = await fetch('https://postify-api.herokuapp.com/posts',{
      method:'POST',
      headers: headers,
      body: JSON.stringify(action.payload),
    }).then(function (response) {
      alert("Post was published");
      return response
    }).catch(function (error) {
      alert(error.message);
    });
    return await response.json()
}

