import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homeSection/home';
import About from './pages/aboutSection/about';
import { ShopContextProvider } from './context/shop-context';
import Cart from './pages/cart/cart';
import Navbar from './components/navbar';
export const AppContext = createContext()

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App
