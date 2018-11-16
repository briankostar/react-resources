#Basics

## Router Component
Use `<BrowserRouter>` when server can handle dynamic requests.
Use `<HashRouter>` when server only serves static files.

The above router component creates a *history* object, which gets updated every time location changes. On change, the other router components gets notified through context. This is why you need the other routing components as child of the router.

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
`<Switch>` component will only render the first matching `<Route>` and helps keep our code cleaner.
Eg: 

    <Switch>
    <Route exact path='/' component={Home}/>
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='/roster' component={Roster}/>
    <Route path='/schedule' component={Schedule}/>
    </Switch>

## Nested Routes


## Params