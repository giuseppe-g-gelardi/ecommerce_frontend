import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


reactDom.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
document.getElementById('root'))

// reactDom.render(<App />, document.getElementById('root'))