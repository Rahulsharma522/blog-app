import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheet/style.css';
import './components/Login';
import './stylesheet/style.css';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
