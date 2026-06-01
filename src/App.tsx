import { ThemeProvider } from './contexts/theme/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Services from './components/sections/Services'
// import Team from './components/sections/Team'
import Footer from './components/layout/Footer'
import Contact from './components/sections/Contact'
import NotFound from './pages/NotFound'
import { SEO } from './utils/SEO'
import { ScrollToTop } from './utils/ScrollToTop'

import './App.css'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <SEO />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Home />
              <About />
              <Services />
              {/* <Team /> */}
              <Contact />
            </main>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
