import { call, put, takeEvery } from 'redux-saga/effects'
import {REQUEST_USERS_ME,USERS_ME} from '../types'

export function* usersMeWathcer(){
  yield takeEvery(REQUEST_USERS_ME,usersMeWorker)
} 
function* usersMeWorker(){
  const res = yield call(usersMe)
  yield put({type:USERS_ME,res})
}

async function usersMe(){
  const headers = JSON.parse(localStorage.getItem('headers'))
  const response = await fetch('https://postify-api.herokuapp.com/users/me',{
    method:'GET',
    headers: headers,
  })
  return await response.json()
}