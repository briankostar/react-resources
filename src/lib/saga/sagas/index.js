import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'ADD' })
}


function* watchIncrementAsync() {
    yield takeEvery('ADD_ASYNC', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once in parallel
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}