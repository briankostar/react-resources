import React from 'react';
import MarkdownViewer from '../markdownViewer/markdownViewer'

class Home extends React.Component {

    render() {
        return (
            <div>
                <MarkdownViewer src="https://raw.githubusercontent.com/briankostar/react-resources/master/README.md"></MarkdownViewer>
            </div>
        )
    }
}

export default Home