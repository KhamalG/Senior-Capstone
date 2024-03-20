import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Order from './pages/Order';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = localStorage.getItem('token')

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          {user && <Route path = '/home' exact element={<Home/>} />}
          <Route path='/' exact element={<Login/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/inventory' exact element={<Inventory/>}/>
          <Route path='/order' exact element={<Order/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
