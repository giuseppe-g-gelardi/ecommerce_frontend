import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  Navbar, 
  Nav, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button, 
  Container
} from 'react-bootstrap'
import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import SearchBar from './SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Navbar id='navbar' fixed='top' bg='dark' variant='dark'>
            <Navbar.Brand href=''>Fooooooooood!</Navbar.Brand>
              <Nav.Link id="NavLinks" href='/home'> Home</Nav.Link>
              <Nav.Link id="NavLinks" href='/login'> Login</Nav.Link>
              <Nav.Link id="NavLinks" href='/registration'> Register</Nav.Link>
              <Nav.Link href='/User'> User</Nav.Link>
              <Nav className="ml-auto">
                <SearchBar />
              </Nav>
          </Navbar>
        </div>
        <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/registration' exact component={Registration}></Route>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
