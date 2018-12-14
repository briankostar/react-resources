import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Menu, Header } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'

import AddSubtract from './AddSubtract'

class ReduxShowcase extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push(`${this.props.match.url}${name}`)
    }

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Header as='h1'>Redux Router Showcase</Header>

                <Menu tabular>
                    <Menu.Item name='' active={activeItem === 'Notes'} onClick={this.handleItemClick} >Notes</Menu.Item>
                    <Menu.Item name='/add-subtract' active={activeItem === 'AddSubtract'} onClick={this.handleItemClick} />
                </Menu>

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
