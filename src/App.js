import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

import { BrowserRouter, Route, Link } from "react-router-dom";
import { ReactRouterShowcase } from './lib/react-router/ReactRouterShowcase'

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './lib/redux/reducers/index';
import thunk from 'redux-thunk';

import ReduxShowcase from './lib/redux/ReduxShowcase'
import ThunkShowcase from './lib/thunk/ThunkShowcase'
import rootSaga from './lib/saga/sagas/index'
import SagaShowcase from './lib/saga/SagaShowcase'

// Saga
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Menu>
              <Menu.Item
                name='React Resources'
                // active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
            </Menu>

            <h2>React Resources:</h2>

            <ul>
              <li><Link to="/react-router">React Router</Link></li>
              <li><Link to="/redux">Redux</Link></li>
              <li><Link to="/thunk">Thunk</Link></li>
              <li><Link to="/saga">Saga</Link></li>
            </ul>

            <Route path="/react-router" component={ReactRouterShowcase}></Route>
            <Route path="/redux" component={ReduxShowcase}></Route>
            <Route path="/thunk" component={ThunkShowcase}></Route>
            <Route path="/saga" component={SagaShowcase}></Route>


          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
