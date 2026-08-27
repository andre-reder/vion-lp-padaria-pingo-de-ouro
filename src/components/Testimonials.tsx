import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  context: string;
  stars: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Marina A.",
    initials: "MA",
    context: "Cliente do café da manhã",
    stars: 5,
    text: "Paro aqui todo dia antes do trabalho. O pão de queijo sai quentinho do forno e o café coado é dos melhores do bairro. Atendimento que já sabe o que eu vou pedir — me faz sentir em casa.",
  },
  {
    name: "Rafael e Bia",
    initials: "RB",
    context: "Almoço de sábado",
    stars: 5,
    text: "O almoço de sábado virou tradição da família. Comida caseira de verdade, prato farto, preço honesto. A sobremesa de bolo de fubá fecha com chave de ouro. Recomendo de olhos fechados.",
  },
  {
    name: "Carlos T.",
    initials: "CT",
    context: "Delivery no escritório",
    stars: 5,
    text: "Peço delivery pro escritório duas, três vezes por semana. Chega quentinho, na hora certa, e nunca erraram o pedido. Salvou muitas reuniões com fome. Pão francês daqui é outro nível.",
  },
  {
    name: "Juliana M.",
    initials: "JM",
    context: "Vizinha do Bosque dos Eucaliptos",
    stars: 4,
    text: "Morar pertinho da padaria é um luxo. Cheiro de pão quente de manhã dá vontade de descer de pijama. Só acho que podia abrir um pouquinho mais cedo aos domingos — mas o pão compensa.",
  },
  {
    name: "Sr. Antônio",
    initials: "SA",
    context: "Cliente de longa data",
    stars: 5,
    text: "Conheço padaria boa quando provo. O pão francês daqui tem casca de verdade, miolo macio, e o salgado é frito na hora — não é desses congelados. Padaria de bairro como tem que ser.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={15}
          className={
            i < count ? "fill-[#B8732E] text-[#B8732E]" : "text-[#E8DCC8]"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#F2E6D2] py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(194,65,12,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#B8732E]" />
            <span className="eyebrow">Quem prova, volta</span>
            <span className="h-px w-10 bg-[#B8732E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[#2A1A0F] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            O que o bairro diz sobre o Pingo de Ouro.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 w-full max-w-2xl text-[1.02rem] leading-relaxed text-[#6B5D4F]"
          >
            Depoimentos representativos do que clientes do segmento costumam
            relatar. Exemplos ilustrativos — a sua experiência pode ser a
            próxima.
          </motion.p>
        </div>

        {/* Grid de avaliações — masonry via columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 sm:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 break-inside-avoid rounded-3xl border border-[#E8DCC8] bg-[#FFFDF8] p-7 shadow-[0_2px_12px_rgba(42,26,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(42,26,15,0.10)] sm:mb-8 sm:p-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <Stars count={r.stars} />
                <Quote size={22} className="rotate-180 text-[#B8732E]/30" />
              </div>

              <blockquote
                className="text-[1rem] leading-relaxed text-[#2A1A0F]"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                “{r.text}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#E8DCC8] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B8732E]/15 text-[0.82rem] font-semibold text-[#8B5A1F]">
                  {r.initials}
                </span>
                <div>
                  <p className="text-[0.92rem] font-semibold text-[#2A1A0F]">
                    {r.name}
                  </p>
                  <p className="text-[0.78rem] text-[#6B5D4F]">{r.context}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Nota de exemplo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 mx-auto mt-12 max-w-2xl px-4 text-center text-[0.78rem] leading-relaxed text-[#8B5A1F]"
        >
          Avaliações ilustrativas, criadas como exemplos representativos do
          segmento de padaria e confeitaria. Não correspondem a depoimentos
          reais de clientes identificados.
        </motion.p>
      </div>
    </section>
  );
}
