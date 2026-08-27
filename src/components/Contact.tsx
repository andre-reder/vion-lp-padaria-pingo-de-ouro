import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Camera,
  Navigation,
  ArrowRight,
} from "lucide-react";

const phoneHref = "tel:+5512996653971";
const waHref =
  "https://wa.me/5512996653971?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";
const fbHref = "https://www.facebook.com/641612312518251";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Avenida+Cidade+Jardim+2211+Bosque+dos+Eucaliptos+S%C3%A3o+Jos%C3%A9+dos+Campos+SP";

const hours = [
  { day: "Segunda a Sábado", time: "09h00 — 20h00" },
  { day: "Domingo", time: "10h00 — 18h00" },
];

export default function Contact() {
  return (
    <section
      id="visite"
      className="relative overflow-hidden bg-[#2A1A0F] py-24 sm:py-32"
    >
      {/* Glow ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 opacity-50 blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(194,65,12,0.28) 0%, rgba(184,115,46,0.12) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* CTA principal */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#B8732E]" />
            <span className="eyebrow text-[#B8732E]">Sua próxima parada</span>
            <span className="h-px w-10 bg-[#B8732E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-[#FBF6EE] sm:text-[3.4rem] lg:text-[3.5rem]"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            Venha sentir o cheiro de pão quente.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 w-full max-w-2xl text-[1.05rem] leading-relaxed text-[#F0E4D0]/80"
          >
            Passe aqui, peça pelo WhatsApp ou ligue. O forno está aceso e a
            primeira fornada já está no ar. A gente te espera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 rounded-full bg-[#C2410C] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(194,65,12,0.45)] transition-colors hover:bg-[#9A3412]"
            >
              <MessageCircle size={20} />
              Pedir pelo WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href={phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 rounded-full border-2 border-[#F0E4D0]/40 bg-white/10 px-7 py-4 font-semibold text-[#FBF6EE] backdrop-blur-sm transition-colors hover:border-[#F0E4D0] hover:bg-white/15"
            >
              <Phone size={18} />
              (12) 99665-3971
            </motion.a>
          </motion.div>
        </div>

        {/* Grid de informações */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Endereço + mapa */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="group flex flex-col rounded-3xl border border-[#3A2417] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8732E]/15 text-[#B8732E]">
              <MapPin size={22} />
            </span>
            <h3
              className="text-[1.4rem] leading-snug text-[#2A1A0F]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Onde estamos
            </h3>
            <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-[#6B5D4F]">
              Avenida Cidade Jardim, 2211
              <br />
              Bosque dos Eucaliptos
              <br />
              São José dos Campos — SP
              <br />
              CEP 12231-675
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 rounded-full border-2 border-[#B8732E]/50 px-5 py-3 text-[0.88rem] font-semibold text-[#8B5A1F] transition-colors hover:bg-[#B8732E] hover:text-white"
            >
              <Navigation size={16} />
              Abrir no mapa
            </a>
          </motion.article>

          {/* Horários */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group flex flex-col rounded-3xl border border-[#3A2417] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8732E]/15 text-[#B8732E]">
              <Clock size={22} />
            </span>
            <h3
              className="text-[1.4rem] leading-snug text-[#2A1A0F]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Horário de funcionamento
            </h3>
            <ul className="mt-4 flex-1 space-y-4">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-dashed border-[#E8DCC8] pb-3"
                >
                  <span className="text-[0.95rem] font-medium text-[#2A1A0F]">
                    {h.day}
                  </span>
                  <span className="text-[0.92rem] text-[#6B5D4F]">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.82rem] leading-relaxed text-[#8B5A1F]">
              O forno trabalha em fornadas ao longo de todo o horário. Pães
              quentinhos costumam sair no início da manhã e no fim da tarde.
            </p>
          </motion.article>

          {/* Contato + redes */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group flex flex-col rounded-3xl border border-[#3A2417] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8732E]/15 text-[#B8732E]">
              <MessageCircle size={22} />
            </span>
            <h3
              className="text-[1.4rem] leading-snug text-[#2A1A0F]"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Fale com a gente
            </h3>
            <div className="mt-4 flex-1 space-y-3">
              <a
                href={phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-[#B8732E]/35 px-4 py-3 transition-colors hover:border-[#B8732E]/60 hover:bg-[#F0E4D0]"
              >
                <Phone size={17} className="text-[#B8732E]" />
                <span className="text-[0.95rem] font-medium text-[#2A1A0F]">
                  (12) 99665-3971
                </span>
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#B8732E]/35 px-4 py-3 transition-colors hover:border-[#B8732E]/60 hover:bg-[#F0E4D0]"
              >
                <MessageCircle size={17} className="text-[#B8732E]" />
                <span className="text-[0.95rem] font-medium text-[#2A1A0F]">
                  WhatsApp — pedidos e dúvidas
                </span>
              </a>
              <a
                href={fbHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[#B8732E]/35 px-4 py-3 transition-colors hover:border-[#B8732E]/60 hover:bg-[#F0E4D0]"
              >
                <Camera size={17} className="text-[#B8732E]" />
                <span className="text-[0.95rem] font-medium text-[#2A1A0F]">
                  Facebook — novidades
                </span>
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
