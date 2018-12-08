# Redux Summary

## What is it?
Redux is a library used to manage data state. It's often used with react, but the two librarys can be used completely separate.  

## Why use it?
Idea behind redux is the one single source of truth, which is the data store. It is immutable and tightly controlled so we know exactly how & why the application data is changed.

##  How it works
To interact with the store, we use `dispatch` and `state`.  

Dispatch is like a setter. It takes an action, which is an object describing the change to make to the store, and passes it to a reducer. 
Reducer will take the action, and the current state and return a new state.  

To read data from the state, we do not get it directly from the store. Instead we get a snapshot of it with store.getState().
State is like a getter. It gives us the state of the application at a certain time.

## How redux connects with react

How do we use redux in our react application then? React's way of passing data is through `prop` from parent component to child component. We can create a redux store anywhere, but it would be pain in the ass to pass it along to every single layer of component.  
Thankfully, react has a concept of Context with Providers and Consumers which can provide data from top level component and have it be use via any child component.  But even more thankfully, we have `react-redux` library which has a `Provider` for redux.

    const store = createStore(
        reducer,
        middleware()
    );

    <Provider store={store}> <App /> </Provider>

After making a redux store like above, we can easily have it available to all child layers as seen.

**Does all components inherit the `store` in their `prop`?**
No, to make this happen, we need to `connect` them.
Remember, we cannot directly use the store. We need to use `dispatch` and `state`, which comes with `store`.

### connect()
Connect function from `react-redux` basically wraps any component, and gives it ability to get/set from the `store`. Since it has access to the store's `state` and `dispatch`, it'll get the specified data from the state, and also give dispatch function and inject them into the target component.   
Simply it gets data from the store, and gives means to update the store.  

    import { connect } from 'react-redux'

    const TodoItem = ({ todo, destroyTodo }) => {
    return (
        <div>
        {todo.text}
        <span onClick={destroyTodo}> x </span>
        </div>
    )
    }

    const mapStateToProps = state => {
    return {
        todo: state.todos[0]
    }
    }

    const mapDispatchToProps = dispatch => {
    return {
        destroyTodo: () =>
        dispatch({
            type: 'DESTROY_TODO'
        })
    }
    }

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodoItem)

Above returns a TodoItem component that is connected to the store. 
mapStateToProps and mapDispatchToProps are both pure functions, and returns an object where the keys are passed as props.