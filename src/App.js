import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { ReactRouterShowcase } from './lib/react-router/ReactRouterShowcase'
import ReduxShowcase from './lib/redux/ReduxShowcase'
import { ThunkShowcase } from './lib/thunk/ThunkShowcase'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './lib/redux/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h2>React Resources:</h2>

            <Link to="/react-router">React Router</Link>
            <Link to="/redux">Redux</Link>
            <Link to="/thunk">Thunk</Link>
            <Link to="/saga">Saga</Link>

            <Route path="/react-router" component={ReactRouterShowcase}></Route>
            <Route path="/redux" component={ReduxShowcase}></Route>
            <Route path="/thunk" component={ThunkShowcase}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
