import React from 'react';
import { Route, Link, Redirect, withRouter } from "react-router-dom";

let auth = {
    isAuthenticated: false,
    login(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); //async
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

function publicComponent() {
    return (<div>this is public page</div>)
}
function privateComponent() {
    return (<div>this is private page</div>)
}

//login route redirects to /private if logged in. else shows login buttton
class loginComponent extends React.Component {
    state = { redirect: false };

    login = () => {
        auth.login(() => {
            this.setState({ redirect: true });
        });
    }
    render() {
        if (this.state.redirect) { return <Redirect to='/react-router/simple-login/private'></Redirect>; }
        return (<div> Login Here < button onClick={this.login} > Log in</button > </div >)
    }
}

//HOC for Route. make Route's render either normal Route or.. Redirect route
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={props =>
                auth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: `/react-router/simple-login/login`,
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        ></Route>
    )
}

const AuthButton = withRouter(
    ({ history }) =>
        auth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        auth.logout(() => history.push("/react-router/simple-login"));
                    }}
                >
                    Sign out
          </button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )
);

export function SimpleLogin({ match }) {
    return (
        <div>
            <h2>Simple login</h2>
            <p>Show main, public, private page. private page is only accessible if conditions met</p>
            <AuthButton></AuthButton>
            <Link to={`${match.url}/public`}>public</Link>
            <Link to={`${match.url}/private`}>private</Link>
            {/* <Link to={`${match.url}/login`}>login</Link> */}

            <Route path={`${match.url}/public`} render={publicComponent}></Route>
            {/* <Route path={`${match.url}/private`} render={privateComponent}></Route> */}
            <Route path={`${match.url}/login`} component={loginComponent}></Route>
            <PrivateRoute path={`${match.url}/private`} component={privateComponent} />
        </div>
    )
}