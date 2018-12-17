import React from 'react';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

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
            <ReactMarkdown source={this.state.markdown} />
        )
    }
}

export default MarkdownViewer