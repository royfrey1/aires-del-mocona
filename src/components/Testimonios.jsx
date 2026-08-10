import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonios } from '../data/content';

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonios.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length);

  const activo = testimonios[current];

  return (
    <section className="py-16 px-6 bg-faint">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-primary-dark mb-3">
            Huéspedes
          </p>
          <h2 className="text-heading-sm font-medium text-hof tracking-tight">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <p className="text-sm text-foggy mt-2 max-w-md mx-auto">
            Historias reales de quienes ya vivieron la experiencia
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="min-h-[320px] sm:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col bg-white rounded-[14px] p-6 sm:p-10 text-center shadow-subtle h-full"
              >
                <div className="w-11 h-11 rounded-full bg-light-blue flex items-center justify-center mx-auto mb-5 shrink-0">
                  <Quote className="w-5 h-5 text-primary-dark" />
                </div>

                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: activo.calificacion }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-hof text-base leading-relaxed mb-7 flex-1">
                  {activo.texto}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-light-blue flex items-center justify-center shrink-0">
                    <span className="text-primary-dark text-sm font-semibold">
                      {getInitials(activo.nombre)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-hof font-medium text-sm">{activo.nombre}</p>
                    <p className="text-foggy text-sm">{activo.origen}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-light-blue transition-colors active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 text-hof" />
            </button>
            <div className="flex items-center gap-2 px-1">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? 'w-6 bg-primary' : 'w-2.5 bg-bebe hover:bg-grey-500'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Testimonio siguiente"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-subtle flex items-center justify-center hover:bg-light-blue transition-colors active:scale-95"
            >
              <ChevronRight className="w-4 h-4 text-hof" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}