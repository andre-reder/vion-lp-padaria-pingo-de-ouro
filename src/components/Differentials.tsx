import { motion } from "framer-motion";
import { Flame, Clock, Truck, HeartHandshake, Sparkles, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Diff = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const diffs: Diff[] = [
  {
    icon: Flame,
    title: "Fornadas frescas várias vezes ao dia",
    body: "Pão francês não fica esperando no balcão. Assamos em fornadas ao longo do dia pra você levar pra casa com aquela casca crocante e o miolo quente. Se chegou e acabou, é só esperar a próxima — sai em minutos.",
  },
  {
    icon: Clock,
    title: "Aberto de manhã à noite, seis dias por semana",
    body: "Segunda a sábado, das 9h às 20h. Domingo, das 10h às 18h. A padaria acompanha o seu dia — do café da manhã ao jantar. Não tem horário de almoço restrito: tem comida quente o dia todo.",
  },
  {
    icon: Truck,
    title: "Delivery em São José dos Campos",
    body: "Não pode vir até a gente? A gente vai até você. Entregamos pães, salgados, doces e refeições pela cidade. Pelo WhatsApp você pede, a gente prepara na hora e manda quentinho.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento que chama pelo nome",
    body: "Padaria de bairro é outra coisa. Aqui a gente conhece o pedido de quem vem todo dia, sugere o que saiu do forno agora e conversa no balcão. É o tipo de cuidado que vira costume.",
  },
  {
    icon: Sparkles,
    title: "Receitas da casa, sem encomenda de fábrica",
    body: "Nossos doces, salgados e pães são feitos aqui, com a nossa mão e a nossa receita. Nada de produto congelado revendido como fresco. O sabor de comida de verdade dá pra sentir na primeira mordida.",
  },
  {
    icon: MapPin,
    title: "No coração do Bosque dos Eucaliptos",
    body: "Av. Cidade Jardim, 2211 — fácil de chegar, fácil de parar. Um ponto de referência do bairro, pertinho de casa ou do trabalho. Dá pra passar no caminho e levar o pão quentinho.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-[#FBF6EE] py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Cabeçalho lateral */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#B8732E]" />
              <span className="eyebrow">Por que o Pingo de Ouro</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-[#2A1A0F] sm:text-[2.6rem] lg:text-[2.9rem]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Seis razões pra fazer do Pingo de Ouro a sua padaria de todo dia.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-[#6B5D4F]"
            >
              Não é só ter pão bom. É ter pão bom na hora certa, no lugar certo,
              com o atendimento que faz você voltar. É isso que diferencia uma
              padaria de bairro de verdade.
            </motion.p>
          </div>

          {/* Lista de diferenciais */}
          <div className="grid grid-cols-1 gap-1 overflow-hidden rounded-3xl border border-[#E8DCC8] bg-[#E8DCC8] sm:grid-cols-2">
            {diffs.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.article
                  key={d.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.6,
                    delay: (i % 2) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative bg-[#FFFDF8] p-7 transition-colors duration-300 hover:bg-[#F0E4D0] sm:p-8"
                >
                  <span className="absolute right-6 top-6 text-[0.7rem] font-semibold text-[#B8732E]/40">
                    0{i + 1}
                  </span>
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#B8732E]/12 text-[#B8732E] transition-all duration-300 group-hover:bg-[#B8732E] group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <h3
                    className="text-[1.18rem] leading-snug text-[#2A1A0F]"
                    style={{ fontFamily: "Fraunces, Georgia, serif" }}
                  >
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[#6B5D4F]">
                    {d.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
