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
    tags: ["VR", "AR", "MR", "Immersive experiences", "spatial audio soundscapes"],
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
    title: "Interactive Media",
    badge: "Adaptive",
    desc: "Media that can be defined as independent entities that respond to actions based on user, external data or environmental input. This approach treats audio, video, and content as self-aware, modular assets that can dynamically react by adapting narrative and layout in real time based on broader established  context.",
    tags: ["DataViz", "Installation art", "Hypermedia narratives"],
  },
  {
    title: "Tangible Media",
    badge: "Physical",
    desc: "Physical mediums that anchor digital or creative works into material substrates. By giving stable, tactile form to otherwise transient data, this approach allows content to be directly manipulated, multi-sensorially experienced, and archived through physical and embodied artifacts.",
    tags: ["Physical Computing", "Tactile UI", "Embodied Artifacts"],
  },
];

const APPLICATIONS = [
  {
    title: "Commercial",
    desc: "Live concert visuals, festival art zones, digital billboards, experiential retail pop-ups, and interactive brand activations that merge marketing with experiential technology.",
    tags: ["Brand Activations", "Concerts & Festivals", "Experiential Retail", "Digital Billboards"],
  },
  {
    title: "Art",
    desc: "New media artworks, gallery installations, generative audio-visual systems, livecoding / algorave performances, kinetic sculptures, and computational aesthetic expressions.",
    tags: ["New Media Art", "Interactive Installations", "Live Coding", "Generative Art"],
  },
  {
    title: "Design",
    desc: "Spatial computing, media architecture, interactive environments, tangible interfaces, and context-aware physical computing designed for human interaction.",
    tags: ["Interaction Design", "Spatial Computing", "Media Architecture", "Tangible UI"],
  },
  {
    title: "Culture & DIY",
    desc: "Grassroots maker culture, open-source hardware, 3D printing, circuit bending, bespoke musical instruments, e-textiles, and the fusion of traditional crafts with modern digital fabrication.",
    tags: ["Open Hardware", "3D Printing", "DIY Electronics", "Digital Craft"],
  },
  {
    title: "Education",
    desc: "Creative coding curricula, academic design and computing labs, interactive museum learning, makerspaces, and interdisciplinary STEAM pedagogies for the next generation.",
    tags: ["Creative Coding", "STEAM Pedagogy", "Design Schools", "Museum Learning"],
  },
  {
    title: "Science",
    desc: "Complex data visualization, environmental sensor networks, physics and biological simulations, biosensing, and creative interpretations of scientific phenomena.",
    tags: ["Scientific Visualization", "Simulation", "Biosensing", "Environmental Data"],
  },
  {
    title: "Research",
    desc: "Formal academic and industry research into Human-Computer Interaction (HCI), computational creativity support tools, cognitive psychology, and speculative future technologies.",
    tags: ["HCI Research", "Creativity Support", "Cognitive Studies", "Speculative Design"],
  },
  {
    title: "Wellbeing",
    desc: "Immersive VR for physical and cognitive rehabilitation, multi-sensory snoezelen rooms, assistive physical controllers, and neuroinclusive tools designed for care and accessibility.",
    tags: ["Therapeutic VR", "Sensory Rooms", "Assistive Tech", "Neuroinclusion"],
  },
];

export default function AboutPage() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="about-hero">
        <h1>Creative Tech India</h1>
        <p className="lead-text">
          Creative Tech India is a community of practitioners, researchers,
          organisations and enthusiasts involved in various media explorations
          and experimentation across India providing an open space to connect,
          learn, explore and showcase. We aim to strengthen and promote the
          creative tech ecosystem across India.
        </p>
        <p className="lead-text">
          Write to{" "}
          <a href="mailto:hello@creativetechindia.net">
            hello@creativetechindia.net
          </a>{" "}
          for connecting with us. Open for suggestions and contributions.
        </p>
      </section>

      {/* Definition & Core Disciplines */}
      <section>
        <div className="section-header">
          <h2 className="section-title">What is Creative Technology?</h2>
          <p className="section-desc" style={{ maxWidth: "720px", marginBottom: "1rem" }}>
            Creative Technology is the interdisciplinary convergence of art,
            design, music, research, technology, AI, web, and computation.
            Practitioners use code, electronics, materials, and algorithms as
            creative mediums to create interactive and sensory experiences.
          </p>
        </div>

        <div className="section-header" style={{ borderTop: "none", paddingTop: "0.25rem" }}>
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
