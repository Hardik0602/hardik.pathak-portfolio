import React, { useState } from 'react'
import Loading from './components/Loading'
import './index.css'
import NavBar from './components/NavBar'
import MobileMenu from './components/MobileMenu'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!loaded && <Loading onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
export default App