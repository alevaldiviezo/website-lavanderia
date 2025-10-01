import React from 'react';
import './ServicioDetalle.css';

function LavadoEdredones() {
  return (
    <div className="servicio-detalle">
      <h2>Lavado de Edredones, Cobijas y Cortinas</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1723563579548-b2c482073f10?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Empleado lavando edredón"
        className="servicio-imagen"
      />
      <p>
        Contamos con maquinaria especializada para lavar edredones, cobijas y cortinas, eliminando ácaros y alérgenos, y devolviéndoles frescura y suavidad.
      </p>
      <ul>
        <li>Lavado profundo y desinfección</li>
        <li>Secado sin deformaciones</li>
        <li>Ideal para textiles voluminosos</li>
      </ul>
    </div>
  );
}

export default LavadoEdredones;