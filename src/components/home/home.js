import React from 'react';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

class Home extends React.Component {
    state = { markdown: '' }
    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/briankostar/react-resources/master/README.md")
            .then(res => {
                console.log('data', res)
                this.setState({ markdown: res.data })
            })
    }

    render() {
        return (
            <div>
                Home

                <ReactMarkdown source={this.state.markdown} />
            </div>
        )
    }
}

export default Home