import React, { Component } from 'react';
import { connect } from 'react-redux'

function actionCreatorForLanguage(language) {
    return {
        type: 'SEARCH_HELLO_IN',
        language: language
    }
}

function sayHelloIn(language) {
    return fetch('https://www.google.ca/search?q=hello+in+' + language);
}

//thunk is a function that returns an expression for use later.
//in redux-thunk case, it returns a function that takes dispatch, and uses that dispatch after an async call
//when thunk middleware takes this function, it'll call the function inside it, passing the dispatch obj
function thunkForActionDispatch(language) {
    return function (dispatch) {
        return sayHelloIn(language).then(
            sucess => dispatch(actionCreatorForLanguage(language))
        )
    }
}

export class ThunkShowcase extends Component {
    componentDidMount() {
        this.props.dispatch(
            thunkForActionDispatch('german')
        );
    }

    componentDidUpdate(prevProps) {
        this.props.dispatch(
            thunkForActionDispatch('german')
        );
    }

    render() {
        return <p>Say hello in.. </p>
    }
}
