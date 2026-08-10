import { motion } from 'framer-motion';
import { servicios } from '../data/content';

function ServicioCard({ servicio, index }) {
  const Icon = servicio.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-6 h-full min-w-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-subtle"
    >
      <div className="w-12 h-12 rounded-[14px] bg-faint flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-light-blue">
        <Icon className="w-5 h-5 text-secondary-blue transition-colors duration-300 group-hover:text-primary-dark" />
      </div>
      <h3 className="text-sm font-medium text-hof mb-1.5">{servicio.titulo}</h3>
      <p className="text-sm text-foggy leading-relaxed">{servicio.descripcion}</p>
    </motion.div>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 px-6 bg-faint">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-primary-dark mb-3">
            Comodidades
          </p>
          <h2 className="text-heading-sm font-medium text-hof tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-sm text-foggy mt-2 max-w-md mx-auto leading-relaxed">
            Todo lo que necesitás para una estadía inolvidable en la selva misionera
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {servicios.map((s, i) => (
            <ServicioCard key={s.titulo} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}