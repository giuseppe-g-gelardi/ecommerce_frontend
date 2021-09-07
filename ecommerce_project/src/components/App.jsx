import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button
} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Navbar id='navbar' fixed='top' bg='dark' variant='dark'>
            <Navbar.Brand href=''>Fooooooooood!</Navbar.Brand>
                <Nav.Link href='/home'> Home</Nav.Link>
                <Nav.Link href='/login'> Login</Nav.Link>
          </Navbar>
        </div>
        <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
        </Switch>
      </Router>

    </div>
    );
}

export default App;
