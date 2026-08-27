import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Camera, Navigation } from 'lucide-react';

const endereco = {
  rua: 'Avenida Cidade Jardim, 2211',
  bairro: 'Bosque dos Eucaliptos',
  cidade: 'São José dos Campos — SP',
  cep: 'CEP 12231-675',
};

const horarios = [
  { dia: 'Segunda a sábado', h: '9h às 20h' },
  { dia: 'Domingo', h: '10h às 18h' },
];

const WHATSAPP =
  'https://wa.me/5512996653971?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Padaria%20Pingo%20de%20Ouro.';

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="surface-dark relative overflow-hidden border-t border-[#5A4232] py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, #3A2A1E 0%, #2A1A12 100%)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(200,146,58,0.4), transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E0B45A]"
          >
            — Onde estamos —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-bold leading-tight text-[#FBF5E9] sm:text-[2.5rem]"
          >
            Passe para o café. Fica fácil de chegar.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Painel de informações */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="surface-dark flex flex-col gap-6 rounded-[var(--radius-card)] border border-[#5A4232] bg-[#3A2A1E]/60 p-7 sm:p-9 backdrop-blur-sm"
          >
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#E0B45A]/40 bg-[#E0B45A]/10 text-[#E0B45A]">
                <MapPin size={18} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.1em] text-[#E0B45A]">
                  Endereço
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[#FBF5E9]">
                  {endereco.rua}
                  <br />
                  {endereco.bairro}
                  <br />
                  {endereco.cidade}
                  <br />
                  <span className="text-[#C9B79A]">{endereco.cep}</span>
                </p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#E0B45A]/40 bg-[#E0B45A]/10 text-[#E0B45A]">
                <Clock size={18} strokeWidth={2} />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.1em] text-[#E0B45A]">
                  Horários
                </h3>
                <ul className="mt-1.5 space-y-1.5">
                  {horarios.map((h) => (
                    <li
                      key={h.dia}
                      className="flex flex-wrap items-center justify-between gap-x-4 text-[14.5px] text-[#FBF5E9]"
                    >
                      <span>{h.dia}</span>
                      <span className="font-semibold text-[#E0B45A]">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contatos */}
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#E0B45A]/40 bg-[#E0B45A]/10 text-[#E0B45A]">
                <Phone size={18} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.1em] text-[#E0B45A]">
                  Contato
                </h3>
                <p className="mt-1.5 text-[15px] text-[#FBF5E9]">
                  <a
                    href="tel:+5512996653971"
                    className="transition-colors hover:text-[#E0B45A]"
                  >
                    (12) 99665-3971
                  </a>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C8923A] px-5 py-3.5 text-[14px] font-semibold text-[#2A1A12] shadow-lg transition-all duration-300 hover:bg-[#E0B45A]"
              >
                <MessageCircle size={16} strokeWidth={2.4} />
                Pedir pelo WhatsApp
              </a>
              <a
                href="https://www.facebook.com/641612312518251"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#E0B45A]/60 bg-[#FBF5E9]/10 px-5 py-3.5 text-[14px] font-semibold text-[#FBF5E9] backdrop-blur-sm transition-all duration-300 hover:border-[#E0B45A] hover:bg-[#FBF5E9]/20"
              >
                <Camera size={16} strokeWidth={2.2} />
                Ver no Facebook
              </a>
            </div>
          </motion.div>

          {/* Mapa ilustrativo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="surface-dark relative flex min-h-[360px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-[#5A4232] bg-[#3A2A1E]/60 backdrop-blur-sm"
          >
            {/* Mapa estilizado em SVG */}
            <div className="relative flex-1 overflow-hidden">
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="streets"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#5A4232"
                      strokeWidth="0.6"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="#3A2A1E" />
                <rect width="400" height="300" fill="url(#streets)" />
                {/* Avenidas principais */}
                <path
                  d="M 0 150 L 400 150"
                  stroke="#C8923A"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <path
                  d="M 200 0 L 200 300"
                  stroke="#C8923A"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <path
                  d="M 0 80 Q 200 100 400 60"
                  stroke="#5A4232"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 0 220 Q 150 240 400 210"
                  stroke="#5A4232"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Pin central */}
                <g transform="translate(200, 150)">
                  <circle r="22" fill="#6B1F1F" opacity="0.25">
                    <animate
                      attributeName="r"
                      values="22;30;22"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.25;0;0.25"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="10" fill="#6B1F1F" />
                  <circle r="4" fill="#E0B45A" />
                </g>
              </svg>

              {/* Label sobre o mapa */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-12 rounded-full bg-[#2A1A12]/90 px-4 py-2 text-center backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#E0B45A]">
                  Pingo de Ouro
                </p>
                <p className="text-[12px] text-[#FBF5E9]">Av. Cidade Jardim, 2211</p>
              </div>
            </div>

            {/* Rodapé do mapa com instrução */}
            <div className="border-t border-[#5A4232] bg-[#2A1A12]/80 px-5 py-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Cidade+Jardim+2211+S%C3%A3o+Jos%C3%A9+dos+Campos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#E0B45A] transition-colors hover:text-[#FBF5E9]"
              >
                <Navigation size={15} strokeWidth={2.2} />
                Abrir trajeto no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
