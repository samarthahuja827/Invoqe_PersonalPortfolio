
import { useState } from "react";

const skills = [
  ["C++", "Programming"],
  ["Data Structures & Algorithms", "Problem Solving"],
  ["HTML5", "Frontend"],
  ["CSS3", "Frontend"],
  ["JavaScript", "Frontend"],
  ["React.js", "Frontend"],
  ["Tailwind CSS", "Frontend"],
  ["Git & GitHub", "Tools"],
];


const projects = [
  {
    number: "01",
    title: "FocusFlow",
    type: "FRONTEND DEVELOPMENT",
    description: "A student productivity website with an interactive study planner, task tracking and responsive layouts.",
    tech: "React · Tailwind CSS · Vite",
    link: "https://github.com/samarthahuja827/Invoqe_FocusFlow",
    demo: "https://invoqefocusflowresponsivelandingpag.vercel.app/",
  },
  {
    number: "02",
    title: "Student Management System",
    type: "WEB APPLICATION",
    description: "A student record management system with add, edit, delete, search, filtering and local storage.",
    tech: "HTML · CSS · JavaScript",
    link: "https://github.com/samarthahuja827/WD_Week5_SamarthAhuja",
    demo: "https://samarthahuja827.github.io/WD_Week5_SamarthAhuja/",
  },
  {
    number: "03",
    title: "TechZone",
    type: "WEB DESIGN",
    description: "A frontend mini project created to practise website structure, styling and responsive layouts.",
    tech: "HTML · CSS",
    link: "https://github.com/samarthahuja827/WD_Week6_SamarthAhuja",
    demo: "https://samarthahuja827.github.io/WD_Week6_SamarthAhuja/",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#111310] text-[#f2f2e9] selection:bg-[#c5f467] selection:text-black">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111310]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-sm font-bold tracking-[0.25em]">
            PORTFOLIO<span className="text-[#c5f467]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(([name, href]) => (
              <a key={name} href={href} className="text-sm text-white/60 transition hover:text-[#c5f467]">
                {name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden border border-[#c5f467] px-5 py-2.5 text-sm font-semibold text-[#c5f467] transition hover:bg-[#c5f467] hover:text-black md:block">
            Let's connect ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#111310] px-6 py-6 md:hidden">
            {navLinks.map(([name, href]) => (
              <a key={name} href={href} onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-[#c5f467]">
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
          <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-[#c5f467]/10 blur-[120px]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="mb-8 flex items-center gap-3 text-sm tracking-widest text-[#c5f467]">
                <span className="h-px w-10 bg-[#c5f467]" />
                COMPUTER SCIENCE STUDENT · DEVELOPER IN PROGRESS
              </p>

              <h1 className="text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                Hi, I'm
                <span className="block text-[#c5f467]">Samarth</span>
                <span className="block">Ahuja.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
                I enjoy solving problems, exploring technology and turning ideas into practical digital experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="bg-[#c5f467] px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-[#d5ff82]">
                  Explore my work ↗
                </a>
                <a href="#about" className="border border-white/20 px-7 py-4 font-semibold transition hover:border-[#c5f467] hover:text-[#c5f467]">
                  More about me
                </a>
              </div>

              <div className="mt-14 flex gap-8 text-sm">
                <a href="https://github.com/samarthahuja827" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-[#c5f467]">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/samarth-ahuja-996230325/" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-[#c5f467]">LinkedIn ↗</a>
              </div>
            </div>

            <div className="border border-white/10 bg-[#191c17] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-white/40">A QUICK INTRO</span>
                <span className="h-3 w-3 rounded-full bg-[#c5f467]" />
              </div>

              <div className="my-10 flex h-28 w-28 items-center justify-center border border-[#c5f467]/40 text-5xl font-black text-[#c5f467]">
                SA
              </div>

              <h2 className="text-3xl font-bold">Samarth Ahuja</h2>
              <p className="mt-2 text-white/45">B.Tech - AIML</p>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-7 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-white/40">College & Institute</span>
                  <span>VIPS, GGSIPU</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-white/40">Year</span>
                  <span>3rd Year</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-white/40">CGPA</span>
                  <span>8.9</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-white/40">Focus</span>
                  <span>DSA , Web Dev</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-white/10 bg-[#191c17] px-6 py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.2em] text-[#c5f467]">01 / ABOUT ME</p>
              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Curious mind.
                <span className="block text-white/40">Practical approach.</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/55">
              <p>
                I'm pursuing my B.Tech in Computer Science at Vivekananda Institute of Professional Studies (GGSIPU).
              </p>
              <p>
                I enjoy working through Data Structures and Algorithms and understanding how software and websites work behind the scenes.
              </p>
              <p>
                Currently, I'm strengthening my programming fundamentals and building frontend projects to apply what I learn.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm tracking-[0.2em] text-[#c5f467]">02 / MY TOOLKIT</p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Skills & technologies<span className="text-[#c5f467]">.</span></h2>
            <p className="mt-4 text-white/45">Tools and technologies I'm learning and working with.</p>

            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(([name, type], i) => (
                <div key={name} className="bg-[#111310] p-7 transition hover:bg-[#20251a]">
                  <span className="text-sm text-[#c5f467]">0{i + 1}</span>
                  <h3 className="mt-6 text-lg font-bold">{name}</h3>
                  <p className="mt-2 text-sm text-white/40">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 bg-[#191c17] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm tracking-[0.2em] text-[#c5f467]">03 / SELECTED WORK</p>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
              <h2 className="text-4xl font-bold sm:text-5xl">Projects I've built<span className="text-[#c5f467]">.</span></h2>
              <a href="https://github.com/samarthahuja827" target="_blank" rel="noreferrer" className="text-sm text-[#c5f467] hover:underline">View GitHub ↗</a>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.number} className="group flex min-h-80 flex-col justify-between border border-white/10 bg-[#111310] p-8 transition hover:-translate-y-1 hover:border-[#c5f467]/50 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#c5f467]">{project.number} /</span>
                      <span className="text-xs tracking-widest text-white/35">{project.type}</span>
                    </div>
                    <h3 className="mt-10 text-3xl font-bold transition group-hover:text-[#c5f467]">{project.title}</h3>
                    <p className="mt-5 max-w-lg leading-7 text-white/50">{project.description}</p>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <span className="text-xs text-white/40">{project.tech}</span>
                    <div className="flex gap-5">
  {project.demo && (
    <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#c5f467]">
      Live Demo ↗
    </a>
  )}
  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white/60 hover:text-[#c5f467]">
    GitHub ↗
  </a>
</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="scroll-mt-24 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm tracking-[0.2em] text-[#c5f467]">04 / MY JOURNEY</p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Learning by building<span className="text-[#c5f467]">.</span></h2>

            <div className="mt-14 max-w-3xl border-l border-[#c5f467]/50 pl-8">
              <p className="text-sm text-[#c5f467]">2026 · PROJECT EXPERIENCE</p>
              <h3 className="mt-4 text-2xl font-bold">Frontend Development</h3>
              <p className="mt-2 text-white/40">Invoqe Internship Program</p>
              <p className="mt-5 leading-8 text-white/55">
                Working on practical frontend development tasks using React, Tailwind CSS, JavaScript and Vite, including a student productivity website and personal portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="border-y border-white/10 bg-[#191c17] px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
            <div>
              <p className="text-sm tracking-[0.2em] text-[#c5f467]">05 / RESUME</p>
              <h2 className="mt-4 text-3xl font-bold">Want to know more?</h2>
              <p className="mt-3 text-white/45">Get in touch to connect and learn more about my work.</p>
            </div>
            <a href="#contact" className="border border-[#c5f467] px-7 py-4 font-semibold text-[#c5f467] transition hover:bg-[#c5f467] hover:text-black">
              Request my resume ↗
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm tracking-[0.2em] text-[#c5f467]">06 / CONTACT</p>
            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
              Have an idea?
              <span className="block text-[#c5f467]">Let's connect.</span>
            </h2>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <a href="https://github.com/samarthahuja827" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-[#c5f467]">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/samarth-ahuja-996230325/" target="_blank" rel="noreferrer" className="text-white/60 transition hover:text-[#c5f467]">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-sm text-white/40">
          <span>Designed & built by Samarth Ahuja.</span>
          <span>© {new Date().getFullYear()} · Keep learning.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
