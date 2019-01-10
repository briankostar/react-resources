import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Header, Container } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'
import TabContainer from '../../components/TabContainer'

import AddSubtract from './AddSubtract'

class SagaShowcase extends Component {

    render() {
        let menuItems = [{ url: '/', name: 'Notes' },
        { url: '/add-subtract', name: 'AddSubtract' }]

        return (
            <div>
                <Header as='h1'>Saga Showcase</Header>

                <TabContainer menuItems={menuItems}></TabContainer>

                <Container className='container'>
                    <Route path={`${this.props.match.url}/add-subtract`} component={AddSubtract}></Route>

                    {
                        this.props.location.pathname === '/saga' ?
                            <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/saga.md'></MarkdownViewer>
                            : null
                    }
                </Container>
            </div>
        )
    }
}

export default SagaShowcase;
