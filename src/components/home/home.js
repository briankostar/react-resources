import React from 'react';
import { Container } from 'semantic-ui-react'
import MarkdownViewer from '../markdownViewer/markdownViewer'

class Home extends React.Component {

    render() {
        return (
            <Container className='container'>
                <MarkdownViewer src="https://raw.githubusercontent.com/briankostar/react-resources/master/README.md"></MarkdownViewer>
            </Container>
        )
    }
}

export default Home