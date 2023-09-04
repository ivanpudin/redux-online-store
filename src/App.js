import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreNavbar from './components/StoreNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
