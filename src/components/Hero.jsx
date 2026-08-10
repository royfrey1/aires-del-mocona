import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import bg from '../assets/bg.jpg';

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 md:pt-28">
      <div className="relative h-[80vh] min-h-[500px] max-h-[700px] overflow-hidden">
        <img
          src={bg}
          alt="Vista de la selva misionera a orillas del río Uruguay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white pb-12 mb-4 tracking-tight leading-tight">
              Bienvenidos a Aires del Moconá
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl"
          >
            Tu refugio natural en el corazón de la selva misionera, a orillas del río Uruguay
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#habitaciones"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-center"
            >
              Ver Habitaciones
            </a>
            <a
              href="#contacto"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Reservar Ahora
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
