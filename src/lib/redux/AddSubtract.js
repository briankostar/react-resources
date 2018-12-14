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

class AddSubtract extends Component {

    render() {
        const { num, add, sub } = this.props;
        return (
            <div>
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
)(AddSubtract)
