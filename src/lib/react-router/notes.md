#Basics

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

#### Route can render content via 3 properties:

1. component: `<Route path='/login' component={Login} />`
2. render function that return an element.  
   `<Route path='/login' render={()=>{Login}} />`
3. children with function that return an element. (will always show content)  
   `<Route path='/login' children={()=>{Login}} />`

Mostly use `component`. The rendered component will also recieve `match, location, and history` object as prop.

## Switch Component

`<Switch>` component will only render the first matching `<Route>` and helps keep our code cleaner. Eg:

    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/user' component={User}/> //Also matches /user:id
    <Route path='/login' component={Login}/>
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

## Links

How do we navigate between the routes?  
We need the location to change. However, if we use the normal `<a>` tag, it'll cause total reload. Thus, use `<Link>`, which will change the URL and just rendred necessary parts.

    <Link to='/'>Home</Link>
    <Link to='/user'>User</Link>
    <Link to={{pathname: '/user/24'}}>User 24</Link>

Link's `to` prop takes string or location object, which contains pathname, search, hash, state properties. String will actually be converted to location obj.
