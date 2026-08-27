import { motion } from 'framer-motion';
import {
  Croissant,
  Cake,
  Cookie,
  Coffee,
  Utensils,
  Bike,
  type LucideIcon,
} from 'lucide-react';

type Item = {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  tag: string;
};

const itens: Item[] = [
  {
    icon: Croissant,
    titulo: 'Pães artesanais',
    descricao:
      'Pães de fermentação natural e longa, com crosta dourada e miolo macio. Pão francês quentinho a cada hora, integral, de centeio, italiano e especiais do dia.',
    tag: 'Do forno para você',
  },
  {
    icon: Cookie,
    titulo: 'Pão de queijo & salgados',
    descricao:
      'Pão de queijo de minhão — que derrete na boca —, esfiha, coxinha, risoles e empadas. Fritos na hora, sequinhos, do jeitinho brasileiro.',
    tag: 'Feito na hora',
  },
  {
    icon: Cake,
    titulo: 'Confeitaria & bolos',
    descricao:
      'Bolos de corte (fubá, laranja, chocolate, coco), tortas doces, brigadeiro, beijinho, doces de festa e queijadas. Encomendas para aniversário com antecedência.',
    tag: 'Encomendas abertas',
  },
  {
    icon: Coffee,
    titulo: 'Café da manhã',
    descricao:
      'Mesa de café com pão na chapa, manteiga, requeijão, ovos, sucos, frutas e café coado passado na hora. Para sentar, respirar e começar o dia devagar.',
    tag: 'Servido no salão',
  },
  {
    icon: Utensils,
    titulo: 'Almoço & jantar',
    descricao:
      'Refeições caseiras com arroz, feijão, carne, salada e guarnição. Prato feito na hora ou para levar. Comida brasileira de verdade, sem firula.',
    tag: 'Segunda a sábado',
  },
  {
    icon: Bike,
    titulo: 'Delivery no bairro',
    descricao:
      'Peça pelo WhatsApp e receba em casa: pão quentinho, café da manhã, almoço, jantar e aquele docinho pra fechar. Entregamos no Bosque dos Eucaliptos e arredores.',
    tag: 'Pediu, chegou',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Cardapio() {
  return (
    <section
      id="cardapio"
      className="surface-light relative border-t border-[#E8D9B8] py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #FBF5E9 0%, #F4EAD3 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
          >
            — O que sai do forno —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#2A1A12] sm:text-[2.75rem]"
          >
            Cardápio de padaria de bairro,
            <br className="hidden sm:block" /> feito do nosso jeito.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl w-full text-[15px] leading-relaxed text-[#6B5644] sm:text-base"
          >
            Da madrugada ao fim da noite, seis estações trabalhando ao mesmo tempo: o
            forno, a confeitaria, a fritura, o café, a cozinha e o delivery. Tudo fresco,
            tudo no dia, tudo do jeito que você gosta.
          </motion.p>
        </div>

        {/* Grid de cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {itens.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.titulo}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="surface-light group flex h-full flex-col rounded-[var(--radius-card)] border border-[#E8D9B8] bg-[#FBF5E9] p-7 shadow-[var(--shadow-subtle)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B1F1F]/8 text-[#6B1F1F] transition-colors duration-300 group-hover:bg-[#6B1F1F] group-hover:text-[#FBF5E9]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="font-display text-[1.35rem] font-bold leading-tight text-[#2A1A12]">
                  {item.titulo}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#6B5644]">
                  {item.descricao}
                </p>
                <span className="mt-6 self-start rounded-full border border-[#C8923A]/40 bg-[#C8923A]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B1F1F]">
                  {item.tag}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Nota de rodapé */}
        <p className="relative z-10 mx-auto mt-16 max-w-2xl w-full px-4 text-center text-[13px] leading-relaxed text-[#6B5644]">
          Cardápio completo com preços e porções disponível no balcão e pelo WhatsApp.
          Encomendas de bolos e doces devem ser feitas com pelo menos 48h de antecedência.
        </p>
      </div>
    </section>
  );
}
