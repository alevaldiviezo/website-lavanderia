import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png' // Ajusta el nombre si tu imagen tiene otro nombre

// Header component
function Header() {
  const navigate = useNavigate()
  return (
    <header className="header">
      <div
        className="logo-container"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="Lavanderia Logo" className="navbar-logo" />
        <h2>Lavanderia MV</h2>
      </div>
      <nav className="nav-buttons">
        <button onClick={() => navigate('/')}>Inicio</button>
        <button onClick={() => navigate('/nosotros')}>Nosotros</button>
        <button onClick={() => navigate('/servicios')}>Servicios</button>
        <button onClick={() => navigate('/contacto')}>Contacto</button>
      </nav>
    </header>
  )
}

export default Header