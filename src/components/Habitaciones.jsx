import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { habitaciones } from '../data/content';

function HabitacionCard({ habitacion, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="min-w-[280px] sm:min-w-[300px] bg-white rounded-[14px] overflow-hidden group"
    >
      <div className="relative aspect-square overflow-hidden rounded-t-[14px]">
        <img
          src={habitacion.imagen}
          alt={habitacion.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-hof text-caption font-semibold px-3 py-1 rounded-badges">
          {habitacion.tipo}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-hof mb-1">{habitacion.nombre}</h3>
        <p className="text-sm text-foggy mb-3">{habitacion.descripcion}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-foggy text-sm">
            <Users className="w-4 h-4" />
            <span>{habitacion.capacidad}</span>
          </div>
          <p className="text-sm text-hof">
            <span className="font-semibold">${habitacion.precio}</span>
            <span className="text-foggy"> / noche</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Habitaciones() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="habitaciones" className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-heading-sm font-medium text-hof tracking-tight">
              Habitaciones Destacadas
            </h2>
            <p className="text-sm text-foggy mt-1">Cabañas con diseño natural y confort premium</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-light-blue transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-hof" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-light-blue transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-hof" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {habitaciones.map((h, i) => (
            <HabitacionCard key={h.id} habitacion={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
