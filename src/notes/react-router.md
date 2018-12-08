# React Router Summary

## Router Component

Use `<BrowserRouter>` when server can handle dynamic requests.  
Use `<HashRouter>` when server only serves static files.

The above router component creates a _history_ object, which gets updated every time location changes. Location is also an obj `{ pathname: '/', search: '', hash: '', key: 'abc123' state: {} }`. On change, the other router components gets notified through context. This is why you need the other routing components as child of the router.

Router component should only have 1 child element.

## Route Component

Place `<Route>` component anywhere and it will render a component when the path matches.

`<Route path='/login'>` will math both `/` and `/login`. For such cases, we want to add exact: `<Route exact path='/login'>`

Route component doesn't care about the URL params for matching. `/search?q=test` will only match `/search`
After route is matched, a `match` object will be created with url, path, isExact and params.

##### Route can render content via 3 properties:

1. **component**: `<Route path='/login' component={Login} />`
2. **render**: takes function that return an element.  
   `<Route path='/login' render={()=>{Login}} />`
3. **children**: also takes function that return an element. (will always render even if path doesn't match. passed match will be null if no match)  
   `<Route path='/login' children={()=>{Login}} />`

The rendered component will recieve `match, location, and history` object as prop. These have info about how the <Route> matched the URL.


##### Match:
Obj with info about how <Route path> was matched to the URL.  
Comes with Route component/render/children and withRouter, and matchPath.

    {
        params: obj, 
        isExact: bool. True if entire URL was exactly matched,
        path: string. path pattern used to match
        url: string. matched url.
    }
If `path` is not provided in Route, path will be closest parent match
match obj can be null

##### Location:
Obj representing where the app is now. It's immutable?  
Comes with Route component/render/children and withRouter.  Eg.  

    {
        key: 'ac3df4', // not with HashHistory!
        pathname: '/somewhere'
        search: '?some=search-string',
        hash: '#howdy',
        state: {
            [userDefined]: true
        }
    }

Location obj can be used instead of string for:
    
    <Link to={location}/>
    <Redirect to={location}/>
    history.push(location)
    history.replace(location)
    also pass it to Route, and Switch

##### History:
Obj from another library. Manages browser history. It is mutable so do not change it.

    {
        length: number. # of history stack,
        action: string. current action (PUSH, REPLACE, POP),
        location: object. current location. similar to `location` object, but mutable,
        push(path, [state]): function. pushes new history,
        replace(path, [state]): function. replaces current entry,
        go(n): function. moves pointer in history to n,
        goBack(): function, back page. same as go(-1),
        goForward(): function, forward page. same as go (1),
        block(prompt): function. prevents navigation
    }


## Switch Component

`<Switch>` component will only render the first matching `<Route>` and helps keep our code cleaner. Eg:

    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/user' component={User}/> //Also matches /user:id
        <Route path='/login' component={Login}/>
        <Route component={404}/>  //captures all other routes
    </Switch>

By combining `Switch` with a route that captures for all render, we can easily make 404 page.

`Switch` is also useful for ambiguous route matches. eg when we want both /about, and /:users, which is dynamic and can match anything. If we have a switch, it'll match the defined routes first and treat the rest as dynamic routes.   

    <Switch>
        <Route path="/about" component={About} />
        <Route path="/company" component={Company} />
        <Route path="/:user" component={User} />   //matches anything else
    </Switch>

## Nested Routes

Above /user and /user:id will both be rendered by User component. If we want to nest within User component, do:

    const Roster = () => (
        <Switch>
            <Route exact path='/user' component={UserAll}/> //note exact
            <Route path='/user/:id' component={UserSingle}/>
        </Switch>
    )

## Params

How do we capture params?  
For /user/:id , url after /user/ will be captured as id and stored in `match.params.id` in the prop of the rendering component.

## Queries
React router doesn't have any opinions on parsing URL query strings. However, we can use [URL api](https://developer.mozilla.org/en-US/docs/Web/API/URL) with `location`.

    let params = new URLSearchParams(location.search);
    <Link to={{ pathname: "/account", search: "?name=netflix" }}>Netflix</Link>
    //Use
    params.get("name")  

## Links

How do we navigate between the routes?  
We need the location to change. However, if we use the normal `<a>` tag, it'll cause total reload. Thus, use `<Link>`, which will change the URL and just rendred necessary parts.

    <Link to='/'>Home</Link>
    <Link to='/user'>User</Link>
    <Link to={{pathname: '/user/24'}}>User 24</Link>

Link's `to` prop takes string or location object, which contains pathname, search, hash, state properties. String will actually be converted to location obj.

## Redirects
One Way to reroute is via component render of <Redirect>

    <Redirect
        to={{
            pathname: `/react-router/simple-login/login`,
            state: { from: props.location }
        }}
    />
We can also reroute with history. Make a HOC with `withRouter`, which will have access to `history`.  

    const AuthButton = withRouter(
        ({ history }) => (<div>
            <button
                onClick={() => {
                auth.logout(() => history.push("/react-router/simple-login"));
            }}</button></div> )

## Prompt
You may want to prompt user before transition. ie when form is only half filled, or unsaved state. Use `<Prompt>` for handling this.  

    <Prompt when={this.state.isBlocking} message="You have unsaved changes. Sure you wanna move?"></Prompt>
            