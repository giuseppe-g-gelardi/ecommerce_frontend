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
          <Container>
            <Navbar id='navbar' fixed='top' bg='dark' variant='dark'>
              <Navbar.Brand href='#'>Fooooooooood!</Navbar.Brand>
                  <Link to='/home'> Home</Link>
                  <Link to='/login'> Login</Link>
            </Navbar>

            <Navbar bg="light" expand="lg">
                    <Container>
                      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
          </Container>
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
