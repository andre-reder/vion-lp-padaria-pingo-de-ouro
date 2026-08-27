import { motion } from 'framer-motion';

const IMG =
  'https://images.pexels.com/photos/28059315/pexels-photo-28059315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// Tratamentos visuais diferentes aplicados à mesma imagem base
const tiles = [
  {
    label: 'Mesa de café',
    caption: 'Pão, azeite e o que a estação pedir.',
    span: 'sm:col-span-2 sm:row-span-2',
    filter: 'saturate(1.05) contrast(1.04)',
    h: 'h-[260px] sm:h-full',
  },
  {
    label: 'Caprese do dia',
    caption: 'Tomate, muçarela e manjericão na hora.',
    span: '',
    filter: 'sepia(0.18) saturate(1.1)',
    h: 'h-[220px]',
  },
  {
    label: 'Pão na chapa',
    caption: 'Crocante por fora, macio por dentro.',
    span: '',
    filter: 'brightness(0.92) contrast(1.08) sepia(0.1)',
    h: 'h-[220px]',
  },
  {
    label: 'Vitrine da manhã',
    caption: 'Tudo que saiu do forno antes do almoço.',
    span: 'sm:col-span-2',
    filter: 'hue-rotate(-8deg) saturate(1.15) brightness(1.03)',
    h: 'h-[220px]',
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="surface-light relative border-t border-[#E8D9B8] py-24 sm:py-32"
      style={{ background: '#FBF5E9' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
          >
            — Da cozinha para a mesa —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#2A1A12] sm:text-[2.5rem]"
          >
            Um pedaço do nosso dia.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl w-full text-[15px] leading-relaxed text-[#6B5644] sm:text-base"
          >
            Cada prato que sai daqui carrega o mesmo cuidado: ingredientes simples,
            cozinha honesta e apresentação que dá água na boca.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-subtle)] ${t.span}`}
            >
              <img
                src={IMG}
                alt={`${t.label} — ${t.caption}`}
                style={{ filter: t.filter }}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A12]/85 via-[#2A1A12]/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-[15px] font-bold text-[#FBF5E9]">
                  {t.label}
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-[#C9B79A]">
                  {t.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Crédito como irmão do grid (estrutura separada) */}
      <div className="mx-auto mt-16 max-w-2xl w-full px-4">
        <p className="relative z-10 text-center text-[12px] leading-relaxed text-[#6B5644]">
          Fotografias ilustrativas de{' '}
          <a
            href="https://www.pexels.com/@jonathanborba"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#6B1F1F] underline decoration-[#C8923A]/60 underline-offset-2 transition-colors hover:text-[#2A1A12]"
          >
            Jonathan Borba
          </a>{' '}
          via Pexels — substituíveis pelas fotos reais da padaria.
        </p>
      </div>
    </section>
  );
}
