import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'
import TabContainer from '../../components/TabContainer'

import AddSubtract from './AddSubtract'

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
        let menuItems = [{ url: '/', name: 'Notes' },
        { url: '/add-subtract', name: 'AddSubtract' }]

        return (
            <div>
                <Header as='h1'>Saga Router Showcase</Header>

                <TabContainer menuItems={menuItems}></TabContainer>

                <Route path={`${this.props.match.url}/add-subtract`} component={AddSubtract}></Route>

                {
                    this.props.location.pathname === '/saga' ?
                        <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/saga.md'></MarkdownViewer>
                        : null
                }
            </div>
        )
    }
}

export default SagaShowcase;
