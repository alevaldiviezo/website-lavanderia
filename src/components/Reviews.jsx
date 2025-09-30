import React from 'react'
import './Reviews.css'

function Reviews() {
  return (
    <section className="reviews-section">
      <h2>Opiniones de nuestros clientes</h2>
      <div className="reviews-list">
        <div className="review">
          <span className="review-stars">★★★★★</span>
          <p className="review-text">"Excelente servicio, mi ropa quedó impecable y el trato fue muy amable."</p>
          <span className="review-author">- Ana G.</span>
        </div>
        <div className="review">
          <span className="review-stars">★★★★★</span>
          <p className="review-text">"Rápidos y responsables. Recomiendo la entrega a domicilio."</p>
          <span className="review-author">- Luis M.</span>
        </div>
        <div className="review">
          <span className="review-stars">★★★★★</span>
          <p className="review-text">"Muy buena atención y precios accesibles. Volveré sin duda."</p>
          <span className="review-author">- Carla P.</span>
        </div>
      </div>
    </section>
  )
}

export default Reviews