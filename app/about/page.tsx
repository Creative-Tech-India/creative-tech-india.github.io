import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Creative Technology India",
  description:
    "Primer on creative technology, core disciplines, industry applications, and our mission & vision in India.",
};

const DISCIPLINES = [
  {
    title: "XR (AR / VR / MR)",
    badge: "Spatial",
    desc: "Spatial computing, headsets, mobile augmented reality overlays, and mixed reality environments blurring physical and virtual boundaries.",
    tags: ["WebXR", "Unity", "Unreal", "Vision Pro"],
  },
  {
    title: "Physical Computing",
    badge: "Hardware",
    desc: "Microcontroller interfaces, custom sensors, kinetic actuators, wearable tech, and tactile spatial controls.",
    tags: ["Arduino", "ESP32", "Raspberry Pi", "DMX"],
  },
  {
    title: "New Media Art",
    badge: "Generative",
    desc: "Algorithmic visuals, real-time node graphics, GLSL shaders, facade projection mapping, and gallery installations.",
    tags: ["TouchDesigner", "p5.js", "GLSL", "Notch"],
  },
  {
    title: "Interaction Design",
    badge: "Experience",
    desc: "Responsive environments, multi-touch screens, computer vision tracking, and gesture-driven experiential spaces.",
    tags: ["Phygital", "LiDAR", "Computer Vision"],
  },
  {
    title: "HCI & Prototyping",
    badge: "Research",
    desc: "Tangible user interfaces, brain-computer interfaces, bio-sensing, and critical & speculative design futures.",
    tags: ["Tangible UI", "Bio-sensing", "Spatial Audio"],
  },
  {
    title: "Algorave & Live Coding",
    badge: "Audio",
    desc: "Writing live code on stage to generate electronic music and synchronized procedural visuals in real time.",
    tags: ["TidalCycles", "Sonic Pi", "Hydra"],
  },
];

const APPLICATIONS = [
  {
    title: "Events & Live Festivals",
    desc: "Audio-reactive concert visuals, dynamic light choreography, architectural projection mapping, and festival art zones.",
    tags: ["Concerts", "Art Festivals"],
  },
  {
    title: "Retail & Brand Activations",
    desc: "Pop-up brand experiences, 3D anamorphic displays, interactive kiosks, and experiential retail showrooms.",
    tags: ["Pop-ups", "3D Displays"],
  },
  {
    title: "Museums & Cultural Heritage",
    desc: "Interactive archival exhibits, 3D photogrammetry of artifacts, virtual walkthroughs, and kinetic installations.",
    tags: ["Digital Museums", "Archives"],
  },
  {
    title: "Education & Academia",
    desc: "Creative coding curricula, university design and computing labs, and interdisciplinary STEAM programs.",
    tags: ["Design Schools", "Makerspaces"],
  },
  {
    title: "Architecture & Public Spaces",
    desc: "Media facades, responsive building skins, kinetic sculptures, and interactive public civic installations.",
    tags: ["Media Architecture", "Civic Spaces"],
  },
  {
    title: "Therapy & Accessibility",
    desc: "Immersive VR for rehabilitation, multi-sensory snoezelen spaces, and tactile assistive tools.",
    tags: ["Therapeutic VR", "Sensory Rooms"],
  },
];

export default function AboutPage() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-meta">PRIMER</div>
        <h1>What is Creative Technology?</h1>
        <p className="lead-text">
          Creative Technology is the interdisciplinary convergence of art,
          design, and computer science. Practitioners use code, electronics, and
          algorithms as creative mediums to design interactive and sensory
          experiences.
        </p>

        <div className="def-card">
          <div className="def-quote">
            &ldquo;Designing the invisible dialogue between humans, machines,
            and physical environments.&rdquo;
          </div>
          <div className="def-byline">Landscape Definition</div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section>
        <div className="section-header">
          <span className="section-tag">PURPOSE</span>
          <h2 className="section-title">Mission & Vision</h2>
        </div>

        <div className="purpose-grid">
          <div className="purpose-item">
            <div className="purpose-label">Mission</div>
            <p className="purpose-text">
              To promote creative technology in all its forms across India.
            </p>
          </div>
          <div className="purpose-item">
            <div className="purpose-label">Vision</div>
            <p className="purpose-text">
              To make creative experimentation a mainstream medium of cultural
              and technological expression across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Disciplines */}
      <section>
        <div className="section-header">
          <span className="section-tag">DISCIPLINES</span>
          <h2 className="section-title">Core Disciplines</h2>
          <p className="section-desc">
            Key technical and artistic domains driving the field:
          </p>
        </div>

        <div className="cards-grid">
          {DISCIPLINES.map((item) => (
            <div key={item.title} className="item-card">
              <div className="item-header">
                <span className="item-title">{item.title}</span>
                <span className="item-badge">{item.badge}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
              <div className="item-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Domains */}
      <section>
        <div className="section-header">
          <span className="section-tag">APPLICATIONS</span>
          <h2 className="section-title">Application Domains</h2>
          <p className="section-desc">
            Where creative technology is deployed in industry and culture:
          </p>
        </div>

        <div className="cards-grid">
          {APPLICATIONS.map((item) => (
            <div key={item.title} className="item-card">
              <div className="item-header">
                <span className="item-title">{item.title}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
              <div className="item-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="cta-banner">
        <div className="cta-text">
          <h3>Creative Technology Directory</h3>
          <p>Explore index of studios, labs, and practitioners across India.</p>
        </div>
        <div>
          <Link href="/" className="action-link">
            View Directory ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
