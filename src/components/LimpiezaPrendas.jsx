import React from 'react';
import './ServicioDetalle.css';

function LimpiezaPrendas() {
  return (
    <div className="servicio-detalle">
      <h2>Limpieza de Prendas Delicadas</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1664372899525-d99a419fd21a?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Empleado cuidando prendas delicadas"
        className="servicio-imagen"
      />
      <p>
        Tratamos tus prendas más delicadas con productos y procesos especiales, garantizando su conservación y limpieza sin riesgos de daño.
      </p>
      <ul>
        <li>Lavado a mano para prendas especiales</li>
        <li>Productos hipoalergénicos</li>
        <li>Atención a seda, lana y encaje</li>
      </ul>
    </div>
  );
}

export default LimpiezaPrendas;