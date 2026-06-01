import { type FC, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import '../../styles/components/layout/Navbar.css'

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLElement>, sectionId: string) => {
    e.preventDefault()

    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          const offset = 80
          const elementPosition = section.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        const offset = 80
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMenuOpen(false)
  }, [navigate])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={(e) => scrollToSection(e, 'home')} style={{ cursor: 'pointer' }}>
          <img src="/images/brand/KirikaeLogo.png" alt="Kirikae Labs Logo" className="navbar-logo-image" />
          <h1>Kirikae Labs</h1>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          {/* <a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Team</a> */}
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <ThemeToggle />
        </div>

        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
