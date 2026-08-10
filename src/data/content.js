import { Wifi, UtensilsCrossed, Waves, TreePalm, Mountain, Car, Coffee, Sparkles } from 'lucide-react';
import pileta from '../assets/galeria/pileta.png';
import almuerzo from '../assets/galeria/almuerzo.png';
import pileta2 from '../assets/galeria/pileta2.png';
import salon from '../assets/galeria/salon.png';
import vista from '../assets/galeria/vista.png';
import habitacion from '../assets/galeria/habitacion.png';

export const habitaciones = [
  {
    id: 1,
    nombre: 'Cabaña Bajo el Aliso',
    descripcion: 'Vista al río con deck privado',
    precio: 85,
    imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
    capacidad: '2 huéspedes',
    tipo: 'Suite',
  },
  {
    id: 2,
    nombre: 'Cabaña Selva Viva',
    descripcion: 'Rodeada de vegetación nativa',
    precio: 95,
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=600&fit=crop',
    capacidad: '3 huéspedes',
    tipo: 'Doble',
  },
  {
    id: 3,
    nombre: 'Cabaña Moconá Sunset',
    descripcion: 'Terraza con vista panorámica',
    precio: 120,
    imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=600&fit=crop',
    capacidad: '2 huéspedes',
    tipo: 'Premium',
  },
  {
    id: 4,
    nombre: 'Cabaña Río Grande',
    descripcion: 'Acceso directo a la orilla',
    precio: 110,
    imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=600&fit=crop',
    capacidad: '4 huéspedes',
    tipo: 'Familiar',
  },
  {
    id: 5,
    nombre: 'Cabaña Amanecer',
    descripcion: 'Orientada al amanecer sobre el río',
    precio: 100,
    imagen: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&h=600&fit=crop',
    capacidad: '2 huéspedes',
    tipo: 'Suite',
  },
];

export const servicios = [
  { titulo: 'Piscina Natural', descripcion: 'Al aire libre con vista al río', icon: Waves },
  { titulo: 'Restaurante', descripcion: 'Cocina regional e internacional', icon: UtensilsCrossed },
  { titulo: 'Wifi Gratis', descripcion: 'Conexión en todas las áreas', icon: Wifi },
  { titulo: 'Senderos', descripcion: 'Caminatas por la selva misionera', icon: TreePalm },
  { titulo: 'Excursiones', descripcion: 'Salto del Moconá y más', icon: Mountain },
  { titulo: 'Estacionamiento', descripcion: 'Cubierto y seguro', icon: Car },
  { titulo: 'Desayuno', descripcion: 'Incluido en todas las cabañas', icon: Coffee },
  { titulo: 'Spa & Bienestar', descripcion: 'Masajes y relajación', icon: Sparkles },
];

export const piscinas = {
  titulo: 'Piscina Natural',
  detalle: 'Al aire libre y con vista al río Uruguay. Un remanso de relax donde el agua cristalina se encuentra con la selva misionera.',
  caracteristicas: ['Al aire libre', 'Vista al río Uruguay'],
  imagenes: [
    { imagen: pileta, alt: 'Piscina al aire libre en el complejo' },
    { imagen: pileta2, alt: 'Vista panorámica de la pileta y la selva' },
  ],
};

export const galeria = [
  { id: 1, imagen: pileta, alt: 'Piscina al aire libre en el complejo' },
  { id: 2, imagen: pileta2, alt: 'Vista panorámica de la pileta y la selva' },
  { id: 3, imagen: almuerzo, alt: 'Mesa servida con almuerzo regional' },
  { id: 4, imagen: salon, alt: 'Salón de usos múltiples del complejo' },
  { id: 5, imagen: vista, alt: 'Vista del río Uruguay desde el complejo' },
  { id: 6, imagen: habitacion, alt: 'Interior de una cabaña de Aires del Moconá' },
];

export const testimonios = [
  {
    id: 1,
    nombre: 'María González',
    origen: 'Buenos Aires, Argentina',
    texto: 'Un lugar mágico. La combinación de la selva con el río es espectacular. Las cabañas son acogedoras y el personal increíblemente amable.',
    calificacion: 5,
  },
  {
    id: 2,
    nombre: 'Carlos Méndez',
    origen: 'São Paulo, Brasil',
    texto: 'Vinimos en familia y fue una experiencia inolvidable. Los chicos amaron la piscina y las excursiones. Sin duda volveremos.',
    calificacion: 5,
  },
  {
    id: 3,
    nombre: 'Luciana Fernández',
    origen: 'Montevideo, Uruguay',
    texto: 'El desayuno es espectacular y la vista desde la cabaña al amanecer no tiene precio. Perfecto para desconectar de la rutina.',
    calificacion: 5,
  },
];

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];
