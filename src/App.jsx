import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Rooms from './pages/Rooms'
import Contact from './pages/Contact'

import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="bg-light relative text-secondary font-montserrat">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
