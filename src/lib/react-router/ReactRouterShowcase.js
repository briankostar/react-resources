import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { DynamicSubRoute } from './DynamicSubRoute'
import { SimpleLogin } from './SimpleLogin'

export class ReactRouterShowcase extends Component {

    render() {
        return (
            <div>ReactRouterShowcase
                <Link to={`${this.props.match.url}/dynamic-sub-route`} >dynamic-sub-route</Link>
                <Link to={`${this.props.match.url}/simple-login`} >Simple login</Link>

                <Route path={`${this.props.match.url}/dynamic-sub-route`} component={DynamicSubRoute}></Route>
                <Route path={`${this.props.match.url}/simple-login`} component={SimpleLogin}></Route>
            </div>

        )
    }
}

