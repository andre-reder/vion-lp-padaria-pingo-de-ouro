import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/28059315/pexels-photo-28059315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax sutil: imagem sobe um pouco, texto quase estático
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-14%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.78]);

  return (
    <section
      ref={ref}
      id="topo"
      className="surface-dark relative flex min-h-[calc(100svh-5.25rem)] items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2A1A12 0%, #3A2A1E 100%)' }}
    >
      {/* Textura de grão dourado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(200,146,58,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(107,31,31,0.4), transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-6 sm:px-8 sm:pb-16 sm:pt-10 md:grid-cols-2 md:gap-12 lg:px-12 lg:pt-16">
        {/* Coluna texto */}
        <motion.div style={{ y: textY }} className="flex flex-col items-start">
          <motion.span
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E0B45A]/40 bg-[#E0B45A]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E0B45A]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E0B45A]" />
            Bosque dos Eucaliptos · São José dos Campos
          </motion.span>

          <motion.h1
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[2.25rem] font-bold leading-[1.02] text-[#FBF5E9] sm:text-5xl lg:text-[4.25rem]"
          >
            Pão quentinho,
            <br />
            <span className="text-[#E0B45A]">café passado</span>
            <br />
            e mesa farta.
          </motion.h1>

          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-[#C9B79A] sm:text-base"
          >
            Padaria e confeitaria de bairro com pães de fermentação lenta, pão de queijo
            que derrete, bolos de corte e refeições caseiras para o café da manhã, almoço
            e jantar. Tudo feito no forno, na hora, do nosso jeito.
          </motion.p>

          <motion.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 flex w-full flex-row flex-wrap items-center gap-3 sm:mt-8"
          >
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C8923A] px-6 py-3.5 text-[14px] font-semibold text-[#2A1A12] shadow-lg transition-all duration-300 hover:bg-[#E0B45A] hover:shadow-xl"
            >
              Ver o cardápio
              <ArrowRight
                size={16}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://wa.me/5512996653971?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Pingo%20de%20Ouro."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#E0B45A]/60 bg-[#FBF5E9]/10 px-6 py-3.5 text-[14px] font-semibold text-[#FBF5E9] backdrop-blur-sm transition-all duration-300 hover:border-[#E0B45A] hover:bg-[#FBF5E9]/20"
            >
              Pedir delivery
            </a>
          </motion.div>

          {/* Prova social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 hidden items-center gap-5 sm:flex"
          >
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-[#E0B45A] text-[#E0B45A]"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#C9B79A]">
              Amada no bairro há gerações
            </p>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#C9B79A]"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} className="text-[#E0B45A]" />
              Seg–Sáb 9h–20h · Dom 10h–18h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#E0B45A]" />
              Av. Cidade Jardim, 2211
            </span>
          </motion.div>
        </motion.div>

        {/* Coluna imagem */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-[#E0B45A]/20">
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 z-10 bg-gradient-to-t from-[#2A1A12] via-[#2A1A12]/30 to-transparent"
            />
            <img
              src={HERO_IMG}
              alt="Prato elegante com salada caprese, pães e guarnição sobre mesa de madeira."
              className="h-[34vh] w-full object-cover sm:h-[52vh] md:h-[60vh] lg:h-[68vh]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Tag flutuante sobre a imagem */}
            <div className="absolute bottom-4 left-4 z-20 max-w-[260px] rounded-xl bg-[#2A1A12]/85 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#E0B45A]">
                Direto do forno
              </p>
              <p className="mt-1 text-[13px] font-medium leading-snug text-[#FBF5E9]">
                Pães, doces e refeições feitos no dia, com ingredientes de verdade.
              </p>
            </div>
          </div>

          {/* Selo decorativo */}
          <div className="absolute -right-3 -top-3 z-20 hidden h-24 w-24 rotate-6 place-items-center rounded-full border-2 border-[#E0B45A]/50 bg-[#2A1A12]/90 text-center backdrop-blur-md sm:grid">
            <div className="px-2">
              <p className="font-display text-[20px] font-bold leading-none text-[#E0B45A]">
                Pingo
              </p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#C9B79A]">
                de Ouro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
