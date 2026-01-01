import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='Layout'>
        <Header />
        <BrowserRouter>
          <NavBar />
          <main>
            <Home />
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
