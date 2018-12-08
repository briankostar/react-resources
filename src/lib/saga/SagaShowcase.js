import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'

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

                <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/saga.md'></MarkdownViewer>

                <h2>SagaShowcase</h2>
                Number: {num}
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
)(SagaShowcase)
