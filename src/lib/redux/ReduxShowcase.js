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
        sub: () => {
            dispatch({ type: 'SUB' })
        }
    }
}

class ReduxShowcase extends Component {
    render() {
        const { num, add, sub } = this.props;
        return (
            <div>
                <h2>ReduxShowcase</h2>
                Number: {num}
                <button onClick={add}>Add</button>
                <button onClick={sub}>Subtract</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxShowcase)
