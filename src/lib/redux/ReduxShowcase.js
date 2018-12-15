import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'
import TabContainer from '../../components/TabContainer'

import AddSubtract from './AddSubtract'

class ReduxShowcase extends Component {

    render() {
        let menuItems = [{ url: '/', name: 'Notes' },
        { url: '/add-subtract', name: 'AddSubtract' }]

        return (
            <div>
                <Header as='h1'>Redux Router Showcase</Header>

                <TabContainer menuItems={menuItems}></TabContainer>

                <Route path={`${this.props.match.url}/add-subtract`} component={AddSubtract}></Route>

                {
                    this.props.location.pathname === '/redux' ?
                        <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/redux.md'></MarkdownViewer>
                        : null
                }

            </div>
        )
    }
}

export default ReduxShowcase;
