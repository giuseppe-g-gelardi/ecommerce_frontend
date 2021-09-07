import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 6 && password.length > 6;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div class='btn-toolbar'>
          <Button variant='info' block size="md" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        
        <span>
          Not a member? sign up <a href='registration'>here</a>
          </span>

        </div>
      </Form>
    </div>
  );
}

export default Login
