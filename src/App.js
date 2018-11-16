import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Libraies:</h2>

          <Link to="/react-router">React Router</Link>

          <Route path="/react-router" children={() => Index}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
