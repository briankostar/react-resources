import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { DynamicSubRoute } from './DynamicSubRoute'

export class ReactRouterShowcase extends Component {

    render() {
        return (
            <div>ReactRouterShowcase
                <Link to={`${this.props.match.url}/dynamic-sub-route`} >dynamic-sub-route</Link>
                <Route path={`${this.props.match.url}/dynamic-sub-route`} component={DynamicSubRoute}></Route>
            </div>

        )
    }
}

