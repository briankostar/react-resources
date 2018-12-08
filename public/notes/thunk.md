# Thunk Summary

## What is it?
It's a redux middleware that lets us write action creators that return function rather an action.
What's a thunk? Comes from past-tense of 'think'. It's just a function that returns an expression. Instead of evaluating an expression immidiately, by saving it in a thunk and calling the function later, we delay the evaluation.  
eg. `let x = 1 + 2;` Just an expression  
`let foo = () => 1 + 2;` Foo is a thunk, and can be called later anytime.

# Why use thunk?
Middlware can be useful in delaying dispatch of an action, dispatch only when conditions are met, etc. Normally we use action creators to dispatch an action. What if we want to do this asyncronously? We can use timeout, or use promise to dispatch action on resolve. However, this isn't ideal as we'd have to create a new timeout, or promise for every async action dispatch. Not only that, all async actions will be in race condition and not fully under our control.  
To solve this, we can make a function that.. takes `store` and action creator that dispatches the action at appropriate times. 
If we implement this ourselves though.. we have to keep track when to pass the store for async actions which can be annoying.
Thunk middleware makes this easy for us by letting `dispatch()` take a function and pass it a `dispatch` object which it'll use to call action creators asyncronously.  

# How to use:
`npm install redux-thunk`  
then import applyMiddleware from redux and thunk from redux-thunk  
create store:  
`const store = createStore( rootReducer, applyMiddleware(thunk))`
By enabling thunk middleware, anytime we dispatch a function, the middleware will call that function with `dispatch` object.
This is why when we define a dispatch function, we return a function that takes a dispatch object as so:

    function callAPI(url){
        return function(dispatch){
            apiCall(url).then(
                dispatch(actionCreator())
            )
        }
    }
Redux-thunk also passes getState as the second argument so owe have access to the current state of the store if we need any logic based on that.

# Summary
Thunk is a redux middleware that help control async action on dispatch. 
By calling store.dispatch(thunk), instead of executing the action right away, thunk will execute it's async call and then call dispatch by itself.  
Thunk just needs to return a function that takes dispatch (the library will pass this) and eventually uses this dispatch to execute an action.

# Notes
If we pass 2nd param (dispatchToProps), dispatch won't be passed to props. 