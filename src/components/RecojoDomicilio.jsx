import React from 'react';
import './ServicioDetalle.css';

function RecojoDomicilio() {
  return (
    <div className="servicio-detalle">
      <h2>Servicio Exprés y Entrega a Domicilio</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1661727287936-545f141db9a1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Repartidor entregando ropa"
        className="servicio-imagen"
      />
      <p>
        Recogemos y entregamos tu ropa en la puerta de tu casa u oficina. Servicio exprés disponible para quienes necesitan sus prendas listas en tiempo récord.
      </p>
      <ul>
        <li>Recojo y entrega sin costo adicional en zonas seleccionadas</li>
        <li>Entrega en 24 horas</li>
        <li>Seguimiento de tu pedido en tiempo real</li>
      </ul>
    </div>
  );
}

export default RecojoDomicilio;