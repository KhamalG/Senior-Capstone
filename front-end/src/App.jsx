import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Order from './pages/Order';

function App() {
  const user = localStorage.getItem('token')
  return (
    <BrowserRouter>
        <Routes>
          {user && <Route path = '/home' exact element={<Home/>} />}
          <Route path='/' exact element={<Login/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/inventory' exact element={<Inventory/>}/>
          <Route path='/order' exact element={<Order/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
