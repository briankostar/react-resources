import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function helloSaga() {
    console.log('Hello Sagas!')
}

function* incrementAsync() {
    yield delay(1000); //delay function takes a ms, return a promise that resolves after that time. 
    yield put({ type: 'ADD' }) //return Effect obj, which middleware runs first before moving on.
}


function* watchIncrementAsync() {
    yield takeEvery('ADD_ASYNC', incrementAsync) //takeEvery is helperfcn to listen for x action, then run a function each time.
}

// we have two sagas but we want to start them together.
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once in parallel
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}