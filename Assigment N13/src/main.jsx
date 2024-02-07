import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'

ReactDOM.render(
  <Router>

    <Navbar />

    <Home />

  </Router>,
  document.getElementById('root')
);