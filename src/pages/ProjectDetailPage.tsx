import { memo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants/data";
import { Icon } from "../components/icons/Icons";
import { FadeIn } from "../components/ui/FadeIn";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { Chip } from "../components/ui/Chip";
import { SolidBtn } from "../components/ui/SolidBtn";
import { Rule } from "../components/ui/Rule";

export const ProjectDetailPage = memo(() => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return (
      <main style={{ paddingTop: "108px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Project Not Found</h2>
          <Link to="/projects" style={{ color: "var(--purple)", fontWeight: 500 }}>Back to Projects</Link>
        </div>
      </main>
    );
  }

  // Get other projects for a "More Projects" section
  const moreProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <main style={{ paddingTop: "108px", minHeight: "100vh", paddingBottom: "96px" }}>
      <div className="container-sm">
        {/* Back Link */}
        <FadeIn>
          <Link to="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-3)", fontSize: "13px", fontWeight: 500, marginBottom: "32px", transition: "color 0.15s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-1)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-3)"}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon.Arrow /></span>
            Back to projects
          </Link>
        </FadeIn>

        {/* Project Header */}
        <FadeIn delay={0.05}>
          <div style={{ position: "relative", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: project.accent + "12", display: "flex", alignItems: "center", justifyContent: "center", color: project.accent }}>
                <Icon.Code />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: project.accent, background: project.accent + "0d", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {project.category}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em", marginBottom: "12px", color: "var(--text-1)" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: project.accent, fontWeight: 500, lineHeight: 1.4 }}>
              {project.tagline}
            </p>
          </div>
        </FadeIn>

        <Rule />
        <div style={{ marginBottom: "32px" }} />

        {/* Project Details Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Main Description */}
          <FadeIn delay={0.1}>
            <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "14px" }}>About the Project</h2>
            <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8 }}>
              {project.description}
            </p>
            <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.8, marginTop: "12px" }}>
              This project was built focusing on seamless performance, robust styling, and absolute ease of use. It solves production issues using modern design practices and clean UI flow.
            </p>
          </FadeIn>

          {/* Showcase Gallery (Only if screenshots are defined) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <FadeIn delay={0.12}>
              <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "14px" }}>Project Showcase</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Main Image */}
                <div style={{ 
                  width: "100%", 
                  height: "380px", 
                  borderRadius: "var(--r-lg)", 
                  border: "1px solid var(--border)", 
                  background: "var(--bg-muted)", 
                  overflow: "hidden", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  position: "relative"
                }}>
                  <img 
                    src={project.screenshots[activeImageIndex]} 
                    alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
                    style={{ 
                      maxWidth: "100%", 
                      maxHeight: "100%", 
                      objectFit: "contain",
                      transition: "opacity 0.2s ease-in-out"
                    }} 
                  />
                  {/* Subtle info tag */}
                  <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(9, 9, 11, 0.7)", backdropFilter: "blur(4px)", color: "#fff", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 500 }}>
                    {activeImageIndex + 1} / {project.screenshots.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div style={{ 
                  display: "flex", 
                  gap: "10px", 
                  overflowX: "auto", 
                  paddingBottom: "8px",
                  scrollbarWidth: "thin"
                }}>
                  {project.screenshots.map((screen, idx) => (
                    <button 
                      key={screen} 
                      onClick={() => setActiveImageIndex(idx)}
                      style={{ 
                        width: "80px", 
                        height: "56px", 
                        flexShrink: 0, 
                        borderRadius: "8px", 
                        border: activeImageIndex === idx ? `2px solid ${project.accent}` : "1px solid var(--border)",
                        background: "var(--bg-muted)",
                        overflow: "hidden",
                        padding: 0,
                        cursor: "pointer",
                        opacity: activeImageIndex === idx ? 1 : 0.6,
                        transition: "all 0.15s"
                      }}
                      onMouseEnter={(e) => { if(activeImageIndex !== idx) e.currentTarget.style.opacity = "0.9"; }}
                      onMouseLeave={(e) => { if(activeImageIndex !== idx) e.currentTarget.style.opacity = "0.6"; }}
                    >
                      <img 
                        src={screen} 
                        alt="thumbnail" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Tech Stack */}
          <FadeIn delay={0.15}>
            <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "14px" }}>Technologies Used</h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {project.tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </FadeIn>

          {/* Key Features (Derived dynamically or nicely formatted placeholder details for presentation) */}
          <FadeIn delay={0.2}>
            <h2 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "14px" }}>Key Features & Highlights</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: project.accent, marginTop: "4px" }}><Icon.Check /></span>
                <p style={{ fontSize: "14.5px", color: "var(--text-2)" }}><strong>Robust Architecture</strong>: Engineered with a clean code structure and modular design pattern.</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: project.accent, marginTop: "4px" }}><Icon.Check /></span>
                <p style={{ fontSize: "14.5px", color: "var(--text-2)" }}><strong>Responsive & Adaptive</strong>: Adapts dynamically from mobile views to ultra-wide desktop monitors.</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: project.accent, marginTop: "4px" }}><Icon.Check /></span>
                <p style={{ fontSize: "14.5px", color: "var(--text-2)" }}><strong>Modern Tech Stack</strong>: Built using the latest technology paradigms including {project.tech[0]} and {project.tech[1] || "modern frameworks"}.</p>
              </div>
            </div>
          </FadeIn>

          {/* Links Section */}
          <FadeIn delay={0.25}>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
              <SolidBtn href={project.github} style={{ padding: "12px 24px" }}>
                <Icon.GitHub /> View GitHub Source
              </SolidBtn>
              {project.live && project.live !== "#" && (
                <SolidBtn href={project.live} style={{ padding: "12px 24px", background: project.accent }}>
                  <Icon.ArrowUpRight /> Launch Live Website
                </SolidBtn>
              )}
            </div>
          </FadeIn>
        </div>

        <div style={{ margin: "56px 0" }} />
        <Rule />
        <div style={{ marginBottom: "40px" }} />

        {/* More Projects Section */}
        <FadeIn delay={0.3}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>More Projects</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", flexWrap: "wrap" }}>
            {moreProjects.map((p) => (
              <Link to={`/projects/${p.id}`} key={p.id} style={{ display: "block" }}>
                <SpotlightCard style={{ padding: "20px" }}>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-1)", marginBottom: "4px" }}>{p.title}</h4>
                  <p style={{ fontSize: "12px", color: "var(--text-3)" }}>{p.tagline}</p>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </main>
  );
});
