import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

const WHATSAPP =
  'https://wa.me/5512996653971?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Pingo%20de%20Ouro.';

export default function CtaFinal() {
  return (
    <section
      id="cta"
      className="surface-light paper-grain relative border-t border-[#E8D9B8] py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #FBF5E9 0%, #F4EAD3 100%)' }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="surface-light relative overflow-hidden rounded-[28px] border border-[#C8923A]/40 bg-[#FBF5E9] p-8 text-center shadow-[var(--shadow-elevated)] sm:p-14 lg:p-20"
        >
          {/* Decoração de grão */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C8923A]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#6B1F1F]/10 blur-3xl"
          />

          <span className="relative inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]">
            — A mesa está posta —
          </span>
          <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-[2rem] font-bold leading-[1.1] text-[#2A1A12] sm:text-[3rem] lg:text-[3.4rem]">
            Que tal o seu pão quentinho
            <br className="hidden sm:block" /> sair do forno agora?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl w-full text-[15px] leading-relaxed text-[#6B5644] sm:text-base">
            Peça delivery, encomende seu bolo ou venha tomar café no salão. A Pingo de Ouro
            está pronta para te receber do jeito que você gosta — com cheiro de pão fresco
            e mesa cheia.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6B1F1F] px-7 py-4 text-[15px] font-semibold text-[#FBF5E9] shadow-lg transition-all duration-300 hover:bg-[#8B2A2A] hover:shadow-xl sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={2.4} />
              Pedir pelo WhatsApp
              <ArrowRight
                size={16}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+5512996653971"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#6B1F1F]/40 bg-[#FBF5E9] px-7 py-4 text-[15px] font-semibold text-[#6B1F1F] transition-all duration-300 hover:border-[#6B1F1F] hover:bg-[#6B1F1F]/5 sm:w-auto"
            >
              <Phone size={17} strokeWidth={2.2} />
              (12) 99665-3971
            </a>
          </div>

          <p className="relative mt-7 text-[12px] uppercase tracking-[0.18em] text-[#6B5644]">
            Seg–Sáb 9h–20h · Dom 10h–18h · Av. Cidade Jardim, 2211
          </p>
        </motion.div>
      </div>
    </section>
  );
}
