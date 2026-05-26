import { memo } from "react";
import { SKILLS, EXPERIENCE, ACHIEVEMENTS, CERTIFICATIONS } from "../constants/data";
import { Icon } from "../components/icons/Icons";
import { FadeIn } from "../components/ui/FadeIn";
import { Rule } from "../components/ui/Rule";
import { Tag } from "../components/ui/Tag";
import { Chip } from "../components/ui/Chip";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { SkillRing } from "../components/about/SkillRing";

const ABOUT_SECTIONS = [
  { heading: "Background",         text: "I'm a Full Stack Developer and Frontend specialist from Chittorgarh, Rajasthan, India, with a deep interest in building high-performance, AI-driven applications and mobile apps. I started with web foundations (JavaScript, CSS), matured through full-stack systems, and currently build production AI agent architectures, cross-platform apps, and scalable web platforms." },
  { heading: "What I'm doing now", text: "Currently building software systems, shipping apps to the web, Play Store, and App Store, and automating deployment pipelines. I enjoy integrating LLMs and designing clean, responsive user experiences." },
  { heading: "How I build",        text: "I believe in shipping fast, iterating based on real usage, and writing code that's easy to maintain. I think about performance, responsiveness, and developer experience from day one — not as afterthoughts." },
];

export const AboutPage = memo(() => (
  <main style={{ paddingTop: "108px", minHeight: "100vh", paddingBottom: "96px" }}>
    <div className="container-sm">
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", padding: "22px 24px", borderRadius: "var(--r-lg)", background: "var(--bg-subtle)", border: "1px solid var(--border)", marginBottom: "40px", flexWrap: "wrap" }}>
          <div style={{ width: "52px", height: "52px", flexShrink: 0, borderRadius: "13px", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 600, fontSize: "15px", letterSpacing: "-0.02em" }}>Pratap Singh Sisodiya</p>
            <p style={{ fontSize: "13px", color: "var(--text-2)", marginTop: "2px" }}>Frontend Developer · Full Stack Developer · Chittorgarh, Rajasthan, India</p>
          </div>
          <Tag accent="#16a34a"><Icon.Circle fill="#16a34a" /> Open to work</Tag>
        </div>
      </FadeIn>

      {ABOUT_SECTIONS.map(({ heading, text }, i) => (
        <FadeIn key={heading} delay={i * 0.05}>
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "10px" }}>{heading}</h2>
            <p style={{ fontSize: "14.5px", color: "var(--text-2)", lineHeight: 1.75 }}>{text}</p>
          </div>
          <Rule />
          <div style={{ marginBottom: "28px" }} />
        </FadeIn>
      ))}

      <FadeIn>
        <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "18px" }}>Technical skills</h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "10px", marginBottom: "48px" }}>
        {SKILLS.map((s, i) => <SkillRing key={s.name} name={s.name} pct={s.pct} delay={i * 0.05} />)}
      </div>

      <Rule />
      <div style={{ marginBottom: "36px" }} />

      <FadeIn>
        <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "20px" }}>Experience</h2>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.06}>
            <SpotlightCard style={{ padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "5px", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>{exp.role}</p>
                  {exp.current && <Tag accent="#16a34a"><Icon.Circle fill="#16a34a" /> Active</Tag>}
                </div>
                <span style={{ fontSize: "11.5px", color: "var(--text-3)", fontFamily: "'SF Mono','Fira Code',monospace" }}>{exp.period}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#7c3aed", fontWeight: 500, marginBottom: "10px" }}>{exp.company}</p>
              <p style={{ fontSize: "13.5px", color: "var(--text-2)", lineHeight: 1.65, marginBottom: "12px" }}>{exp.desc}</p>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {exp.skills.map(sk => <Chip key={sk}>{sk}</Chip>)}
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>

      <Rule />
      <div style={{ marginBottom: "36px" }} />

      <FadeIn>
        <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "20px" }}>Achievements</h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "10px", marginBottom: "48px" }}>
        {ACHIEVEMENTS.map((ach, i) => (
          <FadeIn key={ach.title} delay={i * 0.05}>
            <SpotlightCard style={{ padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-1)" }}>{ach.title}</p>
              <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.6 }}>{ach.detail}</p>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>

      <Rule />
      <div style={{ marginBottom: "36px" }} />

      <FadeIn>
        <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "20px" }}>Certifications & Credentials</h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "10px" }}>
        {CERTIFICATIONS.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.05}>
            <SpotlightCard style={{ padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <p style={{ fontSize: "13.5px", fontWeight: 500, lineHeight: 1.5, color: "var(--text-1)", marginBottom: "8px" }}>{cert.name}</p>
              <span style={{ fontSize: "11px", color: "var(--text-3)", fontFamily: "'SF Mono','Fira Code',monospace" }}>{cert.date}</span>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </div>
  </main>
));