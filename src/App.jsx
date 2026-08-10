import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Habitaciones from './components/Habitaciones';
import Servicios from './components/Servicios';
import Piscinas from './components/Piscinas';
import Galeria from './components/Galeria';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-brand">
      <Navbar />
      <Hero />
      <Habitaciones />
      <Servicios />
      <Piscinas />
      <Galeria />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
