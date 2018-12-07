import React from 'react';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Container } from 'semantic-ui-react'

class MarkdownViewer extends React.Component {
    state = { markdown: '' }

    componentDidMount() {
        axios.get(this.props.src)
            .then(res => {
                this.setState({ markdown: res.data })
            })
    }

    render() {
        return (
            <Container>
                <ReactMarkdown source={this.state.markdown} />
            </Container>
        )
    }
}

export default MarkdownViewer