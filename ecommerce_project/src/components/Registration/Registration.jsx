import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import './Registration.css'

function Registration() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  
  function validateForm() {
    return email.length > 6 
    && password1.length > 6 
    && password2.length > 6 
    && password1 === password2;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
      <div className="Registration">
        <Form onSubmit={handleSubmit}>
          <Form.Group size='lg' controlId='userName'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password1">
            <Form.Label>Enter a Password</Form.Label>
            <Form.Control
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password2">
            <Form.Label>Confirm your Password</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </Form.Group>
          <div class='btn-toolbar'>
            <Button variant='info' block size="md" type="submit" disabled={!validateForm()}>
              Register
            </Button>  
          <span>
            Already a member? Login <a href='registration'>here</a>
            </span>
          </div>
        </Form>
      </div>
    );
}

export default Registration

