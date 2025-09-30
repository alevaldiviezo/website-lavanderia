import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div className="contacto-bg">
      <div className="contacto-content">
        <h2>Contacto</h2>
        <p><strong>Teléfono:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contacto@lavanderia.com</p>
        <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</p>
        <p>
          <strong>Facebook:</strong>{' '}
          <a href="https://facebook.com/lavanderia" target="_blank" rel="noopener noreferrer">
            Lavanderia
          </a>
        </p>
        <p>
          ¡Contáctanos para cualquier consulta o para solicitar tu servicio de lavandería!
        </p>
      </div>
    </div>
  )
}

export default Contacto