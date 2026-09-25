import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute | Creative Technology India",
  description:
    "Ways to contribute to Creative Technology India: adding listings, managing data, website development, planning offline events, social media, writing articles, and video documentation.",
};

const CONTRIBUTION_AREAS = [
  {
    num: "01",
    title: "Directory Management & Curation",
    desc: "Help discover emerging artists and underground studios, vet incoming submissions, tag technical disciplines, and keep listings verified and up to date.",
  },
  {
    num: "02",
    title: "Website & Engineering",
    desc: "Contribute code to our open-source Next.js repository. Build new features like interactive city maps, enhanced search filters, submission forms, and API endpoints.",
  },
  {
    num: "03",
    title: "Offline Events & Meetups",
    desc: "Help plan and host offline creative code jams, interactive demo nights, patch circles, hackathons, and physical computing workshops in your city.",
  },
  {
    num: "04",
    title: "Social Media & Community",
    desc: "Manage community channels, curate weekly artist/studio spotlights, share event announcements, and foster connections across city hubs.",
  },
  {
    num: "05",
    title: "Writing & Editorial",
    desc: "Write in-depth practitioner interviews, project breakdowns, tutorials, essays, and trend roundups covering creative technology across India.",
  },
  {
    num: "06",
    title: "Video & Visual Documentation",
    desc: "Document interactive installations, live media performances, festival showcases, and artist studio tours through high-quality video and photo archives.",
  },
];

export default function ContributePage() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-meta">GET INVOLVED</div>
        <h1>Contribute to Creative Tech India</h1>
        <p className="lead-text">
          Creative Technology India is a community-driven, open-source
          initiative built to map, document, and connect the country&apos;s
          creative computing ecosystem. Whether you have code, words, event
          ideas, or directory updates, your contribution helps grow this space.
        </p>
      </section>

      {/* Directory Updates: Adding & Updating */}
      <section>
        <div className="section-header">
          <span className="section-tag">DIRECTORY</span>
          <h2 className="section-title">Add or Update a Listing</h2>
          <p className="section-desc">
            Keeping this index comprehensive and accurate is an ongoing
            community effort.
          </p>
        </div>

        <div className="contribute-grid">
          <div className="contribute-item">
            <span className="contribute-num">ADD</span>
            <h3 className="contribute-item-title">Add a New Entry</h3>
            <p className="contribute-item-desc">
              Know of a creative technology studio, experimental lab, artist,
              academic program, festival, or collective that should be listed?
              Share their name, category, location, and website or social link.
            </p>
          </div>

          <div className="contribute-item">
            <span className="contribute-num">UPDATE</span>
            <h3 className="contribute-item-title">Update or Correct Details</h3>
            <p className="contribute-item-desc">
              Notice a broken link, outdated city, or inaccurate information?
              Apologies if any details are currently incomplete or incorrect—we
              aim to continuously improve and keep every listing accurate.
            </p>
          </div>
        </div>

        <div className="contribute-actions" style={{ marginBottom: "2.5rem" }}>
          <a
            href="mailto:hello@creativetechindia.net?subject=Directory%20Addition%20or%20Update"
            className="action-link"
          >
            Email details to hello@creativetechindia.net ↗
          </a>
          <a
            href="https://github.com/Creative-Tech-India/creative-tech-india.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
          >
            Submit via GitHub Pull Request ↗
          </a>
        </div>
      </section>

      {/* Ways to Contribute List */}
      <section>
        <div className="section-header">
          <span className="section-tag">ROLES & COLLABORATION</span>
          <h2 className="section-title">Ways to Contribute</h2>
          <p className="section-desc">
            We are actively looking for contributors and collaborators across
            these areas:
          </p>
        </div>

        <div className="contribute-grid">
          {CONTRIBUTION_AREAS.map((item) => (
            <div key={item.num} className="contribute-item">
              <span className="contribute-num">{item.num}</span>
              <h3 className="contribute-item-title">{item.title}</h3>
              <p className="contribute-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section className="cta-banner">
        <div className="cta-text">
          <h3>Want to Get Involved?</h3>
          <p>
            Drop us a message sharing how you&apos;d like to contribute. We&apos;d
            love to hear from you.
          </p>
        </div>
        <div>
          <a
            href="mailto:hello@creativetechindia.net?subject=Contributing%20to%20Creative%20Tech%20India"
            className="action-link"
          >
            Write to hello@creativetechindia.net ↗
          </a>
        </div>
      </section>
    </main>
  );
}
