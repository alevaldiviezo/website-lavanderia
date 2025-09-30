import React from 'react'
import './Footer.css'

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>&copy; 2025 Lavanderia</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
        <p>Email: contacto@lavanderia.com</p>
        <p>
          Facebook: <a href="https://facebook.com/lavanderia" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Lavanderia</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer