import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Croissant, Coffee, CakeSlice } from "lucide-react";

const imgBase =
  "https://images.pexels.com/photos/28059315/pexels-photo-28059315.jpeg?auto=compress&cs=tinysrgb";

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="galeria" className="relative bg-[#2A1A0F] py-24 sm:py-32">
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
            <span className="eyebrow text-[#B8732E]">A Mesa</span>
            <span className="h-px w-10 bg-[#B8732E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[#FBF6EE] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            Um gostinho do que te espera no balcão.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 w-full max-w-2xl text-[1.02rem] leading-relaxed text-[#F0E4D0]/70"
          >
            Pão quentinho, prato feito na hora, café fumegante e doces que
            abraçam. Cada visita ao Pingo de Ouro é uma pausa boa no meio do
            dia.
          </motion.p>
        </div>

        {/* Grid editorial */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:grid-rows-2">
          {/* Imagem grande — esquerda */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl border border-[#3A2417] shadow-2xl"
          >
            <motion.img
              style={{ y: prefersReduced ? 0 : y1 }}
              src={`${imgBase}&h=1100&w=900`}
              alt="Prato de refeição fresca servido na padaria — salada caprese com pão artesanal sobre mesa de madeira."
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1209]/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#B8732E]">
                Almoço & jantar
              </p>
              <p
                className="mt-2 text-[1.4rem] leading-tight text-[#FBF6EE] sm:text-[1.7rem]"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                Comida brasileira, feita na hora
              </p>
            </figcaption>
          </motion.figure>

          {/* Tile ícone — pão */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#3A2417] bg-gradient-to-br from-[#3A2417] to-[#1F140C] p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(184,115,46,0.4) 0%, transparent 60%)",
              }}
            />
            <Croissant size={40} className="text-[#B8732E] transition-transform duration-500 group-hover:scale-110" />
            <p
              className="mt-4 text-center text-[1.1rem] text-[#F0E4D0]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Pães do dia
            </p>
          </motion.div>

          {/* Imagem média — café da manhã */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative col-span-2 overflow-hidden rounded-3xl border border-[#3A2417] shadow-xl lg:col-span-2"
          >
            <motion.img
              style={{ y: prefersReduced ? 0 : y2 }}
              src={`${imgBase}&h=600&w=900`}
              alt="Detalhe de refeição servida na padaria — pão e ingredientes frescos sobre a mesa."
              loading="lazy"
              className="h-[12rem] w-full object-cover sm:h-[14rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1209]/60 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#B8732E]">
                Café da manhã
              </p>
              <p
                className="mt-1 text-[1.15rem] leading-tight text-[#FBF6EE]"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                Quentinho desde as 7h
              </p>
            </figcaption>
          </motion.figure>

          {/* Tile ícone — café */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#3A2417] bg-gradient-to-br from-[#3A2417] to-[#1F140C] p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(194,65,12,0.4) 0%, transparent 60%)",
              }}
            />
            <Coffee size={40} className="text-[#C2410C] transition-transform duration-500 group-hover:scale-110" />
            <p
              className="mt-4 text-center text-[1.1rem] text-[#F0E4D0]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Café coado
            </p>
          </motion.div>

          {/* Tile ícone — doces */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#3A2417] bg-gradient-to-br from-[#3A2417] to-[#1F140C] p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(184,115,46,0.4) 0%, transparent 60%)",
              }}
            />
            <CakeSlice size={40} className="text-[#B8732E] transition-transform duration-500 group-hover:scale-110" />
            <p
              className="mt-4 text-center text-[1.1rem] text-[#F0E4D0]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Doces & bolos
            </p>
          </motion.div>
        </div>
      </div>

      {/* Crédito como irmão do grid */}
      <div className="relative z-10 mx-auto mt-16 max-w-2xl px-4">
        <p className="text-center text-[0.78rem] leading-relaxed text-[#F0E4D0]/45">
          Fotografias ilustrativas de{" "}
          <a
            href="https://www.pexels.com/@jonathanborba"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 transition-colors hover:text-[#B8732E]"
          >
            Jonathan Borba
          </a>{" "}
          via Pexels. As imagens representam o estilo das refeições servidas e
          podem diferir da apresentação real no balcão.
        </p>
      </div>
    </section>
  );
}
