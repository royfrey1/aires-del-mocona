import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MapPin, MessageCircle, Phone, Send, Users } from 'lucide-react';
import { habitaciones, servicios } from '../data/content';

const TELEFONO = '+54 3755 288096';
const TELEFONO_WA = '543755288096';
const UBICACION = 'Ruta Provincial 2, El Soberbio, Misiones, Argentina';
const MAPA_EMBED = 'https://maps.google.com/maps?q=-27.2794106,-54.1940348&z=16&hl=es&output=embed';
const MAPA_LINK =
  'https://www.google.com/maps/place/Complejo+tur%C3%ADstico+Aires+del+Mocon%C3%A1/@-27.2794106,-54.1940348,17z/';

const hoy = new Date().toISOString().split('T')[0];

const estadoInicial = {
  nombre: '',
  whatsapp: '',
  email: '',
  llegada: '',
  salida: '',
  huespedes: '',
  interes: '',
  mensaje: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-inputs bg-white border border-bebe text-hof text-sm placeholder:text-foggy/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors';

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-hof block mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contacto() {
  const [formData, setFormData] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetFormulario = () => {
    setFormData(estadoInicial);
    setEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  const whatsappLink = useMemo(() => {
    const mensaje = [
      'Hola Aires del Moconá, quiero hacer una consulta:',
      `Nombre: ${formData.nombre}`,
      formData.whatsapp ? `WhatsApp / Teléfono: ${formData.whatsapp}` : '',
      formData.llegada ? `Llegada: ${formData.llegada}` : '',
      formData.salida ? `Salida: ${formData.salida}` : '',
      formData.huespedes ? `Cantidad de huéspedes: ${formData.huespedes}` : '',
      formData.interes ? `Interés: ${formData.interes}` : '',
      formData.mensaje ? `Mensaje: ${formData.mensaje}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${TELEFONO_WA}?text=${encodeURIComponent(mensaje)}`;
  }, [formData]);

  const contactoItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: TELEFONO,
      href: `https://wa.me/${TELEFONO_WA}`,
      external: true,
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: TELEFONO,
      href: `tel:${TELEFONO.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: UBICACION,
      href: MAPA_LINK,
      external: true,
    },
  ];

  return (
    <section id="contacto" className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-caption font-semibold uppercase tracking-widest text-primary-dark mb-3">
            Reservas
          </p>
          <h2 className="text-heading-sm font-medium text-hof tracking-tight">
            Contacto y Reservas
          </h2>
          <p className="text-sm text-foggy mt-2 max-w-md mx-auto">
            Contanos qué cabaña te gusta y las fechas, y te confirmamos la disponibilidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
          <div className="bg-white rounded-[14px] border border-bebe shadow-subtle p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {enviado ? (
                <motion.div
                  key="confirmacion"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="text-center py-6"
                >
                  <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center mx-auto mb-5">
                    <Check className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-medium text-hof mb-2">Consulta enviada</h3>
                  <p className="text-sm text-foggy leading-relaxed mb-1">
                    ¡Gracias{formData.nombre ? ` ${formData.nombre}` : ''}! Recibimos tu consulta
                    {formData.interes ? ` sobre ${formData.interes}` : ''}.
                  </p>
                  <p className="text-sm text-foggy leading-relaxed mb-7">
                    Nos pondremos en contacto pronto para confirmar los detalles de tu estadía.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-inputs font-medium text-sm hover:bg-primary-dark transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Confirmar por WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={resetFormulario}
                      className="flex-1 border border-hof text-hof px-6 py-3 rounded-inputs font-medium text-sm hover:bg-faint transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="formulario"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-hof">Solicitá tu reserva</h3>
                    <p className="text-sm text-foggy mt-1 leading-relaxed">
                      Completá tus datos y te respondemos a la brevedad.
                    </p>
                  </div>

                  <Field label="Nombre" htmlFor="nombre">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Tu nombre y apellido"
                      className={inputClass}
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="WhatsApp / Teléfono" htmlFor="whatsapp">
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        placeholder="+54 9 11 ..."
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="tu@email.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Fecha de llegada" htmlFor="llegada">
                      <input
                        type="date"
                        id="llegada"
                        name="llegada"
                        value={formData.llegada}
                        onChange={handleChange}
                        required
                        min={hoy}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Fecha de salida" htmlFor="salida">
                      <input
                        type="date"
                        id="salida"
                        name="salida"
                        value={formData.salida}
                        onChange={handleChange}
                        required
                        min={formData.llegada || hoy}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Cantidad de huéspedes" htmlFor="huespedes">
                      <select
                        id="huespedes"
                        name="huespedes"
                        value={formData.huespedes}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Seleccionar</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'huésped' : 'huéspedes'}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Cabaña o servicio de interés" htmlFor="interes">
                      <select
                        id="interes"
                        name="interes"
                        value={formData.interes}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Seleccionar</option>
                        <optgroup label="Cabañas">
                          {habitaciones.map((h) => (
                            <option key={h.id} value={h.nombre}>
                              {h.nombre}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Servicios">
                          {servicios.map((s) => (
                            <option key={s.titulo} value={s.titulo}>
                              {s.titulo}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </Field>
                  </div>

                  <Field label="Mensaje / consulta" htmlFor="mensaje">
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Contanos sobre tu estadía ideal..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3.5 rounded-inputs font-medium text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar consulta
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-faint rounded-[14px] p-6 space-y-5">
              {contactoItems.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-hof">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="text-sm text-foggy hover:text-primary-dark transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foggy break-words">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

<div className="bg-faint rounded-[14px] overflow-hidden h-[220px] sm:h-[260px]">
              <iframe
                src={MAPA_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Aires del Moconá"
              />
            </div>
            <a
              href={MAPA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-hof hover:text-primary-dark transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              Abrir en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}