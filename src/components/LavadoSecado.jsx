import React from 'react';
import './ServicioDetalle.css';

function LavadoSecado() {
  return (
    <div className="servicio-detalle">
      <h2>Lavado y Secado de Ropa</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1664910286987-68960eaf4b47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Lavado y secado de ropa"
        className="servicio-imagen"
      />
      <p>
        Utilizamos tecnología moderna para el lavado y secado de tus prendas, asegurando limpieza profunda y cuidado de las telas. Nuestros equipos de última generación eliminan manchas difíciles y conservan los colores vivos de tu ropa.
      </p>
      <ul>
        <li>Lavado con detergentes biodegradables</li>
        <li>Secado rápido y eficiente</li>
        <li>Opciones para ropa delicada</li>
      </ul>
    </div>
  );
}

export default LavadoSecado;