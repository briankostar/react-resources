import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

import { BrowserRouter, Route, Link } from "react-router-dom";
import { ReactRouterShowcase } from './lib/react-router/ReactRouterShowcase'

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './lib/redux/reducers/index';
import thunk from 'redux-thunk';

import Home from './components/home/home'
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
            <Menu size='large'>
              <Link to="/">
                <Menu.Item link name='home' active={false} onClick={this.handleItemClick}>
                  <Icon name='home' />
                  React Resources
                </Menu.Item>
              </Link>

              <Menu.Menu >
                <Dropdown item text='Libraries'>
                  <Dropdown.Menu>
                    <Link to="/react-router"><Dropdown.Item>React Router</Dropdown.Item></Link>
                    <Link to="/redux"><Dropdown.Item>Redux</Dropdown.Item></Link>
                    <Link to="/thunk"><Dropdown.Item>Thunk</Dropdown.Item></Link>
                    <Link to="/saga"><Dropdown.Item>Saga</Dropdown.Item></Link>
                  </Dropdown.Menu>
                </Dropdown>

              </Menu.Menu>
            </Menu>

            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/react-router" component={ReactRouterShowcase}></Route>
            <Route path="/redux" component={ReduxShowcase}></Route>
            <Route path="/thunk" component={ThunkShowcase}></Route>
            <Route path="/saga" component={SagaShowcase}></Route>

          </div >
        </BrowserRouter >
      </Provider >
    );
  }
}

export default App;
