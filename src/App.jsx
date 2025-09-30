import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import Reviews from './components/Reviews'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Content /><Reviews /></>} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
