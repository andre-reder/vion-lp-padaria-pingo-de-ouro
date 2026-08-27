import { motion } from "framer-motion";

const items = [
  "Pão francês",
  "Pão de queijo",
  "Queijada",
  "Sonho",
  "Bolo de fubá",
  "Coxinha",
  "Café coado",
  "Misto quente",
  "Bolo de milho",
  "Pão integral",
  "Esfiha",
  "Refeição do dia",
];

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      id="destaques"
      className="relative overflow-hidden border-y border-[#3A2417] bg-[#2A1A0F] py-4"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex whitespace-nowrap"
      >
        <div className="pdo-marquee flex shrink-0 items-center gap-8 pr-8">
          {items.concat(items).map((it, i) => (
            <span key={i} className="flex items-center gap-8">
              <span
                className="text-[1.05rem] tracking-wide text-[#F0E4D0]"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                {it}
              </span>
              <span className="text-[#B8732E]">✦</span>
            </span>
          ))}
        </div>
        <div
          className="pdo-marquee flex shrink-0 items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {items.concat(items).map((it, i) => (
            <span key={i} className="flex items-center gap-8">
              <span
                className="text-[1.05rem] tracking-wide text-[#F0E4D0]"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                {it}
              </span>
              <span className="text-[#B8732E]">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
      </div>

      <style>{`
        @keyframes pdoMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .pdo-marquee {
          animation: pdoMarquee 38s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .pdo-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
