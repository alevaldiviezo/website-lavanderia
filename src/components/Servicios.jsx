import React from 'react'
import { Link } from 'react-router-dom'
import './Servicios.css'

function Servicios() {
  return (
    <div className="servicios-bg">
      <div className="servicios-content">
        <h2>Servicios</h2>
        <ul>
          <li>
            <Link to="/servicios/lavado-secado">
              Lavado y secado de ropa con tecnología moderna
            </Link>
          </li>
          <li>
            <Link to="/servicios/planchado-doblado">
              Planchado y doblado profesional
            </Link>
          </li>
          <li>
            <Link to="/servicios/prendas-delicadas">
              Limpieza de prendas delicadas y especiales
            </Link>
          </li>
          <li>
            <Link to="/servicios/edredones-cobijas-cortinas">
              Lavado de edredones, cobijas y cortinas
            </Link>
          </li>
          <li>
            <Link to="/servicios/servicio-expres-domicilio">
              Servicio exprés y entrega a domicilio
            </Link>
          </li>
        </ul>
        <p>
          Nos esforzamos por ofrecerte la mejor calidad y rapidez en cada servicio. ¡Tu ropa en las mejores manos!
        </p>
      </div>
    </div>
  )
}

export default Servicios