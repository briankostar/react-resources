import React from 'react';
import { Route, Link } from "react-router-dom";

function SubRouteHandleComponent({ match }) {
    return (
        <div>
            {match.params.routeId}
        </div>
    )
}

function SubRouteHandleComponentLimit({ match }) {
    return (
        <div>
            Only shows when routeId is 1, 2 or 3
        </div>
    )
}

export function DynamicSubRoute({ match }) {
    return (
        <div>
            <h2>DynamicSubRoute</h2>
            <Route exact path={match.path} render={() => <h3>Select a subroute</h3>}></Route>

            <Link to={`${match.url}/subroute1`}>subroute1</Link><br />
            <Link to={`${match.url}/subroute2`}>subroute2</Link><br />
            <Link to={`${match.url}/subroute3`}>subroute3</Link><br />

            <hr />
            <Route path={`${match.path}/:routeId`} component={SubRouteHandleComponent}></Route>
            <Route path={`${match.path}/:routeId(1|2|3)`} component={SubRouteHandleComponentLimit}></Route>
        </div>
    )
}

