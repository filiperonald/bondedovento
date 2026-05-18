import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Wind,
  Sun,
  MapPin,
  HeartHandshake,
  Instagram,
  MessageCircle,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import { KiteCursor } from "@/components/KiteCursor";
import { Reveal } from "@/components/Reveal";

import heroImg from "@/assets/hero.jpg";
import pAmarelo from "@/assets/papagaio-amarelo.png";
import pRoxo from "@/assets/papagaio-roxo.png";
import pVerde from "@/assets/papagaio-verde.png";
import pQuebrada from "@/assets/papagaio-quebrada.png";
import linhas from "@/assets/linhas.png";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonde do Vento — Papagaios, linhas e kits pra soltar com estilo" },
      {
        name: "description",
        content:
          "Papagaios coloridos, linhas brancas seguras e kits prontos pra soltar. Brincadeira de rua, sem cerol, com a energia do vento mineiro.",
      },
      { property: "og:title", content: "Bonde do Vento — Solte com estilo, cor e segurança" },
      {
        property: "og:description",
        content:
          "Papagaios, linhas e kits completos pro melhor rolê de fim de tarde. Sem cerol, sem linha chilena. Só vento bom.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* ---------- Data ---------- */

const papagaios = [
  { id: "raio", name: "Papagaio Raio de Sol", desc: "Amarelo, laranja e cheio de presença no céu.", price: 7.9, img: pAmarelo, tint: "var(--sun)" },
  { id: "roxo", name: "Papagaio Céu Roxo", desc: "Modelo chamativo pra quem gosta de cor forte.", price: 8.9, img: pRoxo, tint: "var(--grape)" },
  { id: "verde", name: "Papagaio Verde Vento", desc: "Leve, bonito e pronto pra subir.", price: 7.9, img: pVerde, tint: "var(--leaf)" },
  { id: "quebrada", name: "Papagaio Estilo Quebrada", desc: "Design urbano, colorido e com cara de rua.", price: 9.9, img: pQuebrada, tint: "var(--pink-pop)" },
];

const linhasList = [
  { id: "branca", name: "Linha Branca Segura", desc: "Pra soltar papagaio com tranquilidade e responsabilidade.", price: 5.9 },
  { id: "color", name: "Linha Colorida", desc: "Mais cor pra combinar com seu papagaio.", price: 6.9 },
  { id: "carretel", name: "Carretel Econômico", desc: "Ideal pra quem quer garantir o fim de semana.", price: 11.9 },
];

const kits = [
  { id: "começou", name: "Kit Começou Agora", items: "1 papagaio + 1 linha branca", price: 12.9, popular: false },
  { id: "amigos", name: "Kit Chama os Amigos", items: "3 papagaios + 2 linhas", price: 29.9, popular: true },
  { id: "tarde", name: "Kit Fim de Tarde", items: "5 papagaios + 3 linhas + carretel", price: 49.9, popular: false },
];

const seguranca = [
  { icon: MapPin, title: "Solte em lugar aberto", text: "Evite ruas movimentadas, fios, antenas e áreas com muito trânsito." },
  { icon: ShieldCheck, title: "Use linha segura", text: "Nada de cerol, linha chilena ou material cortante." },
  { icon: HeartHandshake, title: "Cuide de quem tá por perto", text: "Diversão boa é aquela que não machuca ninguém." },
  { icon: Wind, title: "Respeite o espaço", text: "Procure praças, campos e lugares abertos pra brincar." },
];

const depoimentos = [
  { name: "Téo, 17", text: "Comprei o kit e chegou tudo certinho. O papagaio subiu fácil demais.", color: "var(--sun)" },
  { name: "Lari, 19", text: "As cores são muito bonitas. Dá até dó de soltar, mas voa muito.", color: "var(--pink-pop)" },
  { name: "Juninho, 15", text: "Gostei porque é tudo sem cerol. Dá pra brincar sem preocupação.", color: "var(--leaf)" },
];

const faq = [
  { q: "Vocês vendem linha com cerol?", a: "Não. A Bonde do Vento trabalha apenas com linhas seguras." },
  { q: "O que vem nos kits?", a: "Depende do kit escolhido. Temos opções com papagaio, linha branca, linha colorida e carretel." },
  { q: "Posso comprar pelo WhatsApp?", a: "Sim. Você escolhe o produto e finaliza direto pelo WhatsApp." },
  { q: "Entrega em quais regiões?", a: "A entrega é combinada direto pelo WhatsApp de acordo com a sua região." },
];

const WHATS = "https://wa.me/5500000000000";

/* ---------- Page ---------- */

export function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-graphite">
      <KiteCursor />
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Linhas />
        <Kits />
        <Seguranca />
        <Galeria />
        <Pedido />
        <Depoimentos />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#papagaios", label: "Papagaios" },
    { href: "#kits", label: "Kits" },
    { href: "#seguranca", label: "Segurança" },
    { href: "#galeria", label: "Galeria" },
    { href: "#comprar", label: "Comprar" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all sm:px-6 ${
          scrolled ? "glass shadow-card" : "glass"
        }`}
      >
        <a href="#inicio" className="flex items-center gap-2">
          <KiteLogo />
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Bonde do Vento
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-graphite/80 transition hover:bg-white hover:text-graphite"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#comprar"
            className="btn-shimmer hidden rounded-full bg-pink-pop px-5 py-2.5 text-sm font-bold text-white shadow-pop transition hover:scale-105 sm:inline-flex"
          >
            Comprar agora
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full bg-white p-2 text-graphite shadow-card md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass p-4 shadow-card md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-base font-medium hover:bg-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#comprar"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-pink-pop px-4 py-3 text-center text-base font-bold text-white"
              >
                Comprar agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function KiteLogo() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-vento shadow-pop">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden>
        <polygon points="12,2 22,12 12,22 2,12" fill="currentColor" stroke="white" strokeWidth="0.5" />
        <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1" opacity="0.6" />
      </svg>
    </span>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="inicio" className="relative pt-32 sm:pt-36">
      {/* Clouds */}
      <Clouds />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:pb-20">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-grape shadow-card">
              <Sparkles size={14} /> Minas Gerais · Direto do vento
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Solte seu papagaio com{" "}
              <span className="bg-gradient-vento bg-clip-text text-transparent">
                estilo, cor
              </span>{" "}
              e segurança.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-lg text-graphite/70 sm:text-xl">
              Papagaios, linhas brancas e kits completos pra quem sabe que o melhor
              rolê começa quando o vento ajuda.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#papagaios"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-graphite px-6 py-3.5 text-base font-bold text-white shadow-pop transition hover:-translate-y-0.5"
              >
                Ver modelos <ChevronDown size={18} />
              </a>
              <a
                href="#comprar"
                className="inline-flex items-center gap-2 rounded-full border-2 border-graphite bg-white px-6 py-3.5 text-base font-bold text-graphite transition hover:bg-sun"
              >
                Montar meu kit <ShoppingBag size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-graphite/70">
              <Badge color="var(--leaf)"><ShieldCheck size={14} /> Sem cerol</Badge>
              <Badge color="var(--sun)"><Sun size={14} /> Fim de tarde garantido</Badge>
              <Badge color="var(--sky)"><Wind size={14} /> Vento bom</Badge>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-sunset opacity-30 blur-2xl" />
              <img
                src={heroImg}
                alt="Jovens soltando papagaios coloridos sobre lajes de um bairro mineiro ao entardecer"
                width={1536}
                height={1152}
                className="relative w-full rounded-[2rem] border-4 border-white object-cover shadow-pop"
              />
              {/* Floating kites */}
              <img
                src={pAmarelo}
                alt=""
                aria-hidden
                className="absolute -left-6 -top-8 h-20 w-20 animate-float sm:h-28 sm:w-28"
              />
              <img
                src={pRoxo}
                alt=""
                aria-hidden
                className="absolute -right-4 top-10 h-16 w-16 animate-float-slow sm:h-24 sm:w-24"
              />
              <img
                src={pVerde}
                alt=""
                aria-hidden
                className="absolute -bottom-6 right-10 h-16 w-16 animate-float sm:h-20 sm:w-20"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-semibold shadow-card"
      style={{ color: "var(--graphite)", borderLeft: `4px solid ${color}` }}
    >
      {children}
    </span>
  );
}

function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-20 z-0 h-full overflow-hidden">
      <div className="absolute left-0 top-10 w-full animate-drift opacity-60">
        <Cloud />
      </div>
      <div
        className="absolute left-0 top-40 w-full animate-drift opacity-40"
        style={{ animationDuration: "90s", animationDelay: "-30s" }}
      >
        <Cloud big />
      </div>
    </div>
  );
}

function Cloud({ big = false }: { big?: boolean }) {
  const w = big ? 140 : 90;
  return (
    <svg width={w} height={w / 2} viewBox="0 0 140 70" aria-hidden>
      <g fill="white">
        <circle cx="30" cy="40" r="22" />
        <circle cx="55" cy="30" r="26" />
        <circle cx="85" cy="40" r="22" />
        <circle cx="110" cy="45" r="18" />
        <rect x="25" y="40" width="95" height="22" rx="11" />
      </g>
    </svg>
  );
}

/* ---------- Produtos ---------- */

function Produtos() {
  return (
    <section id="papagaios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel color="var(--pink-pop)">Modelos</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Escolha seu papagaio.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-graphite/70">
            Quatro estilos pra quem quer chegar no campo e colorir o céu na hora.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {papagaios.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-card transition hover:-translate-y-2 hover:shadow-pop">
                <div
                  className="relative mb-4 grid aspect-square place-items-center rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 60%, ${p.tint}33, transparent 70%)`,
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-4/5 w-4/5 object-contain transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-6"
                  />
                </div>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-graphite/70">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl font-bold" style={{ color: p.tint }}>
                    R$ {p.price.toFixed(2).replace(".", ",")}
                  </span>
                  <a
                    href="#comprar"
                    className="rounded-full bg-graphite px-4 py-2 text-xs font-bold text-white transition hover:bg-pink-pop"
                  >
                    Adicionar ao kit
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-card"
      style={{ color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} /> {children}
    </span>
  );
}

/* ---------- Linhas ---------- */

function Linhas() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-vento opacity-20 blur-xl" />
              <div className="relative grid place-items-center rounded-3xl bg-white p-6 shadow-card">
                <img
                  src={linhas}
                  alt="Carretéis de linha colorida e linha branca segura"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full max-w-md object-contain"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel color="var(--sky)">Linhas</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Linhas pra brincar de boa.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {linhasList.map((l, i) => (
                <Reveal key={l.id} delay={i * 80}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:translate-x-1">
                    <div>
                      <h3 className="font-display text-lg font-bold">{l.name}</h3>
                      <p className="text-sm text-graphite/70">{l.desc}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-pink-pop">
                      R$ {l.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-8 rounded-3xl bg-graphite p-6 text-white shadow-pop">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 shrink-0 text-leaf" style={{ color: "var(--leaf)" }} />
                  <p className="text-sm leading-relaxed sm:text-base">
                    Na Bonde do Vento, a brincadeira é no alto, mas a responsabilidade
                    vem junto. <strong>Aqui não tem cerol, linha chilena ou linha cortante.</strong>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Kits ---------- */

function Kits() {
  return (
    <section id="kits" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel color="var(--flame)">Kits</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Kits prontos pro rolê.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-graphite/70">
            Chega no campo já com tudo na mão. Escolhe o seu e parte pro vento.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {kits.map((k, i) => (
            <Reveal key={k.id} delay={i * 100}>
              <article
                className={`relative flex h-full flex-col rounded-[2rem] p-7 shadow-card transition hover:-translate-y-2 ${
                  k.popular
                    ? "bg-gradient-vento text-white shadow-pop"
                    : "bg-white text-graphite"
                }`}
              >
                {k.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sun px-4 py-1 text-xs font-bold uppercase tracking-wider text-graphite shadow-card">
                    Mais vendido
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{k.name}</h3>
                <p className={`mt-2 text-sm ${k.popular ? "text-white/90" : "text-graphite/70"}`}>
                  {k.items}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">
                    R$ {k.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <a
                  href="#comprar"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                    k.popular
                      ? "bg-white text-graphite hover:scale-105"
                      : "bg-graphite text-white hover:bg-pink-pop"
                  }`}
                >
                  Quero esse kit <ShoppingBag size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Segurança ---------- */

function Seguranca() {
  return (
    <section id="seguranca" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-graphite px-6 py-16 text-white shadow-pop sm:px-10 sm:py-20">
        <Reveal>
          <SectionLabel color="var(--leaf)">Segurança</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Brincar bonito é brincar seguro.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seguranca.map((s, i) => {
            const Icon = s.icon;
            const palette = ["var(--sun)", "var(--leaf)", "var(--pink-pop)", "var(--sky)"];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: palette[i % palette.length], color: "var(--graphite)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Galeria ---------- */

function Galeria() {
  const imgs = [
    { src: g1, alt: "Crianças e jovens soltando papagaio em campo aberto ao pôr do sol", span: "sm:col-span-2 sm:row-span-2" },
    { src: g2, alt: "Céu azul cheio de papagaios coloridos", span: "" },
    { src: g4, alt: "Papagaios coloridos pendurados como decoração", span: "" },
    { src: g3, alt: "Mãos montando um papagaio com bambu e papel colorido", span: "sm:col-span-2" },
  ];
  return (
    <section id="galeria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel color="var(--grape)">Galeria</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Coisa de rua, céu e vento.
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {imgs.map((im, i) => (
            <Reveal key={i} delay={i * 80} className={im.span}>
              <div className="group relative h-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-card">
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pedido / Compra rápida ---------- */

function Pedido() {
  const [pap, setPap] = useState(papagaios[0].id);
  const [lin, setLin] = useState(linhasList[0].id);
  const [kit, setKit] = useState<string>("nenhum");
  const [qtd, setQtd] = useState(1);

  const total = useMemo(() => {
    const p = papagaios.find((x) => x.id === pap)?.price ?? 0;
    const l = linhasList.find((x) => x.id === lin)?.price ?? 0;
    const k = kits.find((x) => x.id === kit)?.price ?? 0;
    return (p + l + k) * qtd;
  }, [pap, lin, kit, qtd]);

  const mensagem = useMemo(() => {
    const partes: string[] = [];
    const p = papagaios.find((x) => x.id === pap);
    const l = linhasList.find((x) => x.id === lin);
    const k = kits.find((x) => x.id === kit);
    if (p) partes.push(p.name);
    if (l) partes.push(l.name);
    if (k) partes.push(k.name);
    const txt = `Oi, quero fazer um pedido no Bonde do Vento. Escolhi: ${partes.join(", ")} (x${qtd}).`;
    return encodeURIComponent(txt);
  }, [pap, lin, kit, qtd]);

  return (
    <section id="comprar" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-sky p-6 shadow-pop sm:p-10">
          <img src={pRoxo} alt="" aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 animate-float-slow opacity-70" />
          <img src={pAmarelo} alt="" aria-hidden className="pointer-events-none absolute bottom-4 left-2 h-20 w-20 animate-float opacity-70 sm:left-10" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel color="var(--pink-pop)">Compra rápida</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Monte seu pedido.
              </h2>
              <p className="mt-3 max-w-md text-graphite/80">
                Escolhe seu papagaio, sua linha e, se quiser, um kit. Finaliza direto no WhatsApp.
              </p>

              <div className="mt-8 hidden gap-3 lg:flex">
                <a
                  href="#papagaios"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-graphite bg-white px-5 py-3 text-sm font-bold text-graphite hover:bg-sun"
                >
                  Ver catálogo completo
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
              <Field label="Papagaio">
                <Select value={pap} onChange={setPap} options={papagaios.map((p) => ({ value: p.id, label: `${p.name} — R$ ${p.price.toFixed(2).replace(".", ",")}` }))} />
              </Field>
              <Field label="Linha">
                <Select value={lin} onChange={setLin} options={linhasList.map((p) => ({ value: p.id, label: `${p.name} — R$ ${p.price.toFixed(2).replace(".", ",")}` }))} />
              </Field>
              <Field label="Kit (opcional)">
                <Select
                  value={kit}
                  onChange={setKit}
                  options={[
                    { value: "nenhum", label: "Sem kit" },
                    ...kits.map((k) => ({ value: k.id, label: `${k.name} — R$ ${k.price.toFixed(2).replace(".", ",")}` })),
                  ]}
                />
              </Field>
              <Field label="Quantidade">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQtd((q) => Math.max(1, q - 1))}
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-graphite text-white transition hover:bg-pink-pop"
                    aria-label="Diminuir"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-display text-2xl font-bold tabular-nums" aria-live="polite">{qtd}</span>
                  <button
                    onClick={() => setQtd((q) => Math.min(20, q + 1))}
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-graphite text-white transition hover:bg-pink-pop"
                    aria-label="Aumentar"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </Field>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-muted px-4 py-3">
                <span className="text-sm font-semibold text-graphite/70">Total estimado</span>
                <span className="font-display text-2xl font-bold text-pink-pop">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <a
                href={`${WHATS}?text=${mensagem}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-5 flex items-center justify-center gap-2 rounded-full bg-leaf px-6 py-4 font-display text-lg font-bold text-graphite shadow-pop transition hover:-translate-y-0.5"
                style={{ background: "var(--leaf)" }}
              >
                <MessageCircle size={20} /> Finalizar pelo WhatsApp
              </a>

              <a
                href="#papagaios"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-graphite bg-white px-6 py-3 text-sm font-bold text-graphite hover:bg-sun lg:hidden"
              >
                Ver catálogo completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-graphite/60">
        {label}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-2xl border-2 border-graphite/15 bg-white px-4 py-3 pr-10 font-medium text-graphite outline-none transition focus:border-pink-pop"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-graphite/60"
      />
    </div>
  );
}

/* ---------- Depoimentos ---------- */

function Depoimentos() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel color="var(--sun)">Depoimentos</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Quem soltou, curtiu.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-full font-display text-lg font-bold text-graphite"
                    style={{ background: d.color }}
                  >
                    {d.name.charAt(0)}
                  </span>
                  <figcaption className="font-display text-base font-bold">{d.name}</figcaption>
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-graphite/80">
                  “{d.text}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionLabel color="var(--sky)">FAQ</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Dúvidas no ar?
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-bold"
                    aria-expanded={isOpen}
                  >
                    {f.q}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-graphite/75">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-graphite text-white">
      {/* Floating kites */}
      <img src={pAmarelo} alt="" aria-hidden className="pointer-events-none absolute right-8 top-8 h-16 w-16 animate-float-slow opacity-80" />
      <img src={pVerde} alt="" aria-hidden className="pointer-events-none absolute left-10 top-20 h-14 w-14 animate-float opacity-70" />
      <img src={pRoxo} alt="" aria-hidden className="pointer-events-none absolute right-24 bottom-16 h-12 w-12 animate-float opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <KiteLogo />
              <span className="font-display text-2xl font-bold">Bonde do Vento</span>
            </div>
            <p className="mt-4 max-w-xs text-white/70">
              Papagaios, linhas e kits pra quem gosta de ver o céu colorido.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/60">
              Naveguinho
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#papagaios" className="hover:text-sun">Papagaios</a></li>
              <li><a href="#kits" className="hover:text-sun">Kits</a></li>
              <li><a href="#seguranca" className="hover:text-sun">Segurança</a></li>
              <li><a href="#galeria" className="hover:text-sun">Galeria</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/60">
              Onde achar a gente
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-pink-pop">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href={WHATS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-leaf" style={{ color: "inherit" }}>
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="#papagaios" className="inline-flex items-center gap-2 hover:text-sun">
                  <ShoppingBag size={16} /> Catálogo
                </a>
              </li>
              <li>
                <a href="#seguranca" className="inline-flex items-center gap-2 hover:text-leaf">
                  <ShieldCheck size={16} /> Segurança
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-lg font-bold">
            <span className="text-sun">Solte alto.</span>{" "}
            <span className="text-leaf">Brinque limpo.</span>{" "}
            <span className="text-pink-pop">Curta o vento.</span>
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Bonde do Vento. Marca fictícia.
          </p>
        </div>
      </div>
    </footer>
  );
}
