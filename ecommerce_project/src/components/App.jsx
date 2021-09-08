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
<<<<<<< HEAD
import Products from './Products/Products';
=======
import Account from './Account/Account';
import Cart from './Cart/Cart';
import AddProducts from './AddProducts/AddProducts';

>>>>>>> 833d4d73c6c65b9d4e2d6c14e5f8b9cfca55a9b0

function App() {
  return (
    <div className="App" style={{
      backgroundColor: 'beige',
      backgroundSize: 'cover',
      height: '100vh'
    }}>
      <Router>
        <div className="navbar">
          <Navbar id='navbar' fixed='top' bg='dark' variant='dark'>
            <Navbar.Brand id="PageTitle" href=''>Fooooooooood!</Navbar.Brand>
<<<<<<< HEAD
            <Nav.Link id="NavLinks" href='/home'> Home</Nav.Link>
            <Nav.Link id="NavLinks" href='/login'> Login</Nav.Link>
            <Nav.Link id="NavLinks" href='/registration'> Register</Nav.Link>
            <Nav.Link id="NavLinks" href='/User'> User</Nav.Link>
            <Nav className="ml-auto">
              <SearchBar />
            </Nav>
=======
              <Nav.Link id="NavLinks" href='/home'> Home</Nav.Link>
              <Nav.Link id="NavLinks" href='/login'> Login</Nav.Link>
              <Nav.Link id="NavLinks" href='/registration'> Register</Nav.Link>
              <Nav.Link id="NavLinks" href='/Account'> Account</Nav.Link>
              <Nav.Link id="NavLinks" href='/Account'> Cart</Nav.Link>
              <Nav className="ml-auto">
                <SearchBar />
              </Nav>
>>>>>>> 833d4d73c6c65b9d4e2d6c14e5f8b9cfca55a9b0
          </Navbar>
        </div>
        <Switch>
          <Route path='/home' exact component={Home}> </Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/registration' exact component={Registration}></Route>
          <Route path='/Account' exact component={Account}></Route>
          <Route path='/AddProducts' exact component={AddProducts}></Route>
          <Route path='/Cart' exact component={Cart}></Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
