import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const perguntas = [
  {
    q: 'Como faço para pedir delivery?',
    a: 'O pedido é feito diretamente pelo WhatsApp, no número (12) 99665-3971. Você manda o que quer, confirma o endereço e combinamos a entrega no Bosque dos Eucaliptos e arredores. O cardápio completo com preços também pode ser enviado por lá.',
  },
  {
    q: 'Vocês atendem com hora marcada?',
    a: 'O salão funciona em horário comercial sem necessidade de reserva. Para encomendas de bolos, doces e salgados em quantidade, peça com pelo menos 48h de antecedência para garantir a data e o horário desejados.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Aceitamos dinheiro, cartões de débito e crédito, Pix e vouchers refeição. Para delivery, o pagamento pode ser feito na entrega ou via Pix antecipado, conforme combinado no WhatsApp.',
  },
  {
    q: 'Tem café da manhã no salão?',
    a: 'Sim. Servimos mesa de café da manhã com pão na chapa, manteiga, requeijão, ovos, sucos, frutas e café coado passado na hora. É só chegar, sentar e pedir no balcão.',
  },
  {
    q: 'Fazem encomenda de bolo de aniversário?',
    a: 'Fazemos. Bolos de corte (fubá, laranja, chocolate, coco), tortas doces e bolos decorados simples. Encomende com 48h de antecedência informando sabor, tamanho e data desejada.',
  },
  {
    q: 'Qual o horário de funcionamento?',
    a: 'Segunda a sábado, das 9h às 20h. Domingo, das 10h às 18h. O forno trabalha em fornadas ao longo do dia, então sempre tem pão quente saindo.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'A padaria fica na Av. Cidade Jardim, 2211, com fácil parada na rua para retirada rápida. Para horários de pico, recomendamos chegar um pouco antes para garantir vaga próxima.',
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="surface-light border-b border-[#E8D9B8]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-[#6B1F1F]"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-display text-[14px] font-bold text-[#C8923A]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-[16px] font-bold leading-snug text-[#2A1A12] sm:text-[18px]">
            {q}
          </span>
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#C8923A]/40 text-[#6B1F1F] transition-colors">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pl-10 pr-10 text-[14.5px] leading-relaxed text-[#6B5644]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="surface-light relative border-t border-[#E8D9B8] py-24 sm:py-32"
      style={{ background: '#FBF5E9' }}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B1F1F]"
          >
            — Perguntas frequentes —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#2A1A12] sm:text-[2.5rem]"
          >
            Tudo o que você pode perguntar antes de vir.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          {perguntas.map((p, i) => (
            <Item key={i} q={p.q} a={p.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
