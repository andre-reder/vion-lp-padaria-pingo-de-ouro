import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Info } from "lucide-react";

const STORAGE_KEY = 'pingo-ouro-banner-dismissed';

export default function ConceptBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 right-4 z-[80] max-w-[320px] rounded-xl border border-[#5A4232] bg-[#1A130E]/95 p-4 shadow-2xl backdrop-blur-md"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#C8923A]/15 text-[#E0B45A]">
              <Info size={15} strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E0B45A]">
                Proposta conceitual
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#F4EFE6]">
                Página não oficial. Conteúdo e dados podem ser fictícios e devem ser
                confirmados antes da publicação.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar aviso"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[#C9B79A] transition-colors hover:bg-[#FBF5E9]/10 hover:text-[#FBF5E9]"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
