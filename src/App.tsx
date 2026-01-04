import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import './App.css'
import { useEffect, useState } from 'react'

export function App() {

  type Theme = "dark" | "light";

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <div className='Layout'>
          <NavBar theme={theme} onToggle={toggleTheme} />
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
