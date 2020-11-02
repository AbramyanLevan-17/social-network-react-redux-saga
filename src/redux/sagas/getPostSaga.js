import {takeEvery,put,call} from 'redux-saga/effects'
import {REQUEST_GET_POST,GET_POST} from '../types'  

export function* getPostWatcher(){
    yield takeEvery(REQUEST_GET_POST,getPostWorker)
}

function* getPostWorker(action){
    const res = yield call(getPost,action)
    yield put({type:GET_POST,res})
}

async function getPost(action){
    const headers = JSON.parse(localStorage.getItem('headers'))
    const response = await fetch(`https://postify-api.herokuapp.com/posts/${action.id}`,{
        method: 'GET',
        headers: headers,
    }
    )
    return await response.json()
}