# Saga Summary

## What
Redux library for managing async data fetching. It's a redux middleware and uses ES6 generators to make async flow look syncronous.

## Why
Compared to redux-thunk, saga has cleaner syntax use and is more useful for more complex data manipulation.

## How
Use it similarly to redux thunk, as a middleware.

    import createSagaMiddleware from 'redux-saga'
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga)

Here, rootSaga is a generator function that hold other generator functions.
These are all activated in parallel at start.

    function* incrementAsync() {
        yield delay(1000)
        yield put({ type: 'ADD' })
    }

    function* watchIncrementAsync() {
        yield takeEvery('ADD_ASYNC', incrementAsync)
    }

    export default function* rootSaga() {
        yield all([
            helloSaga(),
            watchIncrementAsync()
        ])
    }

Use saga's helper functions `put` `takeEvery` and `all`. Put will dispatch the action, takeEvery will listen for an action and call a function. `all` will merge the generators together.
Now that saga is listening for ADD_ASYNC action and will fire ADD after 1s, we can just dispatch those actions as we normally would.

## Glossary

#### Effect
This is js object that has instructions to be executed by the saga middleware. It is created using the saga  functions such as `call`

#### Task
background running process. Can run in parallel, created with fork() function

#### Watcher
generator function that watches for dispatched actions

#### Worker
generator function that will handle an action

## API
### Helpers
- takeEvery
- takeLatest
- throttle

### Effect Creators
- take(pattern)
- put(action)
- call()
- join()
- cancel()
- .. and more

