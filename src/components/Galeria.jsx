import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { galeria } from '../data/content';

const lightboxVariants = {
  enter: (direction) => ({ opacity: 0, x: direction * 60, scale: 0.985 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction) => ({ opacity: 0, x: direction * -60, scale: 0.985 }),
};

export default function Galeria() {
  const [selected, setSelected] = useState(null);
  const [direction, setDirection] = useState(1);

  const openLightbox = (index) => {
    setDirection(1);
    setSelected(index);
  };

  const closeLightbox = () => setSelected(null);

  const goNext = () => {
    setDirection(1);
    setSelected((prev) => (prev + 1) % galeria.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setSelected((prev) => (prev - 1 + galeria.length) % galeria.length);
  };

  useEffect(() => {
    if (selected === null) return undefined;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="galeria" className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-heading-sm font-medium text-hof tracking-tight">
            Galería
          </h2>
          <p className="text-sm text-foggy mt-1">Momentos capturados en Aires del Moconá</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galeria.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(i)}
              className="relative block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl group cursor-zoom-in text-left"
            >
              <img
                src={item.imagen}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-subtle">
                  <Maximize2 className="w-4 h-4 text-hof" />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          >
            <button
              type="button"
              aria-label="Cerrar galería"
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 md:w-11 md:h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-hof transition-colors active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-4 md:left-6 z-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-11 md:h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-hof transition-colors active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 sm:right-4 md:right-6 z-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-11 md:h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-hof transition-colors active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative w-full max-w-[1300px] h-[74vh] sm:h-[80vh] px-4 sm:px-16 lg:px-20">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={selected}
                  custom={direction}
                  variants={lightboxVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  src={galeria[selected].imagen}
                  alt={galeria[selected].alt}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 m-auto max-h-full max-w-full object-contain select-none"
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-5 md:bottom-6 z-10 left-1/2 -translate-x-1/2 text-white text-sm font-medium tabular-nums">
              {selected + 1} / {galeria.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}