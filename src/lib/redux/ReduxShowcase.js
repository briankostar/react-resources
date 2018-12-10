import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react'
import MarkdownViewer from '../../components/markdownViewer/markdownViewer'

const mapStateToProps = state => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch({ type: 'ADD' })
        },
        sub: () => {
            dispatch({ type: 'SUB' })
        }
    }
}

class ReduxShowcase extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push(`${this.props.match.url}${name}`)
    }

    render() {
        const { activeItem } = this.state
        const { num, add, sub } = this.props;
        return (
            <div>
                <Header as='h1'>Redux Router Showcase</Header>

                <Menu tabular>
                    <Menu.Item name='' active={activeItem === 'Notes'} onClick={this.handleItemClick} >Notes</Menu.Item>
                    <Menu.Item name='/demo' active={activeItem === 'Demo'} onClick={this.handleItemClick} />
                </Menu>

                Number: {num}
                <button onClick={add}>Add</button>
                <button onClick={sub}>Subtract</button>

                <MarkdownViewer src='https://raw.githubusercontent.com/briankostar/react-resources/master/public/notes/redux.md'></MarkdownViewer>

            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxShowcase)
