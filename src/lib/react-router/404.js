import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

function Default() {
    return (
        <p>
            Default
      </p>
    );
}


function Exists() {
    return (
        <div>
            Page exists
        </div>
    )
}

function NoMatch({ match }) {
    return (
        <div>
            404! Page not found!
        </div>
    )
}

export function FourOhFour({ match }) {
    return (
        <div>
            <h2>DynamicSubRoute</h2>
            <Link to={`${match.url}/exists`}>exists1</Link><br />
            <Link to={`${match.url}/asfsdfasdf`}>asdf2fasdf</Link><br />

            <hr />
            <Switch>
                <Route path={`${match.path}/`} exact component={Default} />
                <Route path={`${match.path}/exists`} component={Exists}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
        </div>
    )
}

