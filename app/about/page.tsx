import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Creative Technology India",
  description:
    "Primer on creative technology, core disciplines, industry applications, and our mission & vision in India.",
};

const DISCIPLINES = [
  {
    title: "Immersive Media",
    badge: "Spatial",
    desc: "Digital spaces or platforms that envelop the viewer to create a feeling of presence. This includes Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR), and 360-degree interactive environments.",
    tags: ["VR", "AR", "MR", "360° Environments"],
  },
  {
    title: "Synthetic Media",
    badge: "AI / ML",
    desc: "Artificially created or altered digital media—including images, video, audio, and text—generated using artificial intelligence, machine learning algorithms, and deep learning technologies (e.g., AI voice clones, deepfakes, text-to-image art).",
    tags: ["Generative AI", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Computational Media",
    badge: "Algorithmic",
    desc: "Media designed, produced, and consumed through programmable hardware and algorithmic logic. Unlike static media, its final output is determined interactively by computational processing, generative code, and software frameworks. Includes video art and livecoding.",
    tags: ["Generative Code", "Video Art", "Livecoding"],
  },
  {
    title: "Moist Media",
    badge: "Biological",
    desc: "A concept coined by theorist Roy Ascott describing the fusion of dry silicon-based computing with wet biological systems. It serves as the material substrate for BioArt, genetic art, and interactive systems where technological networks interface directly with organic life or consciousness.",
    tags: ["BioArt", "Genetic Art", "Organic Systems"],
  },
  {
    title: "Object-Based Media",
    badge: "Adaptive",
    desc: "A framework where digital content is broken down into structured, individual components that combine software-driven intelligence with context-aware devices. Rather than relying on fixed, pre-rendered video or audio files, this approach treats media assets as \"self-aware\" objects that dynamically self-organize and adapt in real time based on user interactions, environmental data, and screen capabilities.",
    tags: ["Context-Aware", "Dynamic Assets", "Real-Time Adaptation"],
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
