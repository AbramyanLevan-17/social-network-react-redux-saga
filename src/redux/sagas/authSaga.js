import { put, takeEvery,call } from 'redux-saga/effects'
import {REQUEST_SIGN_IN, SIGN_IN} from '../types'


export function* authWatcher(){
    yield takeEvery(REQUEST_SIGN_IN,authWorker)
}

function* authWorker(action){
    const res =  yield call(fetchUser,action)
    yield put({type:SIGN_IN,res})
}

async function fetchUser(action){
    const headers = {
            "Content-Type": "application/json",                                                                                                
            "Access-Control-Origin": "*"
           }
    const response = await fetch('https://postify-api.herokuapp.com/auth/sign_in',{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(action),
    })
    const data = {
    res: await response.json(),
    ok: response.ok,
    }
    const setHeaders={
      'access-token':response.headers.get('access-token'),
      'client':response.headers.get('client'),
      'uid':response.headers.get('uid'),
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
    }
      if(data.ok){localStorage.setItem('headers',JSON.stringify(setHeaders))}
   return  data;
}