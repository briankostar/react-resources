## Notes

### What
It's a redux middleware that lets us write action creators that return function rather an action.
What's a thunk? Comes from past-tense of 'think'. It's just a function that returns an expression. Instead of evaluating an expression immidiately, by saving it in a thunk and calling the function later, we delay the evaluation.  
eg. `let x = 1 + 2;` Just an expression  
`let foo = () => 1 + 2;` Foo is a thunk, and can be called later anytime.

### Why
Middlware can be useful in delaying dispatch of an action, dispatch only when conditions are met, etc. 

### How to use:
`npm install redux-thunk`
`import applyMiddleware from redux and thunk from redux-thunk`  
create store:  
`const store = createStore( rootReducer, applyMiddleware(thunk))`