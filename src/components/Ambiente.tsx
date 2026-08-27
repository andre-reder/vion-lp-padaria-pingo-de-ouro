import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Clock, Coffee, Users, Sparkles } from 'lucide-react';

const IMG =
  'https://images.pexels.com/photos/28059315/pexels-photo-28059315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const pilares = [
  {
    icon: Coffee,
    titulo: 'Mesa de café aberta',
    descricao: 'Pão na chapa, ovos, suco e café passado. Sente, respire e comece o dia sem pressa.',
  },
  {
    icon: Users,
    titulo: 'Lugar de encontro',
    descricao: 'Mesas no salão para o café da manhã, o lanche da tarde e a conversa que se estende.',
  },
  {
    icon: Sparkles,
    titulo: 'Vitrine cheia o dia todo',
    descricao: 'Pães, doces e salgados repostos em fornadas. Sempre tem algo saindo quentinho.',
  },
];

export default function Ambiente() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '12%']);
  const tagY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['20%', '-20%']);

  return (
    <section
      ref={ref}
      id="ambiente"
      className="surface-light paper-grain relative border-t border-[#E8D9B8] py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagem com parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-first overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-[#E8D9B8] lg:order-last"
          >
            <motion.img
              style={{ y: imgY }}
              src={IMG}
              alt="Prato com salada caprese, pães e guarnição sobre mesa de madeira — atmosfera da padaria."
              className="h-[340px] w-full scale-110 object-cover sm:h-[480px] lg:h-[560px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A12]/40 via-transparent to-transparent" />

            {/* Tag flutuante com parallax contrário */}
            <motion.div
              style={{ y: tagY }}
              className="absolute bottom-5 left-5 max-w-[260px] rounded-xl bg-[#FBF5E9]/95 px-4 py-3 shadow-lg backdrop-blur-md"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#6B1F1F]">
                Atmosfera de bairro
              </p>
              <p className="mt-1 text-[13px] font-medium leading-snug text-[#2A1A12]">
                Cheiro de pão quente, café passado e gente conhecida no balcão.
              </p>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
            >
              — O ambiente —
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#2A1A12] sm:text-[2.5rem]"
            >
              Um lugar para sentar,
              <br /> sentir e voltar.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#6B5644] sm:text-base"
            >
              A Pingo de Ouro é padaria de bairro no sentido mais bonito da palavra: o
              lugar onde você cruza com o vizinho, onde o pão quente vira desculpa para
              um café a mais, e onde a equipe conhece o seu pedido de cor. Mesas no
              salão, vitrine sempre cheia e aquele cheiro de pão fresco que não sai da
              memória.
            </motion.p>

            <div className="mt-9 flex flex-col gap-5">
              {pilares.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.titulo}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#6B1F1F]/8 text-[#6B1F1F]">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.05rem] font-bold text-[#2A1A12]">
                        {p.titulo}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#6B5644]">
                        {p.descricao}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Horário destaque */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex items-center gap-3 rounded-xl border border-[#C8923A]/40 bg-[#C8923A]/8 px-5 py-4"
            >
              <Clock size={20} className="text-[#6B1F1F]" />
              <p className="text-[13.5px] font-medium text-[#2A1A12]">
                Segunda a sábado, <strong>9h às 20h</strong>. Domingo,{' '}
                <strong>10h às 18h</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
