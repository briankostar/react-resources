import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch({ type: 'ADD' })
        },
        add_async: () => {
            dispatch({ type: 'ADD_ASYNC' })
        },
        sub: () => {
            dispatch({ type: 'SUB' })
        }
    }
}

class SagaShowcase extends Component {
    render() {
        const { num, add, add_async, sub } = this.props;
        return (
            <div>
                <h2>SagaShowcase</h2>
                Number: {num}
                <button onClick={add}>Add</button>
                <button onClick={add_async}>Add After 1 Sec</button>
                <button onClick={sub}>Subtract</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SagaShowcase)
