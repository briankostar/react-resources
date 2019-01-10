# Saga Summary

## What
Redux library for managing async data fetching. It's a redux middleware and uses ES6 generators to make async flow look syncronous.

## Why
Compared to redux-thunk, saga has cleaner syntax use and is more useful for more complex data manipulation.

## Summary
Saga makes async calls and other data changing actions easier to manage.  
It's a middleware, so it intercepts actions and takes control.  
A saga, is a generator function that causes a "side-effect/Effect".  
    It uses yield, which returns a value in a step of the generator fcn. This Effect is sent to the middleware for processing.  
    If yield returns promise/blocking Effect, saga middlewares waits until its resolved to get the next yield value.  
        We want to do this if the next yield would depend on the earlier resolve.  
    Otherwise, if yield returns non-blocking effect, such as action, the saga middleware immidiately iterates to the next yield.  
Effect is just.. anything that we define for the yield in the generator to return. (API call, promise, even actions for store)  
Effect is technically an object that has instructions for the saga middleware. Its created by Effect Creator functions.   
    Eg. call() returns something like {CALL: [fcn, arg]} which the saga middleware will interpret.  
We often want to divide the generator to be Watchers (catching action and calls other) and Workers(api call, dispatch action type)  

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

