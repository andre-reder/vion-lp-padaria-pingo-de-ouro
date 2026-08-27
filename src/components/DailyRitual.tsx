import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Flame, Coffee, Utensils, Sun, Moon, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Chapter = {
  time: string;
  hour: string;
  title: string;
  body: string;
  oven: string;
  icon: LucideIcon;
  bg: string;
  glow: string;
  accent: string;
};

const chapters: Chapter[] = [
  {
    time: "Madrugada",
    hour: "05h00",
    title: "O forno acende antes do sol",
    body: "A cidade ainda dorme, mas aqui dentro já cheira a lenha e farinha. É a hora de preparar as massas que vão descansar, acender o forno e deixar o pão francês crescer no tempo certo. Nada de pressa — pão bom não tem atalho.",
    oven: "Primeira fornada de pão francês",
    icon: Flame,
    bg: "#1F140C",
    glow: "rgba(194,65,12,0.35)",
    accent: "#C2410C",
  },
  {
    time: "Manhã",
    hour: "07h00",
    title: "O café da manhã que desperta o bairro",
    body: "Pão de queijo dourado, misto quente na chapa, café coado fumegante e suco natural. É o momento em que a rua começa a se mover e a padaria vira ponto de encontro. Tem gente apressada e gente que senta pra conversar — pra todo mundo, tem quentinho.",
    oven: "Pão de queijo, sonhos e cafés",
    icon: Coffee,
    bg: "#2A1A0F",
    glow: "rgba(184,115,46,0.30)",
    accent: "#B8732E",
  },
  {
    time: "Meio-dia",
    hour: "12h00",
    title: "O almoço feito como em casa",
    body: "Comida brasileira de verdade: arroz, feijão, carne, salada e aquela sobremesa que fecha a refeição com chave de ouro. Prato feito na hora, do jeito que a fome pede. Quem trabalha por aqui já tem o de sempre — e quem visita encontra o gostinho de almoço de domingo.",
    oven: "Refeições completas e salgados",
    icon: Utensils,
    bg: "#3A2417",
    glow: "rgba(194,65,12,0.28)",
    accent: "#C2410C",
  },
  {
    time: "Tarde",
    hour: "16h00",
    title: "A pausa doce que o dia pede",
    body: "É a hora do café da tarde: bolo de fubá recém-saído, queijada, pão integral e um café pra acompanhar a conversa. A luz da tarde entra pela vitrine e a padaria fica dourada. É o melhor momento do dia pra desacelerar.",
    oven: "Bolos, doces e pães integrais",
    icon: Sun,
    bg: "#2A1A0F",
    glow: "rgba(184,115,46,0.32)",
    accent: "#B8732E",
  },
  {
    time: "Noite",
    hour: "19h00",
    title: "O jantar e o pão de amanhã",
    body: "Antes de fechar, a última fornada e o jantar pra quem chega do trabalho. E já pensamos no pão de amanhã: as massas que vão descansar de novo, o forno que vai apagar e acender outra vez antes do sol. O ciclo recomeça — e a gente ama cada volta.",
    oven: "Jantar e pães do dia seguinte",
    icon: Moon,
    bg: "#1A1209",
    glow: "rgba(194,65,12,0.30)",
    accent: "#C2410C",
  },
];

function ChapterPanel({
  chapter,
  index,
  total,
  progress,
  reduced,
}: {
  chapter: Chapter;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start - 0.02, start + 0.06, end - 0.06, end + 0.02],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [60, 0, 0, -60]
  );
  const blur = useTransform(
    progress,
    [start - 0.02, start + 0.08, end - 0.08, end + 0.02],
    [8, 0, 0, 8]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const Icon = chapter.icon;

  return (
    <motion.div
      style={{
        opacity: reduced ? (index === 0 ? 1 : 0) : opacity,
        y: reduced ? 0 : y,
        filter: reduced ? "none" : filter,
      }}
      className="absolute inset-0 flex items-center"
    >
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full border"
            style={{
              borderColor: `${chapter.accent}66`,
              backgroundColor: `${chapter.accent}1a`,
              color: chapter.accent,
            }}
          >
            <Icon size={24} />
          </span>
        </div>

        <p
          className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em]"
          style={{ color: chapter.accent }}
        >
          {chapter.time} · {chapter.hour}
        </p>

        <h2
          className="mx-auto max-w-2xl text-[2rem] leading-[1.1] tracking-[-0.02em] text-[#FBF6EE] sm:text-[2.8rem] lg:text-[3.4rem]"
          style={{ fontFamily: "Fraunces, Georgia, serif" }}
        >
          {chapter.title}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed text-[#F0E4D0]/85 sm:text-[1.1rem]">
          {chapter.body}
        </p>

        <div className="mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full border border-[#F0E4D0]/25 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
          <Flame size={15} style={{ color: chapter.accent }} />
          <span className="text-[0.82rem] font-medium text-[#F0E4D0]">
            {chapter.oven}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineDot({
  chapter,
  index,
  total,
  progress,
  reduced,
}: {
  chapter: Chapter;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const dotScale = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0.6, 1.3, 1.3, 0.6]
  );
  const dotOpacity = useTransform(
    progress,
    [start - 0.08, start, end, end + 0.08],
    [0.3, 1, 1, 0.3]
  );

  return (
    <div className="flex items-center gap-3">
      <motion.span
        style={{
          scale: reduced ? 1 : dotScale,
          opacity: reduced ? 1 : dotOpacity,
        }}
        className="h-2.5 w-2.5 rounded-full bg-[#F0E4D0]"
      />
      <motion.span
        style={{ opacity: reduced ? 0.6 : dotOpacity }}
        className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#F0E4D0]/70"
      >
        {chapter.hour}
      </motion.span>
    </div>
  );
}

function ProgressPip({
  index,
  total,
  progress,
  reduced,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const w = useTransform(
    progress,
    [start - 0.04, start, end, end + 0.04],
    ["0.5rem", "2rem", "2rem", "0.5rem"]
  );
  const op = useTransform(
    progress,
    [start - 0.05, start, end, end + 0.05],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.span
      style={{
        width: reduced ? "0.5rem" : w,
        opacity: reduced ? 0.6 : op,
      }}
      className="h-1 rounded-full bg-[#F0E4D0]"
    />
  );
}

export default function DailyRitual() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const n = chapters.length;

  const bgColor = useTransform(
    progress,
    chapters.map((_, i) => i / (n - 1)),
    chapters.map((c) => c.bg)
  );
  const glowColor = useTransform(
    progress,
    chapters.map((_, i) => i / (n - 1)),
    chapters.map((c) => c.glow)
  );

  return (
    <section
      id="o-dia"
      ref={ref}
      className="relative mx-auto max-w-full bg-[#1F140C]"
      style={{ height: `${n * 100}vh` }}
    >
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 mx-auto flex h-[68vh] w-full max-w-full overflow-hidden"
      >
        <motion.div
          aria-hidden="true"
          style={{ background: glowColor }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[140px]"
        />

        {/* Linha do tempo lateral (desktop) */}
        <div className="pointer-events-none absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
          {chapters.map((c, i) => (
            <TimelineDot
              key={c.time}
              chapter={c}
              index={i}
              total={n}
              progress={progress}
              reduced={prefersReduced}
            />
          ))}
        </div>

        {/* Palco */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-5 sm:px-8 lg:px-16">
          {chapters.map((c, i) => (
            <ChapterPanel
              key={c.time}
              chapter={c}
              index={i}
              total={n}
              progress={progress}
              reduced={prefersReduced}
            />
          ))}
        </div>

        {/* Indicador de progresso inferior */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {chapters.map((c, i) => (
            <ProgressPip
              key={c.time}
              index={i}
              total={n}
              progress={progress}
              reduced={prefersReduced}
            />
          ))}
        </div>
      </motion.div>

      {/* Ponte para próxima seção */}
      <div className="relative z-10 flex items-center justify-center bg-[#FBF6EE] py-16">
        <a
          href="#cardapio"
          className="group flex items-center gap-2 text-[0.9rem] font-semibold text-[#8B5A1F] transition-colors hover:text-[#C2410C]"
        >
          <span style={{ fontFamily: "Fraunces, Georgia, serif" }}>
            Veja tudo que sai desse forno
          </span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
