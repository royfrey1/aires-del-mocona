import { motion } from 'framer-motion';
import { Sun, Waves } from 'lucide-react';
import { piscinas } from '../data/content';

const iconos = [Sun, Waves];

export default function Piscinas() {
  return (
    <section id="piscinas" className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-caption font-semibold uppercase tracking-widest text-primary-dark mb-3">
              Naturaleza
            </p>
            <h2 className="text-heading-sm font-medium text-hof tracking-tight">
              {piscinas.titulo}
            </h2>
            <p className="text-sm text-foggy mt-3 leading-relaxed lg:max-w-[320px]">
              {piscinas.detalle}
            </p>

            <ul className="mt-8 space-y-4">
              {piscinas.caracteristicas.map((caracteristica, i) => {
                const Icon = iconos[i];
                return (
                  <li key={caracteristica} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-faint flex items-center justify-center">
                      <Icon className="w-4 h-4 text-secondary-blue" />
                    </span>
                    <span className="text-sm text-hof">{caracteristica}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-12 gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-5 md:self-start md:mt-12 min-w-0"
            >
              <div className="h-64 md:h-72 w-full rounded-2xl overflow-hidden group">
                <img
                  src={piscinas.imagenes[0].imagen}
                  alt={piscinas.imagenes[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 min-w-0"
            >
              <div className="h-64 md:h-[420px] w-full rounded-2xl overflow-hidden group">
                <img
                  src={piscinas.imagenes[1].imagen}
                  alt={piscinas.imagenes[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}