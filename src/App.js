import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const oncologyExperience = [
  {
    place: "Tata Memorial Hospital, Mumbai",
    period: "Aug 2025 – Sept 2025",
    metric: "30+",
    title: "Advanced Head & Neck Oncology Training",
    details:
      "Assisted in advanced head and neck oncologic surgeries with exposure to complex case planning, surgical oncology techniques, and multidisciplinary care.",
  },
  {
    place: "Omega Cancer Hospital, Hyderabad",
    period: "April 2024",
    metric: "10+",
    title: "Focused Oncology Case Exposure",
    details:
      "Assisted in head and neck oncology cases and strengthened peri-operative understanding across tertiary cancer workflows.",
  },
  {
    place: "MNJ Government Cancer Hospital, Hyderabad",
    period: "Nov 2021 – Dec 2021",
    metric: "30+",
    title: "Cancer Centre Surgical Exposure",
    details:
      "Assisted in oncology procedures during postgraduate training with exposure to tumor resections, neck dissections, and tumor-board oriented care.",
  },
];

const clinicalRoles = [
  {
    role: "Assistant Professor – ENT",
    institution: "MNR Medical College & Hospital, Sangareddy",
    period: "Oct 2024 – Present",
    points: [
      "Teaching undergraduate medical students in ENT",
      "Mentoring clinical and surgical training",
      "Academic activities, case discussions, and research work",
    ],
  },
  {
    role: "Senior Resident – ENT",
    institution: "MNR Medical College & Hospital, Sangareddy",
    period: "Sept 2023 – Aug 2024",
    points: [
      "Managed high-volume ENT OPD with 50–75 patients daily",
      "Independently performed basic ENT surgeries",
      "Assisted in 70+ ENT surgeries including FESS, tympanoplasty, septoplasty, tonsillectomy, adenoidectomy, and thyroidectomy",
    ],
  },
  {
    role: "Junior Consultant – ENT",
    institution: "Dr. Rao’s ENT Super Speciality Hospital, Hyderabad",
    period: "Evening Duties",
    points: [
      "Managed post-operative care and emergency ENT cases",
      "Assisted in parotidectomy, thyroidectomy, and rhinoplasty",
      "Handled high patient load in a super-speciality ENT setting",
    ],
  },
];

const skills = [
  {
    group: "ENT Surgical Procedures",
    items: [
      "Tympanoplasty",
      "FESS",
      "Septoplasty",
      "Tonsillectomy",
      "Adenoidectomy",
      "Thyroidectomy",
      "Rhinoplasty exposure",
      "Parotidectomy exposure",
    ],
  },
  {
    group: "Head & Neck Oncology",
    items: [
      "Neck dissection exposure",
      "Tumor resection exposure",
      "Oncologic case assistance",
      "Multidisciplinary tumor-board exposure",
      "Cancer centre workflows",
      "Peri-operative oncology care",
    ],
  },
  {
    group: "Diagnostic & OPD Skills",
    items: [
      "Nasal endoscopy",
      "Video laryngoscopy",
      "Ear microsuction",
      "Emergency ENT care",
      "High-volume OPD management",
      "Clinical decision-making",
    ],
  },
  {
    group: "Academic & Professional",
    items: [
      "Undergraduate teaching",
      "Clinical mentorship",
      "Research writing",
      "Case presentation",
      "Patient communication",
      "Team-based care",
    ],
  },
];

const education = [
  "MS ENT — MNR Medical College & Hospital, Sangareddy, 2020–2023",
  "MBBS — Dr. VRK Women’s Medical College, Hyderabad, 2012–2017",
  "Internship — Dr. VRK Women’s Medical College, Hyderabad, 2017–2018",
  "ACLS & BCLS certified",
];

const navItems = ["Profile", "Oncology", "Experience", "Skills", "Research", "Contact"];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-glass py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#profile" className="flex items-center gap-3 text-white">
          <span className="logo-orb">✦</span>
          <span className="font-bold tracking-wide">Dr. Sai Vaishnavi</span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-pill">
              {item}
            </a>
          ))}
        </div>
        <a href="mailto:dr.vemurisaivaishnavi@gmail.com" className="neon-button hidden sm:inline-flex">
          Book / Contact
        </a>
      </div>
    </nav>
  );
}

function StatCard({ value, label, sub }) {
  return (
    <div className="glass-card p-5 reveal">
      <div className="text-3xl font-black text-cyan-300 sm:text-4xl">{value}</div>
      <div className="mt-2 font-semibold text-white">{label}</div>
      <p className="mt-1 text-sm text-blue-100/75">{sub}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="reveal mx-auto mb-10 max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-blue-100/80 sm:text-lg">{children}</p>}
    </div>
  );
}

function App() {
  useRevealOnScroll();

  const heroChips = useMemo(
    () => ["MS ENT", "Assistant Professor", "Head & Neck Oncology", "Surgical ENT", "Academic Clinician"],
    []
  );

  return (
    <div className="medical-site min-h-screen overflow-hidden text-blue-50">
      <FloatingNav />

      <section id="profile" className="relative min-h-screen px-5 pt-32 sm:px-8 lg:pt-36">
        <div className="neon-grid" />
        <div className="pulse-orb orb-one" />
        <div className="pulse-orb orb-two" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal visible">
            <div className="mb-8 flex flex-wrap gap-3">
              {heroChips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
              Precision ENT care with a focus on <span className="text-neon">Head & Neck Oncology.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100/85 sm:text-xl">
              Dr. Y Sai Vaishnavi is an Assistant Professor in ENT with structured clinical training,
              high-volume outpatient experience, academic teaching exposure, and focused cancer-centre
              training across Tata Memorial Hospital, Omega Cancer Hospital, and MNJ Government Cancer Hospital.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#oncology" className="neon-button justify-center">
                Explore Profile
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="ghost-button justify-center">
                Download CV
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-100/70">
              ENT Surgeon • Head & Neck Oncology Interest • Academic Teaching • Clinical Research
            </p>
          </div>

          <div className="reveal visible relative mx-auto w-full max-w-xl">
            <div className="profile-frame">
              <div className="profile-halo" />
              <img src="/profile.jpeg" alt="Dr. Y Sai Vaishnavi" className="profile-photo" />
              <div className="profile-card bottom-8 left-4 sm:left-8">
                <span className="text-cyan-300">70+</span>
                <p>Head & neck oncologic surgeries assisted</p>
              </div>
              <div className="profile-card right-4 top-8 sm:right-8">
                <span className="text-cyan-300">50–75</span>
                <p>ENT OPD patients managed daily as Senior Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          <StatCard value="70+" label="Oncology Surgeries" sub="Assisted across tertiary cancer centres" />
          <StatCard value="70+" label="ENT Surgeries" sub="Assisted as Senior Resident" />
          <StatCard value="50–75" label="Daily OPD Load" sub="High-volume clinical management" />
          <StatCard value="2026" label="FHNO Focus" sub="Head & Neck Oncology career pathway" />
        </div>
      </section>

      <section id="oncology" className="px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Oncology Focus" title="Cancer-centre exposure with surgical discipline">
          Focused interest in head and neck oncologic surgery, with exposure to neck dissections,
          tumor resections, and multidisciplinary tumor-board discussions.
        </SectionHeader>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {oncologyExperience.map((item, index) => (
            <article key={item.place} className="feature-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.period}</p>
                  <h3 className="mt-4 text-2xl font-black text-white">{item.place}</h3>
                </div>
                <div className="metric-badge">{item.metric}</div>
              </div>
              <h4 className="mt-6 text-lg font-bold text-blue-50">{item.title}</h4>
              <p className="mt-3 leading-7 text-blue-100/75">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Clinical Journey" title="A clinician, teacher, and surgical learner">
          Built through MS ENT training, senior residency, consultant duties, assistant professorship,
          and structured oncology exposure.
        </SectionHeader>

        <div className="mx-auto max-w-5xl">
          <div className="timeline">
            {clinicalRoles.map((role, index) => (
              <div key={role.role} className="timeline-item reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white">{role.role}</h3>
                      <p className="mt-1 text-cyan-200">{role.institution}</p>
                    </div>
                    <span className="rounded-full border border-cyan-300/40 px-4 py-1 text-sm text-cyan-100">{role.period}</span>
                  </div>
                  <ul className="mt-5 grid gap-3 text-blue-100/78">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 text-cyan-300">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Skillset" title="Complete MS ENT profile with oncology direction">
          Surgical, diagnostic, academic, emergency-care, and multidisciplinary capabilities relevant to a modern ENT surgeon.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={skill.group} className="skill-panel reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3 className="text-2xl font-black text-white">{skill.group}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Research & Academics" title="Evidence-oriented clinical profile">
          Publications, thesis work, teaching, case presentations, and ongoing manuscript development.
        </SectionHeader>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="feature-card reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Publication</p>
            <h3 className="mt-4 text-2xl font-black text-white">
              Assessment of Fungal Diseases in Sinonasal Polyposis and Chronic Rhinosinusitis Undergoing FESS
            </h3>
            <p className="mt-4 leading-7 text-blue-100/78">
              International Journal of Medicine and Public Health, 2025. Co-author on a study evaluating prevalence,
              microbiological profile, and clinical correlation of fungal rhinosinusitis in patients undergoing FESS.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-5">
              <p className="font-bold text-white">Postgraduate Thesis</p>
              <p className="mt-2 text-blue-100/78">
                Comparative Study of Endoscopic Endonasal Dacryocystorhinostomy with and without Prolene Stenting.
              </p>
            </div>
          </div>
          <div className="feature-card reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Education</p>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item} className="education-row">
                  <span>✚</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/35 bg-gradient-to-br from-blue-950/85 via-blue-900/80 to-cyan-900/50 p-8 shadow-[0_0_45px_rgba(34,211,238,0.25)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="reveal">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">Connect for academic, clinical, or oncology training opportunities.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100/78">
                Assistant Professor in ENT with interest in Head & Neck Oncology, surgical skill advancement,
                clinical research, and academic mentorship.
              </p>
            </div>
            <div className="reveal grid gap-4">
              <a href="tel:+919010974882" className="contact-link">+91-90109-74882</a>
              <a href="mailto:dr.vemurisaivaishnavi@gmail.com" className="contact-link">dr.vemurisaivaishnavi@gmail.com</a>
              <a href="mailto:vemurimom22@yahoo.com" className="contact-link">vemurimom22@yahoo.com</a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="neon-button justify-center">View Full CV</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-300/20 px-5 py-8 text-center text-sm text-blue-100/60">
        © 2026 Dr. Y Sai Vaishnavi • MS ENT • Head & Neck Oncology Interest
      </footer>
    </div>
  );
}

export default App;
