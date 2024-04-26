import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Order from './pages/Order';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const backgroundStyle= {
  height: '80vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

root.render(
  <React.StrictMode>
    <div style={backgroundStyle}>
      <App/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
