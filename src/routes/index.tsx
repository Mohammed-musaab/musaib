import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Github, Linkedin, FileDown, Mail, Phone, Terminal, Shield, Cloud, Database,
  Network, Lock, ArrowUpRight, ChevronRight, Cpu, Activity, Radar, Zap, Eye, Fingerprint,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Musaib — Cybersecurity & Cloud Engineer" },
      { name: "description", content: "CS&E undergraduate (VTU '27). Cybersecurity, cloud, and data-science portfolio. Analyzing vulnerabilities. Securing systems." },
      { property: "og:title", content: "Mohammed Musaib — Cybersecurity Portfolio" },
      { property: "og:description", content: "Catching system loopholes before data breaches happen." },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/mohammed-musab/";
const GITHUB = "https://github.com/Mohammed-musaab";
const EMAIL = "Mohammedmusaib532005@gmail.com";

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-foreground">musaib</span>
          <span className="text-primary">@</span>
          <span className="text-muted-foreground">secure:~$</span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs md:flex">
          <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">./home</a>
          <a href="#missions" className="text-muted-foreground hover:text-primary transition-colors">./missions</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">./contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-3 py-1 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-signal">Available</span>
          </div>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

const ROLES = [
  "Security Engineer",
  "Vulnerability Analyst",
  "Cloud Defender",
  "Data Scientist",
];

const THREATS = [
  "CVE-2024-3094 patched",
  "TLS handshake verified",
  "Port 22 :: SSH locked",
  "WAF rule #482 deployed",
  "MITRE T1110 detected → blocked",
  "Cert chain validated",
  "Anomaly score 0.02 ✓",
  "Zero-trust policy enforced",
];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function Hero() {
  const role = useTypewriter(ROLES);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="home" ref={ref} onMouseMove={handleMove} className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 spotlight" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="rise">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/5 px-2.5 py-1 text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" />
                CONNECTION_SECURE
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-muted-foreground">
                <Shield className="h-3 w-3 text-primary" /> CYBERSEC · CLOUD · DATA SCI
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-2.5 py-1 text-muted-foreground">
                <Fingerprint className="h-3 w-3 text-primary" /> ID: MM-0532
              </span>
            </div>

            <h1 className="mt-6 text-balance font-mono text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem]">
              <span className="block">Analyzing <span className="text-primary">vulnerabilities.</span></span>
              <span className="block">Securing <span className="text-primary">systems.</span></span>
              <span className="block">
                Preventing{" "}
                <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  breaches
                </span>
                <span className="text-primary">.</span>
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-2 font-mono text-sm">
              <span className="text-primary">{">"}</span>
              <span className="text-muted-foreground">whoami →</span>
              <span className="text-foreground">{role}</span>
              <span className="inline-block h-4 w-1.5 bg-primary blink" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Computer Science &amp; Engineering student at Visvesvaraya Technological University
              <span className="text-foreground"> (Graduating 2027)</span> focused on catching system
              loopholes before data breaches happen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                <a href="https://drive.google.com/file/d/19OQa5LRFmItT2VH3jRfodobMz1t0GS89/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <FileDown className="h-4 w-4" /> View Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group border-border bg-surface/40 hover:bg-surface hover:border-primary/50 font-mono">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 font-mono">
              <Stat label="UPTIME" value="100%" />
              <Stat label="BREACHES" value="0" />
              <Stat label="GRAD" value="VTU '27" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm space-y-4">
            <RadarCard />
            <IdCard />
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-lg border border-border bg-surface/40 py-2">
          <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full items-center gap-2 bg-gradient-to-r from-background via-background to-transparent pl-4 pr-8 font-mono text-[10px] uppercase tracking-wider text-signal">
            <Zap className="h-3 w-3" /> live_feed
          </div>
          <div className="flex w-max ticker font-mono text-xs text-muted-foreground">
            {[...THREATS, ...THREATS].map((t, i) => (
              <span key={i} className="flex items-center gap-2 px-6">
                <span className="h-1 w-1 rounded-full bg-primary" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RadarCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Radar className="h-3 w-3 text-primary" /> threat_radar.sh
        </span>
        <span className="flex items-center gap-1 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" /> SCANNING
        </span>
      </div>

      <div className="relative mx-auto mt-4 aspect-square w-full max-w-[220px]">
        {[25, 50, 75, 100].map((n) => (
          <div
            key={n}
            className="absolute inset-0 m-auto rounded-full border border-primary/20"
            style={{ width: `${n}%`, height: `${n}%` }}
          />
        ))}
        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/15" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-primary/15" />
        <div className="absolute inset-0 orbit">
          <div
            className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left"
            style={{
              background:
                "conic-gradient(from 0deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 70deg)",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
        </div>
        <span className="absolute left-[28%] top-[35%] h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px] shadow-signal" />
        <span className="absolute left-[68%] top-[58%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary" />
        <span className="absolute left-[44%] top-[72%] h-1 w-1 rounded-full bg-signal" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px] shadow-primary" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <RadarStat label="NODES" value="128" />
        <RadarStat label="ALERTS" value="0" tone="signal" />
        <RadarStat label="LATENCY" value="12ms" />
      </div>
    </div>
  );
}

function RadarStat({ label, value, tone }: { label: string; value: string; tone?: "signal" }) {
  return (
    <div className="rounded border border-border bg-background/60 px-2 py-1.5">
      <div className="text-muted-foreground">{label}</div>
      <div className={tone === "signal" ? "text-signal" : "text-primary"}>{value}</div>
    </div>
  );
}

function IdCard() {
  return (
    <div className="relative float-y">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/60 via-primary/10 to-transparent blur-md" />
      <div className="relative scanline overflow-hidden rounded-2xl border border-primary/30 bg-surface p-4 glow-purple">
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Eye className="h-3 w-3 text-primary" /> id_card.enc
          </span>
          <span className="flex items-center gap-1 text-signal">
            <Lock className="h-3 w-3" /> AES-256
          </span>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-background">
          <div className="absolute inset-0 noise opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background" />
          <div className="relative flex h-full items-center gap-4 px-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 font-mono text-xl font-bold text-primary">
              MM
            </div>
            <div className="font-mono">
              <p className="text-sm text-foreground">Mohammed Musaib</p>
              <p className="text-[10px] text-muted-foreground">CS&amp;E · VTU · 2027</p>
              <p className="mt-1 text-[10px] text-primary">CLEARANCE LVL_04</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg text-foreground">{value}</div>
    </div>
  );
}

function About() {
  const webSkills = ["HTML", "CSS", "JavaScript", "PHP"];
  const secSkills = ["Wireshark", "Core Networking", "Network Security Auditing"];
  const focusAreas = [
    { icon: Shield, label: "Cybersecurity" },
    { icon: Network, label: "Networking" },
    { icon: Database, label: "Data Science" },
    { icon: Cloud, label: "Cloud Security" },
  ];

  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel index="01" title="Core Focus & Technical Arsenal" />

        <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-foreground">
              Driven by a deep interest in <span className="text-primary">cybersecurity</span>,
              networking, data science, and cloud security. I treat every system as a puzzle —
              the kind where the missing piece is usually the loophole no one bothered to look for.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Optimized and ready for roles in <span className="text-foreground">cybersecurity engineering</span>,
              defensive security, and security analysis. Building, breaking, and rebuilding
              the systems that handle the data we trust them with.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {focusAreas.map((f) => (
                <div key={f.label} className="rounded-lg border border-border bg-background/60 p-4 transition-colors hover:border-primary/40">
                  <f.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-mono text-xs text-foreground">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl border border-border bg-background/60 p-5 font-mono text-xs">
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary" />
                <span>arsenal.json</span>
              </div>

              <SkillGroup title="web_fundamentals" skills={webSkills} />
              <div className="my-4 h-px bg-border" />
              <SkillGroup title="security_infrastructure" skills={secSkills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <div className="mb-3 text-muted-foreground">
        <span className="text-primary">$</span> ls ./{title}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span key={s} className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-[11px] text-foreground">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Missions() {
  const projects = [
    {
      id: "001",
      title: "Educational Password Cracker",
      category: "Cybersecurity · Brute Force Awareness Tool",
      description:
        "An educational tool engineered to simulate brute-force attacks to analyze and demonstrate password vulnerabilities, raising awareness on secure credential mechanics.",
      tags: ["Python", "Security Simulation", "MITRE ATT&CK"],
      icon: Lock,
    },
    {
      id: "002",
      title: "Diabetes Predictor Engine",
      category: "Data Science · Machine Learning",
      description:
        "A predictive analysis system leveraging data science workflows to evaluate user health metrics and forecast diabetes risks accurately.",
      tags: ["Python", "K-Nearest Neighbors (KNN)", "Data Science"],
      icon: Activity,
    },
  ];

  return (
    <section id="missions" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel index="02" title="Key Missions / Live Project Feed" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-primary/40 hover:bg-surface">
              <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background" />
                <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                  <span className="rounded border border-border bg-background/80 px-2 py-0.5">MISSION_{p.id}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-muted-foreground">
                  <div className="space-y-1 opacity-80">
                    <div>{"$ ./run --mission=" + p.id}</div>
                    <div className="text-signal">{"[ok] system initialized"}</div>
                  </div>
                </div>
                <div className="absolute right-4 top-4">
                  <p.icon className="h-16 w-16 text-primary/30" />
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary">{p.category}</div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1 font-mono text-xs text-primary opacity-60 transition-opacity group-hover:opacity-100">
                  <span>view_logs</span>
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 font-mono">
      <span className="text-xs text-primary">[{index}]</span>
      <h2 className="text-2xl text-foreground sm:text-3xl">{title}</h2>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel index="03" title="Establish Secure Link" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-surface to-surface p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-xs text-primary">// inquiry.handshake</div>
              <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Interested in working together?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Open to internships, security research collaborations, and full-time
                opportunities starting 2027.
              </p>
              <div className="mt-6">
                <ContactDialog
                  trigger={
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                      <Terminal className="h-4 w-4" /> Open Secure Channel
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 p-8 md:p-10">
            <div className="font-mono text-xs text-muted-foreground">// direct_channels</div>
            <ul className="mt-5 space-y-4 font-mono text-sm">
              <ContactLine icon={Mail} label="email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactLine icon={Phone} label="phone" value="+91 · available on request" href={`mailto:${EMAIL}?subject=Phone%20request`} />
              <ContactLine icon={Linkedin} label="linkedin" value="/in/mohammed-musaib" href={LINKEDIN} />
              <ContactLine icon={Github} label="github" value="@mohammedmusaib" href={GITHUB} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <li>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
         className="group flex items-center justify-between gap-4 rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-primary/5">
        <div className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-primary" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
            <div className="text-foreground">{value}</div>
          </div>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </a>
    </li>
  );
}

function Footer() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toUTCString().split(" ")[4] + " UTC");
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-[11px] text-muted-foreground sm:flex-row">
        <div>© 2026 Mohammed Musaib · All systems nominal</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" />
            sys.clock {time}
          </span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Missions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
