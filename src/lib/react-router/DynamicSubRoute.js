import React from 'react';
import { Route, Link } from "react-router-dom";

function SubRouteHandleComponent({ match }) {
    return (
        <div>
            {match.params.routeId}
        </div>
    )
}

export function DynamicSubRoute({ match }) {
    return (
        <div>
            <h2>DynamicSubRoute</h2>
            <Link to={`${match.url}/subroute1`}>subroute1</Link>
            <Link to={`${match.url}/subroute2`}>subroute2</Link>
            <Link to={`${match.url}/subroute3`}>subroute3</Link>

            <Route exact path={match.path} render={() => <h3>Select a subroute</h3>}></Route>
            <Route path={`${match.path}/:routeId`} component={SubRouteHandleComponent}></Route>
        </div>
    )
}

