import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

type Depo = {
  nome: string;
  contexto: string;
  estrelas: number;
  texto: string;
};

const depoimentos: Depo[] = [
  {
    nome: 'Mariana Lopes',
    contexto: 'Cliente do café da manhã',
    estrelas: 5,
    texto:
      'O pão francês sai quentinho o dia inteiro e o café da manhã no salão virou meu ritual de sábado. Atendimento que conhece o pedido, sem precisar falar.',
  },
  {
    nome: 'Rafael Camargo',
    contexto: 'Pediu delivery no jantar',
    estrelas: 5,
    texto:
      'Pedi um pf de feijão tropeiro com arroz e salada e chegou quente, bem embalado e na hora certa. Comida de padaria que parece de casa de avó.',
  },
  {
    nome: 'Patrícia Mendes',
    contexto: 'Encomendou bolo de aniversário',
    estrelas: 5,
    texto:
      'Encomendei o bolo de fubá com goiabada para o aniversário da minha mãe e foi um sucesso. Massa fofinha, recheio na medida e entrega pontual.',
  },
  {
    nome: 'Eduardo Tanaka',
    contexto: 'Almoço de semana',
    estrelas: 4,
    texto:
      'Prato feito farto e com preço justo. Só acho que o salão lota rápido no pico do almoço — vale chegar cedo. O pão de queijo compensa qualquer fila.',
  },
  {
    nome: 'Sônia Brito',
    contexto: 'Cliente do bairro há anos',
    estrelas: 5,
    texto:
      'Moro no Bosque dos Eucaliptos há 12 anos e a Pingo de Ouro é parte da minha rotina. Pão, leite, doce e aquela conversa no balcão. Padaria de bairro de verdade.',
  },
];

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="surface-light paper-grain relative border-t border-[#E8D9B8] py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #F4EAD3 0%, #FBF5E9 100%)' }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
          >
            — Quem senta à mesa —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#2A1A12] sm:text-[2.5rem]"
          >
            Histórias de quem volta sempre.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl w-full text-[14px] leading-relaxed text-[#6B5644]"
          >
            Avaliações abaixo são exemplos representativos do que clientes do segmento
            costumam dizer — e não depoimentos reais coletados.
          </motion.p>
        </div>

        {/* Grid de cards com variação de tamanho para evitar repetição */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.nome}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className={`surface-light flex flex-col rounded-[var(--radius-card)] border border-[#E8D9B8] bg-[#FBF5E9] p-7 shadow-[var(--shadow-subtle)] ${
                i === 0 ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <Quote
                size={28}
                className="mb-4 text-[#C8923A]"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <blockquote className="flex-1 text-[14.5px] leading-relaxed text-[#2A1A12]">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-[#E8D9B8] pt-5">
                <div>
                  <p className="font-display text-[15px] font-bold text-[#2A1A12]">
                    {d.nome}
                  </p>
                  <p className="mt-0.5 text-[12px] uppercase tracking-[0.12em] text-[#6B5644]">
                    {d.contexto}
                  </p>
                </div>
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`${d.estrelas} de 5 estrelas`}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={13}
                      className={
                        s < d.estrelas
                          ? 'fill-[#C8923A] text-[#C8923A]'
                          : 'fill-transparent text-[#C8923A]/40'
                      }
                      strokeWidth={1.6}
                    />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
