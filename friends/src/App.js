import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsPage from "./components/FriendsPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='nav-bar'>
          <h1>Auth Friends</h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Friends</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsPage} />
          <Route path='/login' component={Login} />
          <Route path='/friends' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
