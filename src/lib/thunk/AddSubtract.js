import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

//thunk is a function that returns an expression for use later.
//in redux-thunk case, it returns a function that takes dispatch, and uses that dispatch after an async call
//when thunk middleware takes this function, it'll call the function inside it, passing the dispatch obj
function thunkForActionDispatch(type) {
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve() }, 500);
        }).then(
            sucess => dispatch({ type: type }) //normally put action creator here based on output
        )
    }
}

class AddSubtract extends Component {
    //1. Dispatch thunk from within component 
    add = () => {
        this.props.dispatch(thunkForActionDispatch('ADD'));
    }

    sub = () => {
        this.props.dispatch(thunkForActionDispatch('SUB'));
    }

    render() {
        const { num, addViaConnect, subViaConnect } = this.props;
        return (
            <div>
                <p>Number: {num}</p>
                {/* <button onClick={this.add}>Add</button> */}
                {/* <button onClick={this.sub}>Subtract</button> */}
                <Button primary onClick={addViaConnect}>Add</Button>
                <Button primary onClick={subViaConnect}>Subtract</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        num: state.num
    }
}

//We can use this method too, but this will stop 'dispatch' from being pass to props.
//2. Pass dispatch function with connect and use that.
const mapDispatchToProps = dispatch => {
    return {
        addViaConnect: () => {
            dispatch(thunkForActionDispatch('ADD'));
        },
        subViaConnect: () => {
            dispatch(thunkForActionDispatch('SUB'));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps  //this is optional. If not passed, ThunkShowcase receives dispatch obj which we can still use for thunk
)(AddSubtract)
