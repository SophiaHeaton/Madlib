import React from 'react';
import ReactDOM from 'react-dom';
 import App from './components/app';
import Home from './components/home';
 import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
 function main() {
  ReactDOM.render(
    <App />
    <Home />
    , document.querySelector('.app-wrapper'));
}
  document.addEventListener('DOMContentLoaded', main);
