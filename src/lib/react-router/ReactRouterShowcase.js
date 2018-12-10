import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Menu, Header } from 'semantic-ui-react'

import { DynamicSubRoute } from './DynamicSubRoute'
import { SimpleLogin } from './SimpleLogin'
import { PromptForm } from './PromptForm'
import { FourOhFour } from './404'

import MarkdownViewer from '../../components/markdownViewer/markdownViewer'

export class ReactRouterShowcase extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push(`${this.props.match.url}${name}`)
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Header as='h1'>React Router Showcase</Header>

                <Menu tabular>
                    <Menu.Item name='' active={activeItem === 'Notes'} onClick={this.handleItemClick} >Notes</Menu.Item>
                    <Menu.Item name='/dynamic-sub-route' active={activeItem === 'Dynamic Sub Route'} onClick={this.handleItemClick} />
                    <Menu.Item name='/simple-login' active={activeItem === 'Simple Login'} onClick={this.handleItemClick} />
                    <Menu.Item name='/prompt' active={activeItem === 'Prompt'} onClick={this.handleItemClick} />
                    <Menu.Item name='/404' active={activeItem === '404'} onClick={this.handleItemClick} />
                </Menu>

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

