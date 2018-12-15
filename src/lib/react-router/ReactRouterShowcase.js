import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'

import { DynamicSubRoute } from './DynamicSubRoute'
import { SimpleLogin } from './SimpleLogin'
import { PromptForm } from './PromptForm'
import { FourOhFour } from './404'

import MarkdownViewer from '../../components/markdownViewer/markdownViewer'
import TabContainer from '../../components/TabContainer'

export class ReactRouterShowcase extends Component {

    render() {
        let menuItems = [{ url: '/', name: 'Notes' },
        { url: '/dynamic-sub-route', name: 'Dynamic Sub Route' },
        { url: '/simple-login', name: 'Simple Login' },
        { url: '/prompt', name: 'Prompt' },
        { url: '/404', name: '404' }]

        return (
            <div>
                <Header as='h1'>React Router Showcase</Header>

                <TabContainer menuItems={menuItems}></TabContainer>

                <Route path={`${this.props.match.url}/dynamic-sub-route`} component={DynamicSubRoute}></Route>
                <Route path={`${this.props.match.url}/simple-login`} component={SimpleLogin}></Route>
                <Route path={`${this.props.match.url}/prompt`} component={PromptForm}></Route>
                <Route path={`${this.props.match.url}/404`} component={FourOhFour}></Route>

                {
                    this.props.location.pathname === '/react-router' ?
                        <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/react-router.md'></MarkdownViewer>
                        : null
                }
            </div >

        )
    }
}

