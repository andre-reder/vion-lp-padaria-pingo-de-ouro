import { motion } from "framer-motion";
import {
  Croissant,
  Sandwich,
  Utensils,
  Coffee,
  CakeSlice,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  name: string;
  desc: string;
  examples: string;
  tag: string;
};

const menu: Item[] = [
  {
    icon: Croissant,
    name: "Pães artesanais",
    desc: "Pão francês de casca crocante e miolo macio, pão integral, pão de forma, pão italiano e pães especiais do dia. Tudo assado em fornada fresca, várias vezes ao dia — porque pão bom é pão quentinho.",
    examples: "Francês · Integral · Italiano · De forma",
    tag: "Da padaria",
  },
  {
    icon: Coffee,
    name: "Pão de queijo & salgados",
    desc: "O nosso pão de queijo é feito com queijo de verdade e sai dourado do forno. Tem coxinha, esfiha, empada, risoles e pastéis — fritos na hora, pra comer quente e sentir a diferença.",
    examples: "Pão de queijo · Coxinha · Esfiha · Empadinha",
    tag: "Sai quentinho",
  },
  {
    icon: Coffee,
    name: "Café da manhã",
    desc: "Misto quente na chapa, pão na manteiga, café coado, cappuccino, sucos naturais e frutas. O combo perfeito pra começar o dia sem pressa — ou pra levar pra mesa de reunião.",
    examples: "Misto quente · Café coado · Sucos · Cappuccino",
    tag: "Das 7h",
  },
  {
    icon: Utensils,
    name: "Almoço & jantar",
    desc: "Comida brasileira caseira: arroz, feijão, carne, salada fresca e sobremesa. Prato feito na hora, do jeito que a fome pede. Tem opção pra levar e pra comer aqui, no balcão ou na mesa.",
    examples: "PF · Refeições completas · Porções",
    tag: "Meio-dia e noite",
  },
  {
    icon: CakeSlice,
    name: "Doces & confeitaria",
    desc: "Bolos caseiros (de fubá, de milho, de laranja), queijadas, sonhos recheados, brigadeiro de colher e tortas. A sobremesa que falta pra fechar a refeição — ou pra adoçar a tarde.",
    examples: "Bolo de fubá · Queijada · Sonho · Tortas",
    tag: "Feito na casa",
  },
  {
    icon: Sandwich,
    name: "Lanches & delivery",
    desc: "Sanduíches naturais, lanches quentes e porções pra qualquer hora. E se você não puder vir até a padaria, a padaria vai até você: entregamos em São José dos Campos pelo nosso delivery.",
    examples: "Naturais · Quentes · Delivery",
    tag: "Pediu, chegou",
  },
];

const waHref =
  "https://wa.me/5512996653971?text=Ol%C3%A1!%20Quero%20ver%20o%20card%C3%A1pio%20e%20fazer%20um%20pedido.";

export default function Menu() {
  return (
    <section
      id="cardapio"
      className="relative overflow-hidden bg-[#F2E6D2] py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-[30rem] w-[30rem] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,115,46,0.20) 0%, transparent 70%)",
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
            <span className="eyebrow">O Cardápio</span>
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
            Tudo que sai do nosso forno, do amanhecer ao jantar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 w-full max-w-2xl text-[1.02rem] leading-relaxed text-[#6B5D4F]"
          >
            Seis categorias que cobrem o seu dia inteiro. Da primeira fornada
            de pão francês ao jantar da noite — com doces, salgados, café e
            refeições completas no meio do caminho.
          </motion.p>
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-3xl border border-[#E8DCC8] bg-[#FFFDF8] p-7 shadow-[0_2px_12px_rgba(42,26,15,0.04)] transition-all duration-300 hover:border-[#B8732E]/40 hover:shadow-[0_20px_48px_rgba(42,26,15,0.12)] sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8732E]/12 text-[#B8732E] transition-colors group-hover:bg-[#B8732E] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-[#B8732E]/30 bg-[#B8732E]/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8B5A1F]">
                    {item.tag}
                  </span>
                </div>

                <h3
                  className="text-[1.4rem] leading-snug text-[#2A1A0F]"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                >
                  {item.name}
                </h3>

                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[#6B5D4F]">
                  {item.desc}
                </p>

                <div className="mb-6 mt-5 border-t border-dashed border-[#E8DCC8] pt-4">
                  <p className="text-[0.78rem] font-medium text-[#8B5A1F]">
                    {item.examples}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Nota + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto mt-16 flex w-full max-w-2xl flex-col items-center gap-6 px-4 text-center"
        >
          <p className="text-[0.95rem] leading-relaxed text-[#6B5D4F]">
            O cardápio completo muda conforme o dia — tem produtos frescos que
            saem do forno em horários específicos. Pelo WhatsApp a gente te
            avisa o que tem quentinho agora.
          </p>
          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5 rounded-full bg-[#C2410C] px-6 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(194,65,12,0.35)] transition-colors hover:bg-[#9A3412]"
          >
            <MessageCircle size={19} />
            Pedir pelo WhatsApp
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
