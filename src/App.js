import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Libraies:</h2>

          <Link to="/react-router">React Router</Link>

          <Route path="/react-router" component="ReactRouterShowcase"></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
