import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './component/Booking';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import Footer from './component/Footer';
import Scroll from './component/Scroll';

function App() {

  return (
    <Router>
    <Navbar />
    <Scroll/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Booking" element={<Booking />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
