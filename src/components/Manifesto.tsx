import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

const PHRASE =
  'Um pão de manhã não é só comida. É a casa que acorda, a mesa que se enche, o cheiro que diz: hoje tem gente que te espera.';

function Word({
  word,
  index,
  total,
  progress,
  reduce,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const revealEnd = 0.72;
  const start = (index / total) * revealEnd;
  const end = ((index + 1) / total) * revealEnd;
  const color = useTransform(
    progress,
    [start, end],
    reduce ? ['#2A1A12', '#2A1A12'] : ['rgba(42,26,18,0.5)', '#2A1A12']
  );
  return (
    <span>
      <motion.span data-reveal-word style={{ color }} className="inline-block">
        {word}
      </motion.span>
      {index < total - 1 ? ' ' : null}
    </span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const words = PHRASE.split(' ');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.65'],
  });

  return (
    <section
      ref={ref}
      id="manifesto"
      className="surface-light paper-grain relative py-24 sm:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="block text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
        >
          — Manifesto —
        </motion.span>

        <h2
          data-word-reveal
          className="mt-8 text-center font-display text-[1.6rem] font-bold leading-[1.25] text-[#2A1A12] sm:text-[2.4rem] lg:text-[3rem] lg:leading-[1.22]"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              reduce={reduce}
            />
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl w-full text-center text-[15px] leading-relaxed text-[#6B5644] sm:text-base"
        >
          A Pingo de Ouro nasceu dessa ideia simples: levar para o bairro o pão que se faz
          em casa — com farinha boa, fermento paciente e mão de quem gosta do ofício. Da
          madrugada ao último café da noite, o forno não para. E a mesa nunca fica vazia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#C8923A] to-transparent"
        />
      </div>
    </section>
  );
}
