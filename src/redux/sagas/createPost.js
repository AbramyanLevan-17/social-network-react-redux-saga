import { FeaturedVideo } from '@material-ui/icons'
import { createElement } from 'react'
import {takeEvery,put,call} from 'redux-saga/effects'
import {REQUEST_POST_CREATE,CREATE_POST} from '../types'

export function* createWathcer(){
   yield takeEvery(REQUEST_POST_CREATE,createWorker)

}

function* createWorker(action){
    const res = yield call(createPost,action)
    yield put({type:CREATE_POST,action})
}
async function createPost(){
    const response = fetch()
}

