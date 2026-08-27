import { motion } from 'framer-motion';
import { Wheat, Flame, UtensilsCrossed, Smile } from 'lucide-react';

const etapas = [
  {
    n: '01',
    icon: Wheat,
    titulo: 'A farinha chega primeiro',
    descricao:
      'O dia começa antes do sol. A farinha é pesada, o fermento natural é alimentado e a massa descansa o tempo que precisar — sem pressa, sem atalho.',
  },
  {
    n: '02',
    icon: Flame,
    titulo: 'O forno acende',
    descricao:
      'Enquanto a massa cresce, o forno esquenta. Pão francês, integral, italiano e os especiais do dia vão entrando em fornadas seguidas, para chegar quente ao balcão.',
  },
  {
    n: '03',
    icon: UtensilsCrossed,
    titulo: 'A mão no ofício',
    descricao:
      'Confeitaria, salgados e refeições são feitos à mão, em pequenos lotes. Coxinha modelada uma a uma, bolo desenformado com cuidado, feijão temperado na hora certa.',
  },
  {
    n: '04',
    icon: Smile,
    titulo: 'E a mesa se enche',
    descricao:
      'Tudo vira mesa: a vitrine, o salão do café, o prato feito do almoço e a sacola do delivery. O que saiu do forno de manhã chega quentinho até você.',
  },
];

export default function Processo() {
  return (
    <section
      id="processo"
      className="surface-dark relative overflow-hidden py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #2A1A12 0%, #3A2A1E 100%)' }}
    >
      {/* Decoração de grão */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(200,146,58,0.4), transparent 40%), radial-gradient(circle at 85% 80%, rgba(107,31,31,0.5), transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E0B45A]"
          >
            — Do trigo à mesa —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#FBF5E9] sm:text-[2.75rem]"
          >
            Quatro tempos de um pão honesto.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl w-full text-[15px] leading-relaxed text-[#C9B79A] sm:text-base"
          >
            Não há segredo: só tempo, fogo e mão de obra. Da farinha que chega de
            madrugada à sacola que sai para a sua casa, cada etapa tem o seu lugar.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="surface-dark relative flex flex-col rounded-[var(--radius-card)] border border-[#5A4232] bg-[#3A2A1E]/60 p-7 backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-[2.6rem] font-bold leading-none text-[#E0B45A]/30">
                    {e.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[#E0B45A]/40 bg-[#E0B45A]/10 text-[#E0B45A]">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                </div>
                <h3 className="font-display text-[1.2rem] font-bold leading-tight text-[#FBF5E9]">
                  {e.titulo}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#C9B79A]">
                  {e.descricao}
                </p>
                {/* Linha conectora horizontal no desktop */}
                {i < etapas.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-1rem] top-1/2 hidden h-px w-8 bg-[#5A4232] lg:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
