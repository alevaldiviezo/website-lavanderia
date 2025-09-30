import React, { useState, useEffect } from 'react'
import './Content.css'

const carouselData = [
  {
    src: "https://plus.unsplash.com/premium_photo-1667520477542-bf2ad7d880be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lavado profesional de ropa"
  },
  {
    src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Planchado y doblado impecable"
  },
  {
    src: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Entrega rápida y atención personalizada"
  }
]

function Content() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="content">
      <div className="banner">
        <img
          src="https://plus.unsplash.com/premium_photo-1679920024980-48a0dcc2c984?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lavandería"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Bienvenido a Lavanderia</h1>
          <p>
            Ofrecemos servicios profesionales de lavandería para tu comodidad.<br />
            ¡Calidad, rapidez y atención personalizada!
          </p>
        </div>
      </div>
      <div className="carousel">
        <img
          src={carouselData[current].src}
          alt={`Lavandería servicio ${current + 1}`}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <span>{carouselData[current].text}</span>
        </div>
        <div className="carousel-indicators">
          {carouselData.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="info-section">
        <div className="info-left">
          <h2>Servicios</h2>
          <ul>
            <li>Lavado y secado de ropa</li>
            <li>Planchado y doblado profesional</li>
            <li>Limpieza de prendas delicadas</li>
            <li>Lavado de edredones y cobijas</li>
            <li>Servicio exprés y entrega a domicilio</li>
          </ul>
        </div>
        <div className="info-right">
          <h2>Contacto</h2>
          <p>Teléfono: (591) 4259862</p>
          <p>Email: lavanderia_mv@outlook.com</p>
          <p>Dirección: Avenida Capitan Ustariz casi Beijing acera sudoeste, Cochabamba, Bolivia</p>
          <p>
            Facebook: <a href="https://www.facebook.com/lavanderiaMV" target="_blank" rel="noopener noreferrer">Servicios Industriales de Lavanderia MV</a>
          </p>
        </div>
      </div>
      <div className="business-section">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          En Lavanderia nos apasiona cuidar tus prendas como si fueran nuestras. 
          Utilizamos productos de alta calidad y tecnología moderna para garantizar resultados impecables. 
          Nuestro equipo está comprometido con la satisfacción del cliente, ofreciendo atención personalizada, rapidez y precios accesibles. 
          ¡Confía en nosotros y disfruta de tu tiempo libre mientras nosotros nos encargamos de tu ropa!
        </p>
      </div>
    </main>
  )
}

export default Content