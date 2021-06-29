import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle';
import './bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);


