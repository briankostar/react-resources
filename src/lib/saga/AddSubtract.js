import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

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

class AddSubtract extends Component {
    render() {
        const { num, add, add_async, sub } = this.props;
        return (
            <div>
                <p>Number: {num}</p>
                <Button primary onClick={add}>Add</Button>
                <Button primary onClick={add_async}>Add After 1 Sec</Button>
                <Button primary onClick={sub}>Subtract</Button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddSubtract)
