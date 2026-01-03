import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import './App.css'


function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <div className='Layout'>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductsDetail />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
