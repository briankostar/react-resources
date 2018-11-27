import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { ReactRouterShowcase } from './lib/react-router/ReactRouterShowcase'


import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './thunk/reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>React Resources:</h2>

          <Link to="/react-router">React Router</Link>
          <Link to="/thunk">Thunk</Link>
          <Link to="/saga">Saga</Link>

          <Route path="/react-router" component={ReactRouterShowcase}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
