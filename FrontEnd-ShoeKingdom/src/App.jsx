import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Componentes/header/Header'
import NavBar from './Componentes/navBar/NavBar'
import Home from './Componentes/home/Home'
import About from './Componentes/about/About'
import Product from './Componentes/product/Product'
import ProductDetail from './Componentes/detail/Detail'
import Cart from './Componentes/cart/Cart'
import Checkout from './Componentes/checkout/Checkout'
import Favorito from './Componentes/favorites/Favorites'
import Contact from './Componentes/contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Header/>
      <Routes>
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='/favorito' element={< Favorito/>}/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
