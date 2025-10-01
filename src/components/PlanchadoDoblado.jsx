import React from 'react';
import './ServicioDetalle.css';

function PlanchadoDoblado() {
  return (
    <div className="servicio-detalle">
      <h2>Planchado y Doblado Profesional</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1683134381076-a66aa1c2f06e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Empleado planchando ropa"
        className="servicio-imagen"
      />
      <p>
        Nuestro equipo se encarga de planchar y doblar tu ropa con precisión y cuidado, entregándola lista para usar. Utilizamos técnicas profesionales para evitar daños y arrugas.
      </p>
      <ul>
        <li>Planchado a vapor</li>
        <li>Doblado personalizado</li>
        <li>Atención especial a camisas y prendas delicadas</li>
      </ul>
    </div>
  );
}

export default PlanchadoDoblado;