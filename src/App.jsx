import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import Reviews from './components/Reviews'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import LavadoSecado from './components/LavadoSecado'
import PlanchadoDoblado from './components/PlanchadoDoblado'
import LimpiezaPrendas from './components/LimpiezaPrendas'
import LavadoEdredones from './components/LavadoEdredones'
import RecojoDomicilio from './components/RecojoDomicilio'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Content /><Reviews /></>} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/lavado-secado" element={<LavadoSecado />} />
        <Route path="/servicios/planchado-doblado" element={<PlanchadoDoblado />} />
        <Route path="/servicios/prendas-delicadas" element={<LimpiezaPrendas />} />
        <Route path="/servicios/edredones-cobijas-cortinas" element={<LavadoEdredones />} />
        <Route path="/servicios/servicio-expres-domicilio" element={<RecojoDomicilio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
