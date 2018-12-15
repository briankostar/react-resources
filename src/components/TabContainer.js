import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Menu } from 'semantic-ui-react'

class TabContainer extends Component {
    state = { activeItem: 'Notes' }

    handleItemClick = (e, attr) => {
        this.setState({ activeItem: attr.name });
        let url = (attr.url === '/') ? '' : attr.url;
        this.props.history.push(`${this.props.match.url}${url}`)
    }

    render() {
        const { activeItem } = this.state
        let menuItems = this.props.menuItems.map((v, i) => {
            return <Menu.Item name={v.name} active={activeItem === v.name} url={v.url} key={i} onClick={this.handleItemClick} />
        })

        return (
            <div>
                <Menu tabular>
                    {menuItems}
                </Menu>
            </div>
        )
    }
}

export default withRouter(TabContainer);
