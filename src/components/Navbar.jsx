import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 md:h-28 bg-white z-50">
      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-6 flex items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img src={logo} alt="Aires del Moconá" className="h-12 w-12 md:h-28 md:w-28 object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8 min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foggy text-sm font-medium hover:text-hof transition-colors relative py-1
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden shrink-0 w-10 h-10 rounded-full bg-faint flex items-center justify-center hover:bg-bebe transition-colors"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-hof" />
          ) : (
            <Menu className="w-5 h-5 text-hof" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-bebe overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-foggy text-base font-medium hover:text-hof transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
