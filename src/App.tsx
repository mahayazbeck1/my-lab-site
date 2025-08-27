import { useState } from "react";
import { motion } from "framer-motion";

// Simple in-file components to avoid external deps
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-6 md:px-10 py-14">
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-semibold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
    )}
    <div className="mt-6">{children}</div>
  </section>
);

const NavLink = ({ href, label }: any) => (
  <a href={href} className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition">
    {label}
  </a>
);

const Tag = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs md:text-sm leading-none">
    {children}
  </span>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl border p-5 shadow-sm hover:shadow md:p-6 transition bg-white/80 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </div>
);

const FooterLink = ({ href, children }: any) => (
  <a href={href} className="underline-offset-4 hover:underline">{children}</a>
);

export default function LabSite() {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900 text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <a href="#top" className="flex items-center gap-3">
            <div className="size-8 rounded-xl border flex items-center justify-center font-bold">MY</div>
            <div className="leading-tight">
              <div className="font-semibold">[LAB NAME]</div>
              <div className="text-xs text-gray-500">Lebanese American University</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <NavLink href="#about" label="About" />
            <NavLink href="#research" label="Research" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#publications" label="Publications" />
            <NavLink href="#people" label="People" />
            <NavLink href="#teaching" label="Teaching" />
            <NavLink href="#partners" label="Partners" />
            <NavLink href="#contact" label="Contact" />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 h-[40rem] w-[40rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-200 via-sky-200 to-teal-200 dark:from-indigo-900/40 dark:via-sky-900/30 dark:to-teal-900/20"/>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            [LAB NAME]
          </motion.h1>
          <p className="mt-4 md:text-xl max-w-3xl text-gray-700 dark:text-gray-300">
            Simulation, modeling, and decision intelligence for cyber‑physical and socio‑economic systems. We study resilience under uncertainty and design data‑driven solutions with real‑world impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>Simulation</Tag>
            <Tag>Cyber‑Physical Systems</Tag>
            <Tag>Supply & Shock Modeling</Tag>
            <Tag>Probabilistic Methods</Tag>
            <Tag>Optimization</Tag>
            <Tag>Human‑Centered Systems</Tag>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About the Lab" subtitle="Founded by Dr. Maha I. Yazbeck, Assistant Professor, School of Engineering, LAU (Bassil 206).">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-lg">Mission</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Advance resilient, human‑centered engineering through rigorous modeling and high‑fidelity simulation. We collaborate with industry, NGOs, and public institutions to translate methods into practice.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg">Focus Areas</h3>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Simulation of cyber‑physical systems (discrete‑event, agent‑based, system dynamics)</li>
              <li>Probabilistic & mathematical modeling of supply shocks and disruptions</li>
              <li>Operations analytics, optimization, and decision support</li>
              <li>Ergonomics & human factors in complex systems</li>
              <li>ML for forecasting, anomaly detection, and policy evaluation</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg">Open Positions</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">We welcome motivated undergraduate and graduate students. Opportunities span research assistantships, capstone mentorship, and co‑advised theses. Email your CV and a short statement of interest.</p>
          </Card>
        </div>
      </Section>

      {/* Research */}
      <Section id="research" title="Research Themes">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Resilient Supply Networks",
              text:
                "Stochastic models and Monte Carlo simulation to quantify shock propagation, recovery policies, and investment under risk.",
            },
            {
              title: "Smart & Safe CPS",
              text:
                "Digital twins and runtime monitoring for cyber‑physical systems; hybrid modeling (discrete/continuous) and verification.",
            },
            {
              title: "Human‑Centered Systems",
              text:
                "Ergonomic assessment, workload modeling, and interface design to reduce error and improve performance.",
            },
            {
              title: "AI for Policy & Planning",
              text:
                "Causal inference, demand forecasting, and optimization‑in‑the‑loop ML for infrastructure and health systems.",
            },
          ].map((r) => (
            <Card key={r.title}>
              <h3 className="font-semibold text-lg">{r.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{r.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Selected Projects" subtitle="Replace these with your current work.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <div className="text-sm text-gray-500">2025</div>
              <h3 className="font-semibold mt-1">Project Title {i}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">One‑line description of the problem, the methods used, and why it matters. Add sponsors and collaborators.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <Tag>Agent‑Based</Tag>
                <Tag>Optimization</Tag>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications & Outputs" subtitle="Add your papers, datasets, software, and preprints.">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h4 className="font-medium">Author, M. I.; Coauthor, A. (Year). Paper title. <i>Journal</i>.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Brief 1‑sentence impact summary; link to PDF or DOI.</p>
                </div>
                <div className="flex gap-2">
                  <a className="px-3 py-1.5 rounded-xl border hover:bg-black/5 dark:hover:bg-white/10 text-sm" href="#">PDF</a>
                  <a className="px-3 py-1.5 rounded-xl border hover:bg-black/5 dark:hover:bg-white/10 text-sm" href="#">BibTeX</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* People */}
      <Section id="people" title="People">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold">Director</h3>
            <p className="mt-1">Dr. Maha I. Yazbeck</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Assistant Professor, Industrial & Systems Engineering, LAU</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Students</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Add names, programs, and roles.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Alumni & Collaborators</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Add universities, labs, and industry partners.</p>
          </Card>
        </div>
      </Section>

      {/* Teaching */}
      <Section id="teaching" title="Teaching">
        <div className="space-y-4">
          <Card>
            <h4 className="font-semibold">INE 450 — Simulation</h4>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Syllabus, projects, and resources for discrete‑event, system dynamics, and agent‑based modeling.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Other Courses</h4>
            <p className="mt-1 text-gray-700 dark:text-gray-300">Add course pages and materials as needed.</p>
          </Card>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners" title="Partners & Sponsors">
        <div className="grid md:grid-cols-3 gap-6">
          {["Industry", "Government/NGO", "Academic"].map((p) => (
            <Card key={p}>
              <h3 className="font-semibold">{p}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300">Logo wall / short blurbs about joint projects and funding calls.</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold">Find Us</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">School of Engineering, Lebanese American University (LAU)<br/>Office: Bassil 206<br/>Office Hours: MWF 14:00–15:00 or by appointment</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Get in Touch</h3>
            <p className="mt-2"><a className="underline underline-offset-4" href="mailto:maha.yazbeck@lau.edu.lb">maha.yazbeck@lau.edu.lb</a></p>
          </Card>
        </div>
      </Section>

      <footer className="border-t mt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>© {year} [LAB NAME] — LAU</div>
            <div className="flex gap-4">
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#people">Join</FooterLink>
              <FooterLink href="#publications">Publications</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
