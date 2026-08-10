import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { navLinks } from '../data/content';
import logo from '../assets/logo.png';

const TELEFONO = '+54 3755 288096';
const TELEFONO_WA = '543755288096';
const UBICACION = 'Ruta Provincial 2, El Soberbio, Misiones, Argentina';

const contacto = [
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
  { icon: MapPin, label: 'Ubicación', value: UBICACION },
];

export default function Footer() {
  return (
    <footer className="bg-faint pt-12 pb-6 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="#inicio" className="inline-block">
              <img src={logo} alt="Aires del Moconá" className="h-14 w-14 md:h-20 md:w-20 object-contain" />
            </a>
            <p className="text-sm text-foggy mt-4 leading-relaxed max-w-xs">
              Tu refugio natural en la selva misionera, a orillas del río Uruguay.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-hof mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foggy hover:text-hof transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-hof mb-4">Contacto</h4>
            <ul className="space-y-3">
              {contacto.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="text-sm text-foggy hover:text-primary-dark transition-colors break-words"
                    >
                      {label}: {value}
                    </a>
                  ) : (
                    <p className="text-sm text-foggy break-words">
                      {label}: {value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-bebe pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foggy text-center md:text-left">
            &copy; {new Date().getFullYear()} Aires del Moconá. Todos los derechos reservados.
          </p>
          <a
            href={`https://wa.me/${TELEFONO_WA}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-hof font-medium hover:text-primary-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Consultas por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}