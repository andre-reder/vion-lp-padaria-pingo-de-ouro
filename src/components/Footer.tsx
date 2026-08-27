import { Croissant, MapPin, Phone, Clock, Camera, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Do trigo à mesa', href: '#processo' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Visite', href: '#localizacao' },
];

export default function Footer() {
  return (
    <footer
      className="surface-dark relative border-t border-[#5A4232] pt-16 pb-10"
      style={{ background: '#2A1A12' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C8923A] text-[#2A1A12]">
                <Croissant size={20} strokeWidth={2.2} />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-bold tracking-[0.04em] text-[#FBF5E9]">
                  Padaria Pingo de Ouro
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#E0B45A]">
                  Padaria · Confeitaria
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-[#C9B79A]">
              Padaria de bairro no Bosque dos Eucaliptos, em São José dos Campos. Pães de
              fermentação lenta, pão de queijo, confeitaria, café da manhã, almoço, jantar
              e delivery. Do forno para a sua mesa, todos os dias.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-[#E0B45A]">
              Navegue
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-[#C9B79A] transition-colors hover:text-[#E0B45A]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-[#E0B45A]">
              Visite & peça
            </h3>
            <ul className="mt-4 space-y-3 text-[13.5px] text-[#C9B79A]">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#E0B45A]" />
                <span>
                  Av. Cidade Jardim, 2211
                  <br />
                  Bosque dos Eucaliptos — São José dos Campos / SP
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#E0B45A]" />
                <a
                  href="tel:+5512996653971"
                  className="transition-colors hover:text-[#E0B45A]"
                >
                  (12) 99665-3971
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-0.5 shrink-0 text-[#E0B45A]" />
                <span>
                  Seg–Sáb 9h–20h
                  <br />
                  Dom 10h–18h
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Camera size={15} className="mt-0.5 shrink-0 text-[#E0B45A]" />
                <a
                  href="https://www.facebook.com/641612312518251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#E0B45A]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Base */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#5A4232] pt-6 sm:flex-row">
          <p className="text-[12px] text-[#C9B79A]">
            © {new Date().getFullYear()} Padaria Pingo de Ouro. Página conceitual.
          </p>
          <a
            href="#topo"
            className="inline-flex items-center gap-2 rounded-full border border-[#5A4232] px-4 py-2 text-[12px] font-medium text-[#C9B79A] transition-colors hover:border-[#E0B45A] hover:text-[#E0B45A]"
          >
            <ArrowUp size={14} />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
