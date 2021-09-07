import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './Registration/Registration';
import Login from './Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
        </div>
        <Switch>
          <Route path='/registration' exact component={Registration}></Route>
          <Route path='/Login' exact component={Login}></Route>

        </Switch>
      </Router>

    </div>
    );
}

export default App;
