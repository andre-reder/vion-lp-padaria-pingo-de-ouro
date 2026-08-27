import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Phone, Croissant } from "lucide-react";

const links = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Do trigo à mesa', href: '#processo' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Avaliações', href: '#depoimentos' },
  { label: 'Visite', href: '#localizacao' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 24);
  });

  // Trava scroll quando o menu mobile está aberto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Fecha menu com Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className="sticky top-0 z-[60] transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(42, 26, 18, 0.92)' : 'rgba(42, 26, 18, 0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(200, 146, 58, 0.35)' : '1px solid rgba(200, 146, 58, 0.18)',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#topo"
          className="group flex items-center gap-2.5 text-[#FBF5E9]"
          aria-label="Padaria Pingo de Ouro — início"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-full bg-[#C8923A] text-[#2A1A12] shadow-md transition-transform duration-300 group-hover:rotate-[8deg]"
          >
            <Croissant size={18} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-[0.04em] text-[#FBF5E9]">
              Pingo de Ouro
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#E0B45A]">
              Padaria · Confeitaria
            </span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[13px] font-medium uppercase tracking-[0.14em] text-[#FBF5E9] transition-colors duration-200 hover:text-[#E0B45A]"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#E0B45A] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5512996653971?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Pingo%20de%20Ouro."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#C8923A] px-5 py-2.5 text-[13px] font-semibold text-[#2A1A12] shadow-md transition-all duration-300 hover:bg-[#E0B45A] hover:shadow-lg sm:inline-flex"
        >
          <Phone size={15} strokeWidth={2.4} />
          Peça pelo WhatsApp
        </a>

        {/* Botão menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="grid h-10 w-10 place-items-center rounded-full bg-[#FBF5E9]/10 text-[#FBF5E9] transition-colors hover:bg-[#FBF5E9]/20 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden"
          >
            <div
              className="max-h-[calc(100svh-64px)] overflow-y-auto px-5 pb-8 pt-2"
              style={{ backgroundColor: 'rgba(42, 26, 18, 0.98)' }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[#5A4232]/60 py-4 text-[15px] font-medium uppercase tracking-[0.12em] text-[#FBF5E9] transition-colors hover:text-[#E0B45A]"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="https://wa.me/5512996653971?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Pingo%20de%20Ouro."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#C8923A] px-5 py-3.5 text-[14px] font-semibold text-[#2A1A12] shadow-md"
              >
                <Phone size={16} strokeWidth={2.4} />
                Peça pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
